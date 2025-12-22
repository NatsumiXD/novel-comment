<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

type PageData = {
  title: string
  description?: string
  path: string
  lastUpdated?: number | string
}

// 从 theme/components 回到站点根需退三级：components -> theme -> .vitepress -> novel
const modules = import.meta.glob('../../../articles/**/*.md', {
  eager: true
}) as Record<string, any>

const toTimestamp = (input: unknown): number | null => {
  if (input == null) return null
  if (typeof input === 'number') return input < 1e12 ? input * 1000 : input
  const parsed = Date.parse(String(input))
  return Number.isNaN(parsed) ? null : parsed
}

const chapters = computed<PageData[]>(() => {
  return Object.values(modules)
    .map((mod: any) => {
      const pageData = mod?.__pageData ?? {}
      const frontmatter = mod?.frontmatter ?? {}
      const relativePath = pageData.relativePath as string | undefined
      if (!relativePath) return null

      const withoutExt = relativePath.replace(/\.md$/, '')
      const normalizedPath = withoutExt.endsWith('/index')
        ? `/${withoutExt.slice(0, -('/index'.length))}/`
        : `/${withoutExt}`

      const ts =
        toTimestamp(pageData.lastUpdated) ??
        toTimestamp(frontmatter.updated) ??
        toTimestamp(frontmatter.date)

      return {
        title: pageData.title || frontmatter.title || '未命名章节',
        description: pageData.description || frontmatter.description,
        path: normalizedPath,
        lastUpdated: ts ?? pageData.lastUpdated
      }
    })
    .filter(Boolean)
    .filter((entry: any) => entry.path.startsWith('/articles'))
    .sort((a: any, b: any) => {
      const at = toTimestamp(a.lastUpdated) ?? 0
      const bt = toTimestamp(b.lastUpdated) ?? 0
      if (at === bt) return b.path.localeCompare(a.path)
      return bt - at
    }) as PageData[]
})

const latest = computed(() => chapters.value[0])

// Cookie helpers
const COOKIE_KEY = 'latest_update_banner'
const getCookie = (key: string): string | null => {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp('(?:^|; )' + key.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'))
  return m ? decodeURIComponent(m[1]) : null
}
const setCookie = (key: string, value: string, days = 365) => {
  if (typeof document === 'undefined') return
  const d = new Date()
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${key}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/`
}

const visible = ref(true)
onMounted(() => {
  visible.value = getCookie(COOKIE_KEY) !== '1'
})
const close = () => {
  visible.value = false
}

const formattedDate = computed(() => {
  const ts = latest.value?.lastUpdated
  if (!ts) return ''
  const numeric = typeof ts === 'number' ? ts : Date.parse(ts)
  const time = numeric < 1e12 ? numeric * 1000 : numeric
  const date = new Date(time)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
})
</script>

<template>
  <Transition name="banner-fade">
    <div v-if="latest && visible" class="latest-banner">
      <div class="latest-label">最新更新</div>
      <div class="latest-body">
        <a class="latest-title" :href="latest.path">{{ latest.title }}</a>
        <span v-if="formattedDate" class="latest-date">更新于 {{ formattedDate }}</span>
        <p v-if="latest.description" class="latest-desc">{{ latest.description }}</p>
      </div>
      <div class="latest-actions">
        <button class="btn" @click="close">关闭</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.banner-fade-enter-active,
.banner-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.banner-fade-enter-from,
.banner-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.latest-banner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.5rem 0.75rem;
  margin: 0 0 0.75rem 0;
  padding: 0.5rem 0.75rem;
  border-radius: 0;
  background: linear-gradient(120deg, rgba(255, 158, 11, 0.15), rgba(255, 99, 71, 0.15));
  border: 1px solid rgba(255, 158, 11, 0.35);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
}

.latest-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 76px;
  height: 28px;
  padding: 0 0.6rem;
  border-radius: 999px;
  background: rgba(255, 158, 11, 0.18);
  color: #c23c00;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}

.latest-body {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.latest-title {
  color: var(--vp-c-text-1);
  font-weight: 800;
  font-size: 0.95rem;
  line-height: 1.2;
  text-decoration: none;
}

.latest-title:hover {
  text-decoration: underline;
}

.latest-date {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  line-height: 1;
}

.latest-desc {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  line-height: 1.3;
  display: none;
}

.latest-actions {
  display: inline-flex;
  gap: 0.5rem;
}

.btn {
  appearance: none;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border-radius: 6px;
  height: 28px;
  padding: 0 0.6rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8rem;
}
.btn:hover { filter: brightness(0.98); }
.btn-primary {
  border-color: rgba(255, 158, 11, 0.55);
  background: rgba(255, 158, 11, 0.2);
  color: #b23d00;
}

@media (max-width: 640px) {
  .latest-banner {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  .latest-label {
    width: fit-content;
    font-size: 0.75rem;
  }

  .latest-actions {
    justify-self: start;
    gap: 0.4rem;
  }
}
</style>
