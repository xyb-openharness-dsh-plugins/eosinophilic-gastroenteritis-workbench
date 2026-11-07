# M7 · tag + GitHub release 草稿（冻结待晨审放行）

> 夜间无人值守纪律：本仓 M7 冻结为草稿，不建 tag、不发 release、不推送外部；晨审追认后执行下方命令即可。

## 待执行命令（晨审放行后）

```bash
git tag v0.3.0 && git push origin v0.3.0
gh release create v0.3.0 \
  release/xyb-community-eosinophilic-gastroenteritis-workbench-0.3.0.tgz \
  --title "小嗜宝 EosPal v0.3.0（M5 开发版）" \
  --notes-file docs/release-draft/RELEASE-NOTES-0.3.0.md
```

## 产物

- tgz：release/xyb-community-eosinophilic-gastroenteritis-workbench-0.3.0.tgz（46 文件 3.07MB）
- sha256：`0a20c3e12324cc7e9e93022d5e7bdfb0670cc6e9b8f00ffd6e5d5413270d7c91`

## RELEASE-NOTES-0.3.0.md 草稿

### 小嗜宝 EosPal v0.3.0 — 嗜酸性粒细胞性胃肠炎工作台（M5 开发版）

- 疾病概要整页四段（? 按钮 + 首页双入口），据国家卫健委《86 个罕见病病种诊疗指南（2025 年版）》p134 整理，来源四态标注
- 发作—缓解事件带与状态卡（缓解第 N 天/距上次发作/近 90 天次数，私密不计入）
- 嗜酸粒细胞计数趋势一图秀（方法/机构不合并）、3D 指标卡（7 指标 4 组）
- 饮食剔除（6-FED/要素膳）与按次用药登记、内镜与病理按次（活检 /HPF 只照录不判读）
- 临床试验四段链路（本地快照 53 条，ictrp/ctv 通道；chictr_online FAILED 如实不计覆盖）
- 复诊准备、多医院就医信息、私密三出口过滤、AI 候选草稿（egid:agent-draft，未接入会话如实标注）
- 质量：check exit 0 / test 37/37 / audit 44/44 / 探针 36+10+13；DSH Desktop V2 装机验证 exit 0
- 已知限制：0 患者访谈、0 临床审核；MinerU 未接入（勾选与保存不联网）；UI 真机走查待人工
