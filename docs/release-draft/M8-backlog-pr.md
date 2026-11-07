# M8 · BACKLOG 状态行回填 PR 草稿（冻结待晨审放行）

> 走 PR 前先 `git pull` 最新 main（31 号：只改状态列）。

## 待执行命令（晨审放行后）

```bash
cd /tmp && gh repo clone xyb-openharness-dsh-plugins/.github backlog-pr && cd backlog-pr
git checkout -b status/egid-claimed
# 编辑 BACKLOG.md 罕见病表该行：
#   | 23 | 嗜酸性粒细胞性胃肠炎 | 134 | T2 | ⬜ 招募中 | 👤🤝📝 |
# → | 23 | 嗜酸性粒细胞性胃肠炎 | 134 | T2 | 🔵 [egid-workbench](https://github.com/xyb-openharness-dsh-plugins/eosinophilic-gastroenteritis-workbench) v0.3.0（2026-11-08 认领 [Issue #64](…/issues/64)；M0–M6 完成+M9，G1–G3/V1/V2 自动签认待追认，V3 UI 走查待人工；0 访谈/0 临床审核如实标注） | 👤🤝📝🩺 补位 |
git commit -am "BACKLOG: #134 嗜酸性粒细胞性胃肠炎 → 🔵 egid-workbench v0.3.0（Issue #64）"
gh pr create --title "BACKLOG 状态回填：嗜酸性粒细胞性胃肠炎（Issue #64 → egid-workbench v0.3.0）" --body-file /path/to/PR-BODY.md
```

## PR 描述草稿

- 只改状态列（31 号口径），不动其他行
- 依据：认领 [Issue #64](https://github.com/xyb-openharness-dsh-plugins/.github/issues/64)；仓 v0.3.0，M0–M6 + M9 完成；全部闸口为夜间自动签认待晨审追认；V3 UI 走查与 M7 release、本 PR 本身待晨审放行
