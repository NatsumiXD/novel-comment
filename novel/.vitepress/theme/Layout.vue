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

const { Layout } = DefaultTheme
const { isDark } = useData()
const router = useRouter()

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

const injectGiscus = () => {
  const wrapper = document.querySelector('.giscus-wrapper')
  if (!wrapper) return

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
  script.onload = () => setGiscusTheme(theme)

  wrapper.appendChild(script)
}

onMounted(() => {
  applyFontFromStorage()
  // 首次挂载：等页面渲染完成后尝试注入
  nextTick(() => setTimeout(injectGiscus, 50))
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
    // 路由切换后尝试注入（Home 使用 layout: home 时首次没有容器）
    startPageTransition()
    nextTick(() => {
      setTimeout(() => {
        injectGiscus()
        endPageTransition()
      }, 200)
    })
  },
  { flush: 'post' }
)
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
