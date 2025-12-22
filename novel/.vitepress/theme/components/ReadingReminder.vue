<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vitepress'
import { shouldRecordPath } from '../utils/pageWhitelist'

const COOKIE_KEY = 'last_read'
const PROMPT_KEY = 'reading_prompt_enabled'
const PROMPT_DURATION = 15000 // 15 seconds
const TEST_GAP_MS = 15*60*1000 // 15 minutes for testing per requirement

const router = useRouter()
const show = ref(false)
const isFadingOut = ref(false)
const lastPath = ref('')
const hideTimer = ref<number | undefined>(undefined)
const idleTimer = ref<number | undefined>(undefined)
const isPageFocused = ref(true)

const IDLE_DURATION = 60000 // 1 minute

const readCookie = (key: string) => {
  const match = document.cookie.match(new RegExp('(?:^|; )' + key.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : ''
}

const writeCookie = (key: string, value: string, days = 365) => {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${key}=${encodeURIComponent(value)}; path=/; expires=${date.toUTCString()}`
}

const clearTimer = () => {
  if (hideTimer.value) {
    clearTimeout(hideTimer.value)
    hideTimer.value = undefined
  }
}

const clearIdleTimer = () => {
  if (idleTimer.value) {
    clearTimeout(idleTimer.value)
    idleTimer.value = undefined
  }
}

const resetToCurrentAsBaseline = () => {
  const raw = readCookie(COOKIE_KEY)
  if (!raw) return
  try {
    const data = JSON.parse(raw) as RecordPayload
    const now = Date.now()
    // 将 current 成为 previous，当前时间成为 tsPrevious
    const payload: RecordPayload = {
      current: data.current,
      previous: data.current,
      tsCurrent: data.tsCurrent,
      tsPrevious: now
    }
    writeCookie(COOKIE_KEY, JSON.stringify(payload))
  } catch (e) {
    // ignore
  }
}

const scheduleIdleReset = () => {
  clearIdleTimer()
  idleTimer.value = setTimeout(() => {
    if (isPageFocused.value && shouldRecordPath(router.route.path)) {
      resetToCurrentAsBaseline()
    }
  }, IDLE_DURATION)
}

const hidePrompt = () => {
  isFadingOut.value = true
  setTimeout(() => {
    show.value = false
    isFadingOut.value = false
  }, 300)
  clearTimer()
}

const scheduleHide = () => {
  clearTimer()
  hideTimer.value = setTimeout(() => hidePrompt(), PROMPT_DURATION)
}

type RecordPayload = { current: string; previous: string; tsCurrent: number; tsPrevious: number }


const recordVisit = (path: string) => {
  // 仅记录符合条件的页面
  if (!shouldRecordPath(path)) return

  let previous = ''
  let tsPrevious = 0
  try {
    const raw = readCookie(COOKIE_KEY)
    if (raw) {
      const data = JSON.parse(raw) as RecordPayload
      if (data.current) previous = data.current
      if (data.tsCurrent) tsPrevious = data.tsCurrent
    }
  } catch (e) {}

  const now = Date.now()
  const payload: RecordPayload = {
    current: path,
    previous,
    tsCurrent: now,
    tsPrevious
  }
  writeCookie(COOKIE_KEY, JSON.stringify(payload))
}

const isPromptEnabled = () => {
  const value = localStorage.getItem(PROMPT_KEY)
  return value === null ? true : value === 'true'
}

const maybeShowPrompt = () => {
  if (!isPromptEnabled()) return
  const raw = readCookie(COOKIE_KEY)
  if (!raw) return
  try {
    const data = JSON.parse(raw) as RecordPayload
    const now = Date.now()
    const tsPrev = data.tsPrevious ?? 0
    if (data.previous && tsPrev && now - tsPrev > TEST_GAP_MS && data.previous !== router.route.path) {
      lastPath.value = data.previous
      show.value = true
      scheduleHide()
    }
  } catch (e) {
    // ignore parse errors
  }
}

const goToLast = () => {
  if (lastPath.value) {
    hidePrompt()
    router.go(lastPath.value)
  }
}

// 在客户端挂载后再注册路由监听，避免 SSR 期间访问 document/window
onMounted(() => {
  watch(
    () => router.route.path,
    path => {
      if (typeof document === 'undefined') return
      recordVisit(path)
      scheduleIdleReset()
    },
    { immediate: true }
  )
})

onMounted(() => {
  maybeShowPrompt()
  scheduleIdleReset()
  if (typeof window !== 'undefined') {
    window.addEventListener('visibilitychange', maybeShowPrompt)
    window.addEventListener('focus', () => {
      isPageFocused.value = true
      scheduleIdleReset()
    })
    window.addEventListener('blur', () => {
      isPageFocused.value = false
      clearIdleTimer()
    })
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('visibilitychange', maybeShowPrompt)
    window.removeEventListener('focus', () => {})
    window.removeEventListener('blur', () => {})
  }
  clearTimer()
  clearIdleTimer()
})
</script>

<template>
  <div v-show="show" class="reading-reminder" :class="{ 'fade-out': isFadingOut }">
    <div class="reading-reminder__content">
      <span>是否跳转到上次阅读位置？</span>
      <div class="reading-reminder__actions">
        <button class="primary" @click="goToLast">跳转</button>
        <button class="ghost" @click="hidePrompt">关闭</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-out-reminder {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-6px); }
}

.reading-reminder {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 12000;
  pointer-events: none;
  animation: fade-in 0.25s ease;

  &.fade-out {
    animation: fade-out-reminder 0.3s ease-out forwards;
  }
}

.reading-reminder__content {
  pointer-events: auto;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-border);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  padding: 0.9rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 520px;
  width: calc(100% - 2rem);
}

.reading-reminder__actions {
  margin-left: auto;
  display: flex;
  gap: 0.5rem;
}

button {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 0.35rem 0.9rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.15s ease, background 0.15s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

@media (hover: none) and (pointer: coarse) {
  button:hover {
    transform: none;
  }
  button:active {
    opacity: 0.8;
    transform: scale(0.98);
  }
}

button.primary {
  background: var(--vp-c-brand);
  color: #fff;
  border-color: var(--vp-c-brand);
}

button.ghost {
  background: var(--vp-c-bg-soft);
}
</style>
