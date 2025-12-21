<script setup lang="ts">
import { computed } from 'vue'

interface Chapter {
  order: number
  title: string
  path: string
}

interface Series {
  name: string
  order: number
  title: string
  chapters: Chapter[]
}

const chapters = computed(() => {
  // helper: 统一获取原始内容字符串
  const getContent = (mod: any): string => {
    if (typeof mod === 'string') return mod
    if (mod && typeof mod.default === 'string') return mod.default
    if (mod && typeof mod.__content === 'string') return mod.__content
    return ''
  }

  // 获取 A 文件夹的章节
  const aModules = import.meta.glob('/articles/ark/A/*.md', {
    query: '?raw',
    eager: true
  })

  const aChapters: Chapter[] = []

  Object.entries(aModules).forEach(([path, mod]) => {
    const match = path.match(/\/articles\/ark\/A\/(.+?)\.md$/)
    if (!match) return

    const filename = match[1]
    const content = getContent(mod)
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)

    let order = 999
    let title = filename

    if (frontmatterMatch) {
      const orderMatch = frontmatterMatch[1].match(/order:\s*(\d+)/)
      if (orderMatch) order = parseInt(orderMatch[1], 10)
    }

    // 优先从 markdown 第一个 # 读取标题
    const titleMatch = content.match(/^#\s+(.+)$/m)
    if (titleMatch) {
      title = titleMatch[1]
    }

    aChapters.push({
      order,
      title,
      path: `/articles/ark/A/${filename}`
    })
  })

  aChapters.sort((a, b) => a.order - b.order)

  // 获取 B 文件夹的系列
  const bModules = import.meta.glob('/articles/ark/B/*/*.md', {
    query: '?raw',
    eager: true
  })

  const seriesMap = new Map<string, Series>()

  Object.entries(bModules).forEach(([path, mod]) => {
    const match = path.match(/\/articles\/ark\/B\/(\w+)\/(.+?)\.md$/)
    if (!match) return

    const [, seriesName, filename] = match
    const content = getContent(mod)

    if (filename === 'index') {
      // 处理系列的 index.md
      const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)

      let seriesOrder = 999
      let seriesTitle = seriesName

      if (frontmatterMatch) {
        const orderMatch = frontmatterMatch[1].match(/order:\s*(\d+)/)
        if (orderMatch) seriesOrder = parseInt(orderMatch[1], 10)
      }

      // 优先从 markdown 第一个 # 读取标题
      const titleMatch = content.match(/^#\s+(.+)$/m)
      if (titleMatch) {
        seriesTitle = titleMatch[1]
      } else if (frontmatterMatch) {
        // 如果没有 # 标题，再从 frontmatter 的 title 字段读取
        const fmTitleMatch = frontmatterMatch[1].match(/title:\s*(.+)/)
        if (fmTitleMatch) seriesTitle = fmTitleMatch[1].trim()
      }

      if (!seriesMap.has(seriesName)) {
        seriesMap.set(seriesName, {
          name: seriesName,
          order: seriesOrder,
          title: seriesTitle,
          chapters: []
        })
      } else {
        const series = seriesMap.get(seriesName)!
        series.order = seriesOrder
        series.title = seriesTitle
      }
    } else {
      // 处理系列中的章节
      const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)

      let order = 999
      let title = filename

      if (frontmatterMatch) {
        const orderMatch = frontmatterMatch[1].match(/order:\s*(\d+)/)
        if (orderMatch) order = parseInt(orderMatch[1], 10)
      }

      // 优先从 markdown 第一个 # 读取标题
      const titleMatch = content.match(/^#\s+(.+)$/m)
      if (titleMatch) {
        title = titleMatch[1]
      }

      if (!seriesMap.has(seriesName)) {
        seriesMap.set(seriesName, {
          name: seriesName,
          order: 999,
          title: seriesName,
          chapters: []
        })
      }

      seriesMap.get(seriesName)!.chapters.push({
        order,
        title,
        path: `/articles/ark/B/${seriesName}/${filename}`
      })
    }
  })

  // 对系列内的章节排序
  const series = Array.from(seriesMap.values())
  series.forEach(s => {
    s.chapters.sort((a, b) => a.order - b.order)
  })
  series.sort((a, b) => a.order - b.order)

  return { aChapters, series }
})
</script>

<template>
  <div class="ark-chapter-list">
    <!-- A 系列章节 -->
    <section v-if="chapters.aChapters.length > 0" class="section-a">
      <h3>A 系列（短篇）</h3>
      <ul>
        <li v-for="chapter in chapters.aChapters" :key="chapter.path">
          <a :href="chapter.path">{{ chapter.title }}</a>
        </li>
      </ul>
    </section>

    <!-- B 系列 -->
    <section v-if="chapters.series.length > 0" class="section-b">
      <h3>B 系列（系列连载）</h3>
      <div v-for="serie in chapters.series" :key="serie.name" class="series">
        <h4>{{ serie.title }}</h4>
        <ul v-if="serie.chapters.length > 0">
          <li v-for="chapter in serie.chapters" :key="chapter.path">
            <a :href="chapter.path">{{ chapter.title }}</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ark-chapter-list {
  margin: 1.5rem 0;
}

.ark-chapter-list section {
  margin-bottom: 2rem;
}

.ark-chapter-list h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
}

.ark-chapter-list h4 {
  font-size: 1.1rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-2);
  padding-left: 1rem;
  border-left: 3px solid var(--vp-c-brand);
}

.ark-chapter-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ark-chapter-list li {
  padding: 0.5rem 0;
  padding-left: 1rem;
}

.series ul {
  padding-left: 1rem;
}

.ark-chapter-list a {
  color: var(--vp-c-brand);
  text-decoration: none;
  transition: color 0.2s;
}

.ark-chapter-list a:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}
</style>
