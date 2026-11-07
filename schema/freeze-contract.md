# freeze-contract · 迁移冻结账本

## 规则

- `0001_initial.sql` 冻结于 2026-11-07（M3，夜间无人值守自动签认，待晨审追认）。
- 结构变更只能新增 `000N_*.sql`；修改已冻结文件会被 check 拦下。
- 判读列 0：全库无 diagnosis / risk_level / activity_score / stage / 线序 / 疗效 / 复发评分列（scripts/check-schema-words.mjs 断言）。
- 派生值（缓解第 N 天、距上次发作、近 90 天次数）读时计算，不落库。
- 活检 /HPF 只在 endoscopy_procedures.biopsy_note 照录原文，不设阈值判读列（指南：诊断阈值未确立）。

## 表清单（20：档案 2 + 指标 3 + 通用 7 + 专属 6 + 导入 3 - 通用复用）

档案级 2：subjects、section_titles；指标 3：metric_defs、lab_results、metric_group_titles；通用 7：reports、hospitals、visit_questions、mind_notes、viewpoints、documents、meds；专属 6：flap_events、treatment_events、profile_facts、diet_records、endoscopy_procedures（EGID 特有 2）；导入 3：import_batches、import_candidates、import_conflicts。

## sha256

| 文件 | sha256 | 冻结时点 |
| --- | --- | --- |
| schema/0001_initial.sql | `5c561da46dc9817dde91d8b369efb78c6d86b8bb49efaea9b99bbba2d4a538fb` | 2026-11-07 M3 |
