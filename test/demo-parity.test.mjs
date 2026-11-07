/* 演示唯一源 parity 测试：readBootstrap（db）与 prototypes/v0.2/demo-data.js 形状一致
 * 口径：canonical JSON（递归删除 null/undefined 键后逐字节比对）——demo-data 手写数据
 * 允许可选键缺省与显式 null 两种写法，读模型输出固定键集（null 显式），两边语义等价。
 * TODAY 除外：演示数据冻结在原型日，读模型返回服务器当前日期（派生值读时算）。
 */
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { DatabaseSync } from 'node:sqlite'
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

function canonical(v) {
  if (Array.isArray(v)) return v.map(canonical).filter((x) => x !== undefined)
  if (v && typeof v === 'object') {
    const out = {}
    for (const k of Object.keys(v)) {
      const c = canonical(v[k])
      if (c !== null && c !== undefined) out[k] = c
    }
    return out
  }
  return v
}

function loadDemo() {
  return new Function('window', readFileSync(join(ROOT, 'prototypes/v0.2/demo-data.js'), 'utf-8') + '; return window.DEMO_DATA;')({})
}

function bootFromDb() {
  const db = new DatabaseSync(':memory:')
  const dir = join(ROOT, 'schema')
  for (const f of readdirSync(dir).filter((f) => /^\d{4}_.*\.sql$/.test(f)).sort()) {
    db.exec(readFileSync(join(dir, f), 'utf-8'))
  }
  return import(join(ROOT, 'dsh/readmodels.js')).then(async (rm) => {
    const demo = await import(join(ROOT, 'dsh/demo.js'))
    demo.seedDemoData(db)
    return rm.readBootstrap(db)
  })
}

test('parity: 档案数量与 TODAY 键存在（TODAY 读时取当前日期，不比对字面量）', async () => {
  const [b, demo] = await Promise.all([bootFromDb(), Promise.resolve(loadDemo())])
  assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(b.TODAY), 'TODAY 是 YYYY-MM-DD')
  assert.equal(b.profiles.length, demo.profiles.length)
  assert.deepEqual(b.profiles.map((p) => p.id), demo.profiles.map((p) => p.id))
})

test('parity: A/B 档案全部字段 canonical 一致（先证两边非空，含 diets）', async () => {
  const [b, demo] = await Promise.all([bootFromDb(), Promise.resolve(loadDemo())])
  for (const expected of demo.profiles) {
    const a = b.profiles.find((p) => p.id === expected.id)
    assert.ok(a, `档案 ${expected.id} 数据库侧存在`)
    const fields = Object.keys(expected)
    assert.ok(fields.length >= 10, `档案 ${expected.id} 参照字段数 ${fields.length}`)
    assert.ok(Array.isArray(expected.diets) && expected.diets.length > 0, `档案 ${expected.id} 演示源含 diets`)
    const diffs = []
    for (const f of fields) {
      if (JSON.stringify(canonical(a[f])) !== JSON.stringify(canonical(expected[f]))) diffs.push(f)
    }
    assert.deepEqual(diffs, [], `档案 ${expected.id} 字段差异：${diffs.join(', ')}`)
  }
})

test('parity: diets 与 demo-data 逐条一致（含日期未知示例与私密示例）', async () => {
  const [b, demo] = await Promise.all([bootFromDb(), Promise.resolve(loadDemo())])
  for (const expected of demo.profiles) {
    const a = b.profiles.find((p) => p.id === expected.id)
    assert.deepEqual(canonical(a.diets), canonical(expected.diets), `档案 ${expected.id} diets 不一致`)
  }
  const bb = b.profiles.find((p) => p.id === 'demo-b')
  assert.equal(bb.diets.length, 6, 'B 档案 6 条饮食记录')
  assert.equal(bb.diets.filter((d) => d.private).length, 1, 'B 档案 1 条私密饮食')
  assert.equal(bb.diets.filter((d) => d.date === null).length, 1, 'B 档案 1 条日期未知饮食（显式 null）')
})

test('parity: endoscopies 由内镜/病理 reports 逐份派生（biopsy_note=关键描述照录，不判读）', async () => {
  const b = await bootFromDb()
  const a = b.profiles.find((p) => p.id === 'demo-a')
  const bb = b.profiles.find((p) => p.id === 'demo-b')
  for (const p of [a, bb]) {
    const endoReports = p.reports.filter((r) => r.kind === '内镜' || r.kind === '病理')
    assert.equal(p.endoscopies.length, endoReports.length, `${p.id} 每份内镜/病理报告一行按次`)
    for (const e of p.endoscopies) {
      const r = p.reports.find((x) => x.id === e.reportId)
      assert.ok(r, `${p.id} endoscopy 关联到存在的报告`)
      assert.equal(e.biopsyNote, r.finding, 'biopsy_note 与报告关键描述照录一致')
      assert.ok(e.scope === null || ['胃镜', '肠镜', '胃镜+肠镜'].includes(e.scope), `scope_site 枚举内：${e.scope}`)
    }
  }
  assert.equal(a.endoscopies[0].scope, '胃镜')
  const scopes = bb.endoscopies.map((e) => e.scope)
  assert.deepEqual(scopes, ['胃镜', '胃镜', '肠镜', null], 'B 档案 scope_site 派生（病理会诊报告无镜种 → null 不猜）')
})

test('parity: 私密行随全量返回（页面显示徽标、聚合用 sharedOnly 口径不变）', async () => {
  const b = await bootFromDb()
  const bb = b.profiles.find((p) => p.id === 'demo-b')
  assert.equal(bb.flaps.filter((f) => f.private).length, 1, 'B 档案 1 条私密发作')
  assert.equal(bb.labs.filter((l) => l.private).length, 1, 'B 档案 1 条私密化验')
  assert.equal(bb.reports.filter((r) => r.private).length, 1, 'B 档案 1 条私密报告')
  assert.equal(bb.mind.feel.filter((x) => x.private).length, 1, 'B 档案 1 条私密感受')
})

test('parity: 空库与有库行为（播种幂等）', async () => {
  const db = new DatabaseSync(':memory:')
  const { readdirSync } = await import('node:fs')
  const dir = join(ROOT, 'schema')
  for (const f of readdirSync(dir).filter((f) => /^\d{4}_.*\.sql$/.test(f)).sort()) {
    db.exec(readFileSync(join(dir, f), 'utf-8'))
  }
  const demo = await import(join(ROOT, 'dsh/demo.js'))
  const r1 = demo.seedDemoData(db)
  const r2 = demo.seedDemoData(db)
  assert.equal(r1.skipped, false)
  assert.equal(r2.skipped, true)
  assert.equal(r2.profiles, 2)
})
