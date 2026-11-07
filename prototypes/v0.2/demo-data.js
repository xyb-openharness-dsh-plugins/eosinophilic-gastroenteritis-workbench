/* 演示数据（唯一源）· 两组合成档案
 * A：刚确诊、记录少、多处未知；B：多年随访、发作多次、指标与用药都多。
 * 全部为合成示例，不冒充真实病历；页面不写死数字，一切从这里读。
 * 本文件只放数据，不放逻辑；TODAY 由 app.js 固定为 2026-11-07。
 * 病种要点来源：国家卫健委《86 个罕见病病种诊疗指南（2025 年版）》目录 p134（本台未取得原件，据二次来源整理）。
 */
window.DEMO_DATA = {
  TODAY: '2026-11-07',
  /* 指标元数据（唯一源）：app.js 与服务端 metric_defs 都从这里读 */
  metricDefs: [
    { key: 'EOS', db: 'eos', title: '外周血嗜酸粒细胞绝对计数（EOS）', category: 'eosinophil', unit: '×10⁹/L', color: '#2f6f8f', ord: 0 },
    { key: 'EOSP', db: 'eosp', title: '嗜酸粒细胞百分比（EOSP）', category: 'eosinophil', unit: '%', color: '#c96f2f', ord: 1 },
    { key: 'WBC', db: 'wbc', title: '白细胞（WBC）', category: 'hemogram', unit: '×10⁹/L', color: '#2e7d5b', ord: 2 },
    { key: 'Hb', db: 'hb', title: '血红蛋白（Hb）', category: 'hemogram', unit: 'g/L', color: '#a3405e', ord: 3 },
    { key: 'ALB', db: 'alb', title: '白蛋白（ALB）', category: 'nutrition', unit: 'g/L', color: '#6b5b95', ord: 4 },
    { key: 'IgE', db: 'ige', title: '总 IgE', category: 'nutrition', unit: 'IU/mL', color: '#b98a1f', ord: 5 },
    { key: '体温', db: 'temp', title: '体温', category: 'vitals', unit: '℃', color: '#8a5a44', ord: 6 }
  ],
  metricGroups: [
    { key: 'eosinophil', title: '嗜酸粒相关', items: ['EOS', 'EOSP'] },
    { key: 'hemogram', title: '血象', items: ['WBC', 'Hb'] },
    { key: 'nutrition', title: '营养与并发症', items: ['ALB', 'IgE'] },
    { key: 'vitals', title: '体征', items: ['体温'] }
  ],
  /* M4 快照元信息（与 research/egid/manifest.json 一致；clinical 页与设置 tab 同口径；待产出口径与 demo 同步） */
  snapshotMeta: { count: 42, date: '2026-11-07' },
  /* 临床登记浏览的内置示例：虚构条目，不是真实研究，不含可用登记号（35 号 E2 口径） */
  trialsDemo: [
    { recordId: 'demo-t1', registryNumbers: [{ registry: 'NCT', value: 'NCT-DEMO-001' }], title: '（虚构示例）经验性膳食剔除（6 类食物）在嗜酸性粒细胞性胃肠炎中的登记研究', studyType: '介入性', source: '快照摘录', statusNote: '登记状态，未核实' },
    { recordId: 'demo-t2', registryNumbers: [{ registry: 'NCT', value: 'NCT-DEMO-002' }], title: '（虚构示例）生物制剂治疗嗜酸性粒细胞性胃肠炎的有效性与安全性观察', studyType: '介入性', source: '快照摘录', statusNote: '登记状态，未核实' },
    { recordId: 'demo-t3', registryNumbers: [{ registry: 'ChiCTR', value: 'ChiCTR-DEMO-003' }], title: '（虚构示例）嗜酸性粒细胞性胃肠炎患者报告结局与随访节奏的队列登记', studyType: '观察性', source: '快照摘录', statusNote: '登记状态，未核实' },
    { recordId: 'demo-t4', registryNumbers: [{ registry: 'EUCTR', value: 'EUCTR-DEMO-004' }], title: '（虚构示例）嗜酸性粒细胞性胃肠炎长期内镜与多点活检随访的多中心登记', studyType: '观察性', source: '快照摘录', statusNote: '登记状态，未核实' },
    { recordId: 'demo-t5', registryNumbers: [{ registry: 'NCT', value: 'NCT-DEMO-005' }], title: '（虚构示例）要素膳饮食维持方案在嗜酸性粒细胞性胃肠炎中的比较研究', studyType: '介入性', source: '快照摘录', statusNote: '登记状态，未核实' }
  ],
  profiles: [
    {
      id: 'demo-a',
      name: '示例档案 A',
      tag: '刚确诊 · 记录少',
      isDemo: true,
      profile: {
        确诊经过: '2026-09 腹痛、腹泻就诊，胃镜+多点活检示嗜酸性粒细胞浸润，医生诊断嗜酸性粒细胞性胃肠炎（原文照录）',
        发作登记: '2026-09-20 起第一次记录到的发作（更早时间未记，此处标注「未知」）',
        就诊医院: '示例市第一医院消化内科',
        医生行动计划原话: '若腹痛加重、呕血或便血，联系我（张医生）复诊。'
      },
      flaps: [
        { id: 'a-f1', start: '2026-09-20', end: '2026-10-05', note: '进食后腹痛加重、腹泻，激素疗程后缓解（原文照录）', private: false }
      ],
      labs: [
        { id: 'a-l1', metric: 'EOS', date: '2026-09-21', value: 1.8, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市第一医院', private: false },
        { id: 'a-l2', metric: 'EOSP', date: '2026-09-21', value: 18, unit: '%', method: '血常规 五分类', org: '示例市第一医院', private: false },
        { id: 'a-l3', metric: 'WBC', date: '2026-09-21', value: 9.6, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市第一医院', private: false },
        { id: 'a-l4', metric: 'Hb', date: '2026-09-21', value: 128, unit: 'g/L', method: '血常规 五分类', org: '示例市第一医院', private: false },
        { id: 'a-l5', metric: 'ALB', date: '2026-09-21', value: 36, unit: 'g/L', method: '溴甲酚绿法', org: '示例市第一医院', private: false },
        { id: 'a-l6', metric: '体温', date: '2026-09-21', value: 37.6, unit: '℃', method: '腋表', org: '自录', private: false },
        { id: 'a-l7', metric: 'EOS', date: '2026-10-08', value: 0.9, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市第一医院', private: false }
      ],
      treatments: [
        { id: 'a-t1', date: '2026-09-21', kind: '按次', name: '泼尼松（医生处方）', note: '开始服用；剂量与疗程见处方原件，本台不录判定', private: false },
        { id: 'a-t2', date: '2026-10-24', kind: '按次', name: '复诊调整方案（原文照录：继续目前方案，两周后复查）', note: '', private: false }
      ],
      meds: [
        { id: 'a-m1', name: '泼尼松（每日，具体见处方）', schedule: '每日（具体见处方）', since: '2026-09-21', note: '合成示例：不写剂量' },
        { id: 'a-m2', name: '抗组胺药（按次，医生安排）', schedule: '按次（医生安排）', since: '2026-10-24', note: '二线用药，以医生安排为准（合成示例）' }
      ],
      diets: [
        { id: 'a-di1', date: '2026-09-22', food: '牛奶', reaction: '进食后腹痛加重（自录）', private: false },
        { id: 'a-di2', date: '2026-10-02', food: '鸡蛋', reaction: '恶心，未呕吐（自录）', private: false }
      ],
      questions: [],
      hospitals: [
        { id: 'a-h1', name: '示例市第一医院', dept: '消化内科', contact: '电话见挂号单（未录入）', ver: 1 }
      ],
      reports: [
        { id: 'a-r1', title: '胃镜检查报告（2026-09-21）', date: '2026-09-21', kind: '内镜', source: '原件已登记', finding: '胃窦活检：固有层嗜酸粒细胞增多（病理报告原文）', private: false },
        { id: 'a-r2', title: '化验单（血常规 2026-09-21）', date: '2026-09-21', kind: '化验', source: '未取得原件', finding: '', private: false }
      ],
      docs: [
        { id: 'a-d1', name: '2026-09-21 门诊病历', date: '2026-09-21', type: '病历', state: '已登记' },
        { id: 'a-d2', name: '（日期未知示例）外院胃镜描述单', date: null, type: '内镜', state: '待核对' }
      ],
      mind: {
        feel: [
          { d: '2026-11-03', text: '刚确诊，最怕的是不知道什么能吃什么不能吃。', author: '本人', private: false },
          { d: '2026-11-04', text: '（私密记录示例）夜里腹痛醒了一次，很害怕。', author: '本人', private: true }
        ],
        family: [
          { d: '2026-11-04', text: '家人帮忙记了腹痛开始的那天晚上吃了什么。', author: '家属', private: false }
        ]
      }
    },
    {
      id: 'demo-b',
      name: '示例档案 B',
      tag: '长期随访 · 发作多次 · 记录多',
      isDemo: true,
      profile: {
        确诊经过: '2024-03 首次腹痛腹泻发作，胃镜+多点活检确诊（合成示例）；2024-05 再发作，此后反复',
        发作登记: '发作次数由事件数据计算（见状态卡；私密发作不进聚合）',
        就诊医院: '示例市中心医院消化内科；2025 起跨院随诊',
        医生行动计划原话: '若腹痛持续超过一天、腹泻带血或发热超过 38℃，当天联系我或到急诊。（王医生 2025-11-02 门诊原话照录）'
      },
      flaps: [
        { id: 'b-f1', start: '2024-03-10', end: '2024-04-02', note: '首次发作（时间按病历整理）', private: false },
        { id: 'b-f2', start: '2024-05-18', end: '2024-06-10', note: '第一次再发作，腹泻为主', private: false },
        { id: 'b-f3', start: '2024-11-30', end: '2025-01-06', note: '冬季发作，较长', private: false },
        { id: 'b-f4', start: '2025-08-14', end: '2025-09-05', note: '进食后腹痛、恶心加重，激素疗程后缓解（原文照录）', private: false },
        { id: 'b-f5', start: '2026-08-02', end: '2026-08-27', note: '发作；开始饮食剔除与药物调整（见治疗与饮食记录）', private: false },
        { id: 'b-f6', start: '2026-10-28', end: '2026-11-02', note: '最近一次发作，较短', private: false },
        { id: 'b-f7', start: '2026-09-10', end: '2026-09-12', note: '（私密示例）短暂腹部不适，未就医，仅自己记', private: true }
      ],
      labs: [
        { id: 'b-l01', metric: 'EOS', date: '2024-03-11', value: 2.4, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l02', metric: 'EOSP', date: '2024-03-11', value: 22, unit: '%', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l03', metric: 'WBC', date: '2024-03-11', value: 11.2, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l04', metric: 'Hb', date: '2024-03-11', value: 121, unit: 'g/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l05', metric: 'EOS', date: '2024-04-05', value: 1.6, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l06', metric: 'EOS', date: '2024-05-20', value: 2.1, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l07', metric: 'EOSP', date: '2024-05-20', value: 19, unit: '%', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l08', metric: 'ALB', date: '2024-05-20', value: 34, unit: 'g/L', method: '溴甲酚绿法', org: '示例市中心医院', private: false },
        { id: 'b-l09', metric: 'EOS', date: '2024-06-15', value: 0.9, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l10', metric: 'EOS', date: '2024-12-02', value: 2.8, unit: '×10⁹/L', method: '流式细胞术', org: '示例市中心医院', private: false },
        { id: 'b-l11', metric: 'EOSP', date: '2024-12-02', value: 25, unit: '%', method: '流式细胞术', org: '示例市中心医院', private: false },
        { id: 'b-l12', metric: 'EOS', date: '2025-01-10', value: 1.2, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l13', metric: 'ALB', date: '2025-01-10', value: 38, unit: 'g/L', method: '溴甲酚绿法', org: '示例市中心医院', private: false },
        { id: 'b-l14', metric: 'EOS', date: '2025-08-16', value: 1.9, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l15', metric: 'EOSP', date: '2025-08-16', value: 17, unit: '%', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l16', metric: 'WBC', date: '2025-08-16', value: 8.9, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l17', metric: 'IgE', date: '2025-08-16', value: 320, unit: 'IU/mL', method: '化学发光法', org: '示例市中心医院', private: false },
        { id: 'b-l18', metric: 'EOS', date: '2025-09-10', value: 1.1, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l19', metric: 'ALB', date: '2025-09-10', value: 39, unit: 'g/L', method: '溴甲酚绿法', org: '示例市中心医院', private: false },
        { id: 'b-l20', metric: 'EOS', date: '2026-08-04', value: 2.2, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l21', metric: 'EOSP', date: '2026-08-04', value: 21, unit: '%', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l22', metric: 'EOS', date: '2026-08-30', value: 1.0, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l23', metric: 'EOS', date: '2026-10-29', value: 1.7, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l24', metric: 'IgE', date: '2026-10-29', value: 260, unit: 'IU/mL', method: '化学发光法', org: '示例市中心医院', private: false },
        { id: 'b-l25', metric: 'Hb', date: '2026-10-29', value: 118, unit: 'g/L', method: '血常规 五分类', org: '示例市中心医院', private: false },
        { id: 'b-l26', metric: 'EOS', date: '2026-11-04', value: 0.8, unit: '×10⁹/L', method: '血常规+DIFF', org: '示例市第一医院', private: false },
        { id: 'b-l27', metric: 'EOSP', date: '2026-11-04', value: 9, unit: '%', method: '血常规+DIFF', org: '示例市第一医院', private: false },
        { id: 'b-l28', metric: 'ALB', date: '2026-11-04', value: 41, unit: 'g/L', method: '溴甲酚绿法', org: '示例市第一医院', private: false },
        { id: 'b-l29', metric: 'WBC', date: '2026-11-04', value: 7.4, unit: '×10⁹/L', method: '血常规+DIFF', org: '示例市第一医院', private: false },
        { id: 'b-l30', metric: 'EOS', date: '2026-09-14', value: 1.5, unit: '×10⁹/L', method: '血常规 五分类', org: '示例市中心医院', private: true },
        { id: 'b-l31', metric: '体温', date: '2026-10-28', value: 37.8, unit: '℃', method: '腋表', org: '自录', private: false },
        { id: 'b-l32', metric: '体温', date: '2026-11-02', value: 36.6, unit: '℃', method: '腋表', org: '自录', private: false }
      ],
      treatments: [
        { id: 'b-t01', date: '2024-03-11', kind: '按次', name: '泼尼松（医生处方）', note: '首次发作开始', private: false },
        { id: 'b-t02', date: '2024-06-10', kind: '按次', name: '复诊调整方案（原文照录：激素在医生安排下逐步调整中）', note: '', private: false },
        { id: 'b-t03', date: '2025-08-16', kind: '调药', name: '抗组胺药（医生处方）', note: '二线用药，医生安排；疗程细节见原件', private: false },
        { id: 'b-t04', date: '2025-11-02', kind: '按次', name: '门诊调药（原文照录：维持目前方案）', note: '', private: false },
        { id: 'b-t05', date: '2026-08-05', kind: '按次', name: '复诊（原文照录：先做经验性膳食剔除，6 类食物）', note: '具体执行见饮食记录', private: false },
        { id: 'b-t06', date: '2026-09-20', kind: '按次', name: '白三烯受体拮抗剂（医生处方，合成示例）', note: '二线用药，医生安排', private: false },
        { id: 'b-t07', date: '2026-10-30', kind: '按次', name: '复诊（原文照录：激素减量安排见处方，下次复诊 2026-12）', note: '', private: false }
      ],
      meds: [
        { id: 'b-m1', name: '泼尼松（每日，具体见处方）', schedule: '每日（具体见处方）', since: '2024-03-11', note: '合成示例；剂量调整见复诊记录' },
        { id: 'b-m2', name: '抗组胺药（按次，医生安排）', schedule: '按次（医生安排）', since: '2025-08-16', note: '二线用药以医生安排为准（合成示例）' }
      ],
      diets: [
        { id: 'b-di1', date: '2024-03-12', food: '牛奶', reaction: '进食后腹痛加重（自录）', private: false },
        { id: 'b-di2', date: '2024-05-20', food: '贝类（虾）', reaction: '腹泻两次（自录）', private: false },
        { id: 'b-di3', date: '2025-08-17', food: '小麦（面条）', reaction: '腹胀明显（自录）', private: false },
        { id: 'b-di4', date: '2026-08-06', food: '大豆（豆浆）', reaction: '恶心，无呕吐（自录）', private: false },
        { id: 'b-di5', date: null, food: '花生/坚果', reaction: '（日期未知示例）进食坚果后腹部不适（自录）', private: false },
        { id: 'b-di6', date: '2026-10-25', food: '餐馆饮食（可能含 6 类中多种）', reaction: '（私密示例）当晚腹泻严重，没好意思跟医生说', private: true }
      ],
      questions: [
        { id: 'b-q1', q: '激素要吃多久？减量节奏听您的安排吗？', addedOn: '2026-10-20', answered: false, private: false },
        { id: 'b-q2', q: '不同医院化验方法不一样，看 EOS 趋势时怎么算可比？', addedOn: '2026-10-20', answered: false, private: false },
        { id: 'b-q3', q: '饮食剔除期间营养怎么保证？需要查白蛋白吗？', addedOn: '2026-10-20', answered: false, private: false },
        { id: 'b-q4', q: '下次内镜复查什么时候做？还要多点活检吗？', addedOn: '2026-11-04', answered: false, private: false },
        { id: 'b-q5', q: '（私密示例）可以把我对激素减量的担忧写进病历吗？', addedOn: '2026-10-21', answered: false, private: true }
      ],
      hospitals: [
        { id: 'b-h1', name: '示例市中心医院', dept: '消化内科', contact: '0XX-00000000（合成）', ver: 2 },
        { id: 'b-h2', name: '示例市第一医院', dept: '胃肠内科（跨院随诊）', contact: '出处：2026-11 挂号单', ver: 1 },
        { id: 'b-h3', name: '示例大学附属医院', dept: '消化内科（第二意见）', contact: '未录入', ver: 1 }
      ],
      reports: [
        { id: 'b-r1', title: '胃镜检查（2024-03-11）', date: '2024-03-11', kind: '内镜', source: '原件已登记', finding: '胃体、胃窦黏膜粗糙（内镜报告原文）', private: false },
        { id: 'b-r2', title: '胃镜+活检病理（2025-08-16）', date: '2025-08-16', kind: '内镜', source: '原件已登记', finding: '胃窦活检：固有层嗜酸粒细胞增多（病理报告原文）', private: false },
        { id: 'b-r3', title: '结肠镜检查（2026-10-29）', date: '2026-10-29', kind: '内镜', source: '原件已登记', finding: '结肠镜：黏膜红斑、糜烂（内镜报告原文）', private: false },
        { id: 'b-r4', title: '化验单（2026-10-29）', date: '2026-10-29', kind: '化验', source: '未取得原件', finding: '', private: false },
        { id: 'b-r5', title: '门诊病历（2026-08-05）', date: '2026-08-05', kind: '病历', source: '原件已登记', finding: '', private: false },
        { id: 'b-r6', title: '病理会诊报告（2026-09-02）', date: '2026-09-02', kind: '病理', source: '原件已登记', finding: '多点活检：嗜酸粒细胞浸润（病理会诊原文）', private: false },
        { id: 'b-r7', title: '异地随诊小结（2026-11-04）', date: '2026-11-04', kind: '病历', source: '原件已登记', finding: '', private: false },
        { id: 'b-r8', title: '（私密示例）2025 精神科咨询小结', date: '2025-06-20', kind: '其他', source: '原件已登记', finding: '', private: true }
      ],
      docs: [
        { id: 'b-d1', name: '2024-03-11 门诊病历', date: '2024-03-11', type: '病历', state: '已登记' },
        { id: 'b-d2', name: '2024-03-11 胃镜报告', date: '2024-03-11', type: '内镜', state: '已核对' },
        { id: 'b-d3', name: '2024-05-20 化验单', date: '2024-05-20', type: '化验', state: '待核对' },
        { id: 'b-d4', name: '2025-08-16 胃镜+病理报告', date: '2025-08-16', type: '内镜', state: '已核对' },
        { id: 'b-d5', name: '2026-08-05 门诊病历', date: '2026-08-05', type: '病历', state: '已核对' },
        { id: 'b-d6', name: '2026-10-29 结肠镜报告', date: '2026-10-29', type: '内镜', state: '待核对' },
        { id: 'b-d7', name: '2026-11-04 随诊小结', date: '2026-11-04', type: '病历', state: '已登记' }
      ],
      mind: {
        feel: [
          { d: '2025-06-20', text: '反反复复，最难的是不知道哪种食物会引发不适。', author: '本人', private: false },
          { d: '2026-08-10', text: '开始饮食剔除后，买菜变麻烦了，但心里踏实了一点。', author: '本人', private: false },
          { d: '2026-11-03', text: '这次三天就缓解了，比以前快。', author: '本人', private: false },
          { d: '2026-10-25', text: '（私密记录示例）最近情绪很低落，不想让人知道。', author: '本人', private: true }
        ],
        family: [
          { d: '2026-08-06', text: '家人负责记每天的饮食和反应。', author: '家属', private: false },
          { d: '2026-10-29', text: '这次发作家人连夜陪着去了急诊。', author: '家属', private: false }
        ]
      }
    }
  ]
}
