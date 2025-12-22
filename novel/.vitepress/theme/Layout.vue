<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useData, useRouter } from 'vitepress'
import AgeWarning from './components/AgeWarning.vue'
import ThemeTransition from './components/ThemeTransition.vue'
import BackToTop from './components/BackToTop.vue'
import ReadingReminder from './components/ReadingReminder.vue'
import CookieConsent from './components/CookieConsent.vue'
import SearchModal from './components/SearchModal.vue'
import LatestUpdateBanner from './components/LatestUpdateBanner.vue'

// 由 Vite 在构建/启动时注入，形如 20251222_202618
declare const __BUILD_TIME__: string

const { Layout } = DefaultTheme
const { isDark } = useData()
const router = useRouter()

const buildTime: string = typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : ''

const FONT_KEY = 'reader_font'
const FONT_SIZE_KEY = 'reader_font_size'

const getCookie = (key: string): string | null => {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(?:^|; )' + key.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : null
}

const applyFontFromStorage = () => {
  if (typeof window === 'undefined') return
  const saved = getCookie(FONT_KEY)
  if (saved) {
    document.documentElement.dataset.font = saved
  }
  const savedSize = getCookie(FONT_SIZE_KEY)
  if (savedSize) {
    document.documentElement.dataset.fontSize = savedSize
  }
}

const setGiscusTheme = (theme: 'light' | 'dark') => {
  const frame = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement | null
  frame?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app')
}

const clearGiscus = () => {
  const wrapper = document.querySelector('.giscus-wrapper')
  if (!wrapper) return
  // 清除 wrapper 内容
  wrapper.innerHTML = ''
  // 清除 window 上的 giscus 状态
  if (typeof window !== 'undefined' && 'giscus' in window) {
    delete (window as any).giscus
  }
}

const injectGiscus = (retries = 5) => {
  const wrapper = document.querySelector('.giscus-wrapper')
  if (!wrapper) {
    // 如果 wrapper 还没准备好，重试
    if (retries > 0) {
      setTimeout(() => injectGiscus(retries - 1), 100)
    }
    return
  }

  const hasGiscus = wrapper.querySelector('iframe.giscus-frame')
  const theme = isDark.value ? 'dark' : 'light'

  if (hasGiscus) {
    setGiscusTheme(theme)
    return
  }

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'NatsumiXD/novel-comment')
  script.setAttribute('data-repo-id', 'R_kgDOQshs6w')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOQshs684C0EPb')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '1')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', theme)
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  wrapper.appendChild(script)
}

onMounted(() => {
  applyFontFromStorage()
  // 首次挂载：等待足够时间让 DOM 完全渲染
  nextTick(() => {
    setTimeout(injectGiscus, 300)
    setTimeout(injectBuildTimeIntoFooter, 300)
  })
})

const startPageTransition = () => {
  document.documentElement.classList.add('page-transitioning')
}

const endPageTransition = () => {
  document.documentElement.classList.remove('page-transitioning')
}

watch(
  isDark,
  value => {
    if (typeof window === 'undefined') return
    setGiscusTheme(value ? 'dark' : 'light')
  },
  { flush: 'post' }
)

watch(
  () => router.route.path,
  () => {
    // 路由切换后立即清除旧的 giscus 并重新注入新页面的评论
    clearGiscus()
    startPageTransition()
    nextTick(() => {
      // 给 giscus 足够时间重新初始化
      setTimeout(injectGiscus, 100)
      // 确保页脚存在后注入构建时间（幂等）
      setTimeout(injectBuildTimeIntoFooter, 200)
      setTimeout(endPageTransition, 500)
    })
  },
  { flush: 'post' }
)

// 将构建时间直接注入默认主题页脚的 message 区域，样式与页脚一致
const injectBuildTimeIntoFooter = () => {
  if (typeof document === 'undefined') return
  const footerMessage = document.querySelector('.VPFooter .message') as HTMLElement | null
  if (!footerMessage) return
  if (footerMessage.querySelector('.build-time-inline')) return
  const span = document.createElement('span')
  span.className = 'build-time-inline'
  // 英文与半角符号，末尾保留空格
  span.textContent = ` · Build time ${buildTime} `
  footerMessage.appendChild(span)
}
</script>

<template>
  <Layout>
    <template #layout-top>
      <CookieConsent />
      <AgeWarning />
      <ThemeTransition />
      <SearchModal />
      <ReadingReminder />
    </template>
    <template #home-hero-before>
      <LatestUpdateBanner />
    </template>
    <template #doc-after>
      <div class="giscus-wrapper" />
    </template>
    <template #layout-bottom>
      <BackToTop />
    </template>
  </Layout>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 2rem;
}
</style>
