# 变更记录

只增不删；每条写清"改了什么 + 为什么 + 用户可见结果"。版本号与 VERSION、package.json 三处必须一致。

## 0.3.0 — 2026-11-08（M5 开发版）

- dsh 服务层六件落地（server/store/readmodels/demo/mineru/workbench，入口 dsh/index.js 换成宿主接线形态）：开库→迁移→播种→读模型一条链；schema 用本仓冻结的 0001_initial.sql（20 表，含 EGID 专属 diet_records / endoscopy_procedures）。用户可见结果：宿主形态 `/api/egid/api/bootstrap` 返回与演示数据同形状的本机数据库读模型，dev-server（`npm start`）可独立起服务。
- 演示唯一源落到实处：dsh/demo.js 直接读 prototypes/v0.2/demo-data.js 灌库（装包回退 public 同字节副本），不再手工镜像；metric_defs 从 demo-data.metricDefs 生成（7 指标 4 组）；每份内镜/病理报告按次派生一行 endoscopy_procedures（biopsy_note=关键描述照录，不做判读）。
- public/ 由 scripts/migrate-public.mjs 从原型定点生成（index.html/app.js 仅白名单替换点，其余逐字节相同）；版本/构建走 __VERSION_DISPLAY__/__BUILD_DATE__ 服务时注入，两种形态（独立启动 / 宿主挂载）同一份文件。
- 宿主接线件：src/client.js → scripts/build-client.mjs → lib/client.js（customFrame 自绘外壳、AI 面板可拖/收起、egid:agent-draft 契约只填不发）；lib/api-base.js apiBase 交界守卫 + 双形态回归测试。
- 检查链追加：build-version/build-client/migrate-public --check、check-public-tokens、check-wording（患者可见文案禁词）、check-ui-parity；测试七件（api-base/demo-parity/host-apply/readmodels/store-migrate/ui-parity/version-inject）。
- 升版 0.1.0 → 0.3.0（M5 开发版）。

## 0.1.0 — 2026-11-07

- 由社区脚手架 dsh-wb-cli@1.10.0-rc.21 (46c541a) 初始化，仅有注册骨架与健康接口，无业务功能。
