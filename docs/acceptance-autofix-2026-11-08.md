# USER-ACCEPTANCE-AUTOFIX 检查报告（M9 · 2026-11-08 夜班收尾）

按 prompts/USER-ACCEPTANCE-AUTOFIX.md 六类逐项检查（该提示词在本仓 M5 后生效）。任何「通过」附数字或 file:line；未复现项如实标注。

## DP. 疾病概要（？号按钮——每轮必查第一条）

- 顶栏 `data-primer-open`（index.html:39 `?`，aria-label 含四段名）：通过（probe P1）
- 首页状态卡第二入口：通过（实测点击打开 #disease-primer，按钮文案「疾病概要：嗜酸性粒细胞性胃肠炎是什么？」）
- primer.js 动态建 DOM 三件套（primer-data/primer/primer 加载序 index.html:69-73）：通过（probe P2/P8）
- 返回/✕ 双入口、Esc 一层、history 压栈：通过（P4/P5/P7）
- **探针 --url 指向本仓原型**：通过（P7 url=/prototypes/v0.2/index.html；默认打 examples 的坑本次实测两次触发：①无 --url 默认 ②8151 陈旧端口服务 pericarditis 副本——已加防呆横幅并回流 starter rc.22）
- 回归：probe-disease-primer **10/10**（本仓原型）+ check-primer-links 全绿（L 组 5 通过 1 失败→补 L13 固定出口句后 6/6，check exit 0）

## A. 设置与弹层

- CFG1 探针：弹层打开 + 三 tab 逐字（工作区|文档解析（MinerU）|临床数据库）：通过（egid-m2 CFG1）
- MinerU 未接入「勾选与保存不联网」标注：通过（mineru.js + dsh/mineru.js EGID 词表）
- 侧栏无设置项：通过（PAGES 9 页无 settings）

## B. 功能线完整性

- 一级导航 9 页（PAGES）+ 顶栏资料目录，与 starter 交付清单对照：通过（独立评审第 8 项修复 DIFF-MATRIX 口径后一致）
- 21 条叶子路由全部渲染非空（孤儿页=0）：通过（egid-m2 IP2）
- 临床线落点：clinical/facts|search|match|saved 四子页 + 设置临床数据库 tab 同口径：通过（CLIN0/1 + CFG1）

## C. 试验匹配红线（35 号）

- 分数方块 +「登记字段符合度」+ n/m 固定行：通过（CLIN1）
- 逐条证据链三态 + 候选池口径 + 入排声明 + 禁词 0（含否定句规避）：通过（CLIN1 + check-wording 21 文件 0 命中）
- 纯函数：可对照不足 2 不给百分数、靶点不进分母（items.length===2 断言）：通过（CLIN2 相关 100/不相关诚实 0 + 硬性✕）

## D. 指标卡与指标体系

- 指标体系覆盖度（嗜酸粒相关/血象/营养与并发症/体征 4 组 7 指标，对照 CLINICAL-DATA.md）：通过（MC1 卡 7/组 4；TILE1 看板 7 张）
- 翻转双通道（aria-pressed + .flipped + matrix3d rotateY -1）：通过（FLIP2，先重置再点）
- 卡片定高 194±1、同网格差 ≤1、DOM 数不变、焦点保持：通过（MT07/C11/C12）

## E. 录入窗口（F 系盘点）

- 六个可写页「＋」页首入口 + 表单本体（#form-*）+ 三态保存：通过（ADD1/ADD2）
- 饮食表单（EGID 新增线）≤4 字段、私密切换、三态：通过（app.js save-diet-* 与 demo-parity 断言）
- 无裸删除（ver/superseded_by 版本链，schema 断言）：通过（test/schema 4/4）

## 修复轮次

本轮 1 轮：独立评审 P1×1 + P2×3 修复（DIFF-MATRIX 口径、AI 数字派生、preventDefault、L13 出口句），修复后 check/test/探针全量复跑绿。未触发 2 轮上限。

## 未复现/待人工

- 宿主形态 UI 走查（Desktop 点真实按钮）：夜间无人值守不驱动桌面 UI，待人工（同 V3 结论）；已按最坏假设做的防御=探针三件套 + ui-parity 双闸 + 真机服务层断言
- 真机截图（Q30）：待用户走查后替换 README 截图区
