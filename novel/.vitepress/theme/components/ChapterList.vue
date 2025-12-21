<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vitepress'

interface Props {
  novel: string // 小说文件夹名称
  novelPath?: string // 小说路径，如 'tsandsis'，默认使用 novel 参数
}

const props = withDefaults(defineProps<Props>(), {
  novelPath: () => ''
})

const router = useRouter()
const novelPath = computed(() => props.novelPath || props.novel)

const chapters = computed(() => {
  // 这里通过 import.meta.glob 动态导入所有章节
  const modules = import.meta.glob('/articles/*/**.md', {
    query: '?raw',
    eager: true
  }) as Record<string, unknown>

  const getContent = (mod: unknown) => {
    if (typeof mod === 'string') return mod
    if (mod && typeof mod === 'object') {
      const maybeContent = (mod as any).__content
      if (typeof maybeContent === 'string') return maybeContent

      const maybeDefault = (mod as any).default
      if (typeof maybeDefault === 'string') return maybeDefault
    }
    return ''
  }
  
  const novelChapters: Array<{ order: number; title: string; path: string }> = []
  const novel = novelPath.value

  Object.entries(modules).forEach(([path, module]) => {
    // 匹配对应小说的章节文件
    const match = path.match(new RegExp(`/articles/${novel}/(.+?)\\.md$`))
    if (!match) return
    
    const filename = match[1]
    if (filename === 'index') return // 跳过 index.md
    
    // 从 frontmatter 中提取 order 和标题
    const content = getContent(module)
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)
    
    let order = 999
    let title = filename
    
    if (frontmatterMatch) {
      const orderMatch = frontmatterMatch[1].match(/order:\s*(\d+)/)
      if (orderMatch) order = parseInt(orderMatch[1], 10)
    }
    
    const titleMatch = content.match(/^#\s+(.+)$/m)
    if (titleMatch) title = titleMatch[1]
    
    novelChapters.push({
      order,
      title,
      path: `/articles/${novel}/${filename}`
    })
  })
  
  // 按 order 排序
  return novelChapters.sort((a, b) => a.order - b.order)
})
</script>

<template>
  <div v-if="chapters.length > 0" class="chapter-list">
    <h2>章节列表</h2>
    <ul>
      <li v-for="chapter in chapters" :key="chapter.path">
        <a :href="chapter.path">{{ chapter.title }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.chapter-list {
  margin: 1.5rem 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.chapter-list h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.chapter-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.chapter-list li {
  padding: 0.5rem 0;
}

.chapter-list a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s;
}

.chapter-list a:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}
</style>
