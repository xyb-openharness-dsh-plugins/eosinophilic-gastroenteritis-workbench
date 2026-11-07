# DEV-PLAN · 小嗜宝 EosPal 开发计划

版本 v0.1.0 · 夜间无人值守 23:00–08:00 · 模型：GLM-5.3-Flash（免费档）

## 领取理由（写进文档的自动领取说明）

- BACKLOG ⬜ 池：T0/T1 已全部被认领（含 #60 软骨发育不全已完成 M0–M9），从未认领 T2 池选病种。
- 选 **嗜酸性粒细胞性胃肠炎**（罕见病目录 #134 · R2 非肿瘤慢性病型 · T2）：
  1. 随访天然结构化（嗜酸粒细胞化验、发作—缓解、按次用药、饮食剔除、内镜按次）；
  2. 与家族已有仓差异化明显（家族 GI 均为癌种，无良性 GI 病种仓）；
  3. 认领 Issue #64 → /claim → claimed 标签已确认（2026-11-07 23:0x）。
- 放弃的候选：#15 冷凝集素病（与 TTP 血液指标重叠）、#35 巨细胞动脉炎（与大动脉炎/ANCA 血管炎家族近）。

## 参考基准

- 小粉宝 breast-cancer-workbench/prototypes/v0.4：hero、五 Tab、分类眉题、指标卡、最近报告表、primer 三件套。
- 小橙宝 aml-workbench/prototypes/v0.2：导航分组、#mind/mind-burden、事件泳道、折叠卡。
- 移植样板：cervical-workbench（客户端链路底本）。只抄结构与元素体系。

## 里程碑计划（M0–M9）

| 里程碑 | 交付 | 闸口 |
| --- | --- | --- |
| M0 | 领取四步 + 文档九件 + 基线 check | — |
| M1 | 三路调研 + DIFF-MATRIX 重名率实测 + 证据台账 | G1 |
| M2 | 原型 v0.2 四件套 + 两套合成档案 + 探针 + 独立评审 P0 清零 | G2 |
| M3 | schema/0001_initial.sql + freeze-contract | G3 |
| M4 | 试验抓取脚本 + research 四件套（FAILED 如实） | — |
| M5 | 七步移植 + MinerU 六部件 + test 五套 + check 全绿 | V1 |
| M6 | 装机 DSH Desktop profile + 真机走查 | V2/V3 |
| M7/M8 | tag/release 与 BACKLOG 回填 PR 草稿冻结 docs/release-draft/ | — |
| M9 | 经验回流 starter + AUTOFIX 检查修复 | — |

## 时间盒与风险

- 单处错误（额度/鉴权/套餐）最多重试 2 次，仍失败停跑写报告。
- V3 真机：Desktop 未运行时如实写未验证，继续不依赖装机的工作。
- push 失败最多 2 次，本地 commit 即里程碑完成，晨审补推。
