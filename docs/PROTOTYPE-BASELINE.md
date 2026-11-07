# PROTOTYPE-BASELINE · 家族对照记录（M1 · 一手实测）

对照对象与口径逐字保留；只抄结构与元素体系，不抄病种语义。以下观察均为本仓开发时一手 grep/读码取得（2026-11-07）。

## 小粉宝 breast-cancer-workbench/prototypes/v0.4（成熟对比基准）

- 四件套+两件：index.html / app.js / style.css / primer-data.js / primer.css / primer.js。
- 顶栏 top-actions（index.html:29-36）：资料目录 → AI → 设置 → 大字 → **? 疾病概要（data-primer-open，aria-label 含四段名）** → 版本。
- 首页 hero：大状态卡 + 行动带 + 快捷卡三连 + dashboard-grid（最近变化/安排与问题）；看板另有文字按钮疾病概要（app.js:624-625 primerBtn，638/655 两处插入）。
- **DP 模块**：#disease-primer 由 primer.js 动态创建；数据 window.DISEASE_PRIMER 四段 definition/evidence/landscape/trend；来源行四态；open 走 pushState，close 走 history.back()；双入口（返回/✕）+ Esc + 焦点恢复。
- 五 Tab（#records）：资料库/整理草稿核对/病情档案/指标检测/病情汇总；分类区块眉题 .metric-group-head；指标卡 .mcard 真 3D（perspective:1200px + preserve-3d + aria-pressed）。
- 一图秀：手写 SVG（980×400）、rail 左栏（时间 chips + 指标多选 + 显示内容 chips）、smoothPath、点选看来源。

## 小橙宝 aml-workbench/prototypes/v0.2（结构基准）

- 一级导航 + SUBPAGES 分组命名；#mind/mind-burden 家庭负担与照护者线（心智负担组织方式）。
- 事件泳道：内联 SVG，LANES 常量（app.js:347：cycle 36 / feverb 56 / tx 66），发作=圆角色带 rect、用药=节点 circle+title、标签错行避让（app.js:443-451）。
- AI 一键发送：aiBtn（app.js:323）`aml:agent-draft?prompt=…`，34 号契约。
- 折叠卡 details.phase-fold；空态「暂无记录。」+ 下一步按钮。

## 本台落点（抄什么）

| 元素 | 来源基准 | 病种语义替换 |
| --- | --- | --- |
| hero 大状态卡 | breast | 「缓解期第 N 天 / 发作中第 N 天」+ 距上次发作 + 近 90 天发作次数 |
| 五 Tab 病情整理 | breast | 概要/发作史/治疗与饮食/内镜病理/求助与计划 |
| 分类指标卡 + 3D 翻转 | breast | 嗜酸粒相关/血象/营养与并发症 三组（活检 /HPF 走按次卡不入组） |
| ? 疾病概要 | breast primer 三件套 | EoGE 四段（定义/医学资料规范和指南情况/治疗全景/发展趋势），来源行引卫健委 2025 原件 |
| 事件泳道 LANES | aml | 泳道改为：用药 / 就诊·检查 / 化验 / 缓解开始 / 加重 |
| 折叠卡 | aml | 「一次发作」「一次调药」「一次内镜检查」为折叠单元 |
| AI 面板 35% 可拖 | aml | `egid:agent-draft` 契约 |
| 导航分组 | aml | 看板/病程/指标/准备/资料 5 组 11 页 |

孤儿页检查在 M2 探针穷举（IP2/X1）；重名率口径见 DIFF-MATRIX.md（25% 实测）。
