<script setup lang="ts">
const PROMPT_KEY = 'reading_prompt_enabled'
const COOKIE_KEY = 'last_read'
const FONT_KEY = 'reader_font'
const FONT_SIZE_KEY = 'reader_font_size'
const BANNER_KEY = 'latest_update_banner'

type FontOption = 'sans' | 'serif' | 'mono' | 'song' | 'kai'
type FontSizeOption = 'small' | 'medium' | 'large'

const writeCookie = (key: string, value: string, days = -1) => {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; expires=${date.toUTCString()}`
}

const readCookie = (key: string): string | null => {
  const match = document.cookie.match(new RegExp('(?:^|; )' + key.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : null
}

const getAllCookies = () => {
  return document.cookie.split(';').map(c => c.trim().split('=')[0])
}

const applyFont = (font: FontOption) => {
  document.documentElement.dataset.font = font
  writeCookie(FONT_KEY, font, 365)
}

const applyFontSize = (size: FontSizeOption) => {
  document.documentElement.dataset.fontSize = size
  writeCookie(FONT_SIZE_KEY, size, 365)
}

const initFont = () => {
  const savedFont = (readCookie(FONT_KEY) as FontOption | null) || 'sans'
  const savedSize = (readCookie(FONT_SIZE_KEY) as FontSizeOption | null) || 'medium'

  document.documentElement.dataset.font = savedFont
  document.documentElement.dataset.fontSize = savedSize

  const fontSelect = document.getElementById('font-select') as HTMLSelectElement | null
  const sizeSelect = document.getElementById('font-size-select') as HTMLSelectElement | null

  if (fontSelect) fontSelect.value = savedFont
  if (sizeSelect) sizeSelect.value = savedSize
}

const setPrompt = (enabled: boolean) => {
  localStorage.setItem(PROMPT_KEY, String(enabled))
  alert(enabled ? '已开启提示' : '已关闭提示')
}

const setBanner = (enabled: boolean) => {
  const date = new Date()
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000)
  if (enabled) {
    document.cookie = `${BANNER_KEY}=0; path=/; expires=${date.toUTCString()}`
    alert('已显示最新更新横幅')
  } else {
    document.cookie = `${BANNER_KEY}=1; path=/; expires=${date.toUTCString()}`
    alert('已隐藏最新更新横幅（刷新页面生效）')
  }
}

const clearHistory = () => {
  writeCookie(COOKIE_KEY, '', -1)
  alert('已清除上次阅读记录')
}

const clearAllCookies = () => {
  const cookies = getAllCookies()
  cookies.forEach(cookie => {
    writeCookie(cookie, '', -1)
  })
  alert('已清除所有 Cookie')
}

const bind = () => {
  const enableBtn = document.getElementById('enable-prompt')
  const disableBtn = document.getElementById('disable-prompt')
  const clearBtn = document.getElementById('clear-history')
  const enableBannerBtn = document.getElementById('enable-banner')
  const disableBannerBtn = document.getElementById('disable-banner')
  const clearAllBtn = document.getElementById('clear-all-cookies')
  const fontSelect = document.getElementById('font-select') as HTMLSelectElement | null
  const fontSizeSelect = document.getElementById('font-size-select') as HTMLSelectElement | null

  enableBtn?.addEventListener('click', () => setPrompt(true))
  disableBtn?.addEventListener('click', () => setPrompt(false))
  clearBtn?.addEventListener('click', () => clearHistory())
  enableBannerBtn?.addEventListener('click', () => setBanner(true))
  disableBannerBtn?.addEventListener('click', () => setBanner(false))
  clearAllBtn?.addEventListener('click', () => clearAllCookies())

  fontSelect?.addEventListener('change', () => {
    const font = fontSelect.value as FontOption
    applyFont(font)
  })

  fontSizeSelect?.addEventListener('change', () => {
    const size = fontSizeSelect.value as FontSizeOption
    applyFontSize(size)
  })

  initFont()
}

if (typeof window !== 'undefined') {
  setTimeout(bind, 0)
}
</script>

<template>
  <div class="settings-page">
    <section class="settings-card">
      <h2>阅读外观</h2>
      <p class="settings-desc">调整全局字体与字号，立即生效。</p>

      <div class="settings-field">
        <label for="font-select">全局字体</label>
        <select id="font-select">
          <option value="sans">鸿蒙 Sans（默认）</option>
          <option value="serif">衬线</option>
          <option value="mono">等宽</option>
          <option value="song">宋体</option>
          <option value="kai">楷体</option>
        </select>
      </div>

      <div class="settings-field">
        <label for="font-size-select">正文字号</label>
        <select id="font-size-select">
          <option value="small">小</option>
          <option value="medium">中（默认）</option>
          <option value="large">大</option>
        </select>
      </div>
    </section>

    <section class="settings-card">
      <h2>阅读提示</h2>
      <p class="settings-desc">默认开启「上次阅读位置」提示。</p>
      <div class="settings-actions">
        <button id="enable-prompt">开启提示</button>
        <button id="disable-prompt">关闭提示</button>
        <button id="clear-history">清除上次阅读记录</button>
      </div>
    </section>

    <section class="settings-card">
      <h2>页面显示</h2>
      <p class="settings-desc">控制首页最新更新横幅的显示状态。</p>
      <div class="settings-actions">
        <button id="enable-banner">显示最新更新横幅</button>
        <button id="disable-banner">隐藏最新更新横幅</button>
      </div>
    </section>

    <section class="settings-card danger-card">
      <h2>数据清理</h2>
      <p class="settings-desc">会清除站点 Cookie（含阅读记录与偏好）。</p>
      <div class="settings-actions">
        <button id="clear-all-cookies" class="danger-btn">清除所有 Cookie</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.settings-page {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.settings-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1rem;
}

.settings-card h2 {
  margin: 0;
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
}

.settings-desc {
  margin: 0.5rem 0 0.9rem;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
}

.settings-field {
  display: grid;
  gap: 0.4rem;
  margin-bottom: 0.9rem;
}

.settings-field:last-child {
  margin-bottom: 0;
}

.settings-field label {
  color: var(--vp-c-text-1);
  font-size: 0.92rem;
  font-weight: 500;
}

.settings-field select {
  width: 100%;
  min-height: 38px;
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.settings-actions {
  display: grid;
  gap: 0.6rem;
}

.settings-actions button {
  width: 100%;
  min-height: 40px;
  padding: 0.6rem 0.85rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  text-align: left;
  transition: transform 0.1s ease, box-shadow 0.15s ease, background 0.15s ease;
}

.settings-actions button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  background: var(--vp-c-bg-mute);
}

.danger-card {
  border-color: color-mix(in srgb, var(--vp-c-danger-1) 45%, var(--vp-c-border));
}

.danger-btn {
  border-color: color-mix(in srgb, var(--vp-c-danger-1) 45%, var(--vp-c-border));
  color: var(--vp-c-danger-1);
}

@media (min-width: 960px) {
  .settings-page {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .danger-card {
    grid-column: 1 / -1;
  }
}
</style>
