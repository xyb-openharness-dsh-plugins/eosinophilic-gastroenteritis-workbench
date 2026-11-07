# research/egid · 临床库四件套（M4 · 2026-11-07 夜间）

## 是什么

- `manifest.json`：采集口径、来源终态、计数与 sha256（唯一入口账本）。
- `trials-2026.jsonl`：53 条合并后记录（同一登记号合并，其余并排保留来源）。
- `egid_trials_2026.sqlite`：trials 53 行 + source_statuses 24 行。
- 本 README：口径与终态如实记录。

## 采集口径

- 唯一入口：unified-trial-mcp（MCP stdio），未自拼 URL。4 组关键词（eosinophilic gastroenteritis / 嗜酸性粒细胞性胃肠炎 / eosinophilic gastrointestinal diseases / eosinophilic gastritis），每源上限 200。
- 快照日期：manifest.snapshotDate（2026-11-07）。登记状态一律「登记状态，未核实」；快照会过期。
- bySource：ctv=2、ictrp=51（合并后 53 条）。

## 来源通道终态（如实记录，FAILED ≠ 查过零结果）

| 通道 | 终态（按关键词实测） |
| --- | --- |
| chinadrugtrials（中国药监线上） | 4 组关键词均 NO_RESULTS（查过、无命中，不是没查） |
| xyb_chinadrugtrials_archive | 4 组关键词均 NO_RESULTS |
| chictr_online（ChiCTR 线上） | 4 组关键词均 **FAILED**（服务侧失败，未取得结果，不计覆盖） |
| chictr_pancreatic_archive | NEEDS_SETUP（离线语料仅胰腺癌覆盖，未配置） |
| ctv | eosinophilic gastroenteritis=SUCCESS(37)、嗜酸性粒细胞性胃肠炎=NO_RESULTS、EGID 族=SUCCESS(15)、eosinophilic gastritis=NO_RESULTS |
| ictrp | 3 组 SUCCESS / 1 组 FAILED（中文关键词），51 条记录 |

## 红线

- 本目录只存登记结构化字段；入排标准原文不抓取，展示层固定写「入排标准请到官方登记页核对」。
- 登记状态一律「未核实」；快照会过期，使用前看 manifest.snapshotDate。
- FAILED 通道不得写成「零结果」；NEEDS_SETUP 不得写成「已配置」。
