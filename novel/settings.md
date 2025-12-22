---
layout: doc
title: 阅读设置
---

# 阅读设置

管理上次阅读提示的偏好。

<div class="settings-actions">
  <button id="enable-prompt">开启提示</button>
  <button id="disable-prompt">关闭提示</button>
  <button id="clear-history">清除上次阅读记录</button>
  <button id="enable-banner">显示最新更新横幅</button>
  <button id="disable-banner">隐藏最新更新横幅</button>
  <button id="clear-all-cookies">清除所有 Cookie</button>
</div>

<div class="settings-font">
  <label for="font-select">全局字体：</label>
  <select id="font-select">
    <option value="sans">无衬线（默认）</option>
    <option value="serif">衬线</option>
    <option value="mono">等宽</option>
    <option value="song">宋体</option>
    <option value="kai">楷体</option>
  </select>
</div>

<div class="settings-font">
  <label for="font-size-select">正文字号：</label>
  <select id="font-size-select">
    <option value="small">小</option>
    <option value="medium">中（默认）</option>
    <option value="large">大</option>
  </select>
</div>

<p class="settings-hint">提示默认开启。</p>

<script setup lang="ts">
const PROMPT_KEY = 'reading_prompt_enabled'
const COOKIE_KEY = 'last_read'
const COOKIE_CONSENT_KEY = 'cookie_consent'
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
  
  // 应用样式但不重复写cookie
  document.documentElement.dataset.font = savedFont
  document.documentElement.dataset.fontSize = savedSize
  
  // 设置select显示值
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
  
  // 绑定完成后初始化显示
  initFont()
}

if (typeof window !== 'undefined') {
  setTimeout(bind, 0)
}
</script>

<style scoped>
.settings-actions {
  display: flex;
  gap: 0.75rem;
  margin: 1rem 0;
}

.settings-actions button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.15s ease;
}

.settings-actions button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

.settings-font {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-text-1);
}

.settings-font select {
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.settings-hint {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}
</style>
