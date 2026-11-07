/**
 * 身份常量：插件 id、API 前缀、数据根目录名、UI 入口（家族口径，嗜酸性粒细胞性胃肠炎版）。
 * `id` 必须与 cordis.patch.yml 的 insert id 一致（egid-main）。
 * API_PREFIX 是宿主挂载前缀；宿主里 API_BASE='/api/egid'，页面拼 `${API_BASE}/api/bootstrap`。
 * 守卫只禁「交界处重复 /api」，不许 includes('/api') 一刀切（家族踩 4）。
 */
export const PLUGIN_ID = 'egid-main';
export const PACKAGE_NAME = '@xyb-community/eosinophilic-gastroenteritis-workbench';
export const API_PREFIX = 'egid';
export const HOME_DIR = 'egid';
export const DB_FILE = 'egid-workbench.sqlite';
export const UI_ENTRY = 'index.html';
export const DEV_PORT = 7797;
