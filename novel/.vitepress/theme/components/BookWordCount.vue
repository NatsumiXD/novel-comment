<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  novel: string
  novelPath?: string
}

const props = withDefaults(defineProps<Props>(), {
  novelPath: () => ''
})

const currentNovelPath = computed(() => props.novelPath || props.novel)

const allMarkdownModules = import.meta.glob('/articles/**/*.md', {
  query: '?raw',
  eager: true
}) as Record<string, unknown>

function getContent(mod: unknown) {
  if (typeof mod === 'string') return mod
  if (mod && typeof mod === 'object') {
    const maybeContent = (mod as any).__content
    if (typeof maybeContent === 'string') return maybeContent

    const maybeDefault = (mod as any).default
    if (typeof maybeDefault === 'string') return maybeDefault
  }
  return ''
}

function stripFrontmatter(content: string) {
  return content.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, '')
}

function markdownToPlainText(content: string) {
  const withoutFrontmatter = stripFrontmatter(content)
  return withoutFrontmatter
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/[*_~#>-]/g, '')
    .replace(/<[^>]*>/g, '')
}

function countCharacters(content: string) {
  return markdownToPlainText(content).replace(/\s+/g, '').length
}

const chapterCount = computed(() => {
  return Object.keys(allMarkdownModules).filter(path => {
    const pathMatch = path.match(/^\/articles\/([^/]+)\/(.+)\.md$/)
    if (!pathMatch) return false
    const [, novel, fileWithoutExt] = pathMatch
    if (novel !== currentNovelPath.value) return false
    return !fileWithoutExt.endsWith('/index') && fileWithoutExt !== 'index'
  }).length
})

const wordCount = computed(() => {
  return Object.entries(allMarkdownModules).reduce((total, [path, mod]) => {
    const pathMatch = path.match(/^\/articles\/([^/]+)\/(.+)\.md$/)
    if (!pathMatch) return total

    const [, novel, fileWithoutExt] = pathMatch
    if (novel !== currentNovelPath.value) return total
    if (fileWithoutExt.endsWith('/index') || fileWithoutExt === 'index') return total

    return total + countCharacters(getContent(mod))
  }, 0)
})
</script>

<template>
  <div class="book-word-count">
    <strong>全书字数：</strong>{{ wordCount.toLocaleString('zh-CN') }} 字（共 {{ chapterCount }} 章）
  </div>
</template>

<style scoped>
.book-word-count {
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}
</style>