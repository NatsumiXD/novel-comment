import { defineConfig } from 'vitepress'
import { readdirSync, statSync, readFileSync } from 'fs'
import { join } from 'path'

// 自动生成侧边栏配置
function generateSidebar() {
  const articlesDir = join(__dirname, '../articles')
  const sidebar: any = {}

  const getChapters = (novel: string, novelPath: string, files: string[]) => {
    return files
      .filter(f => f !== 'index.md')
      .map(file => {
        const filePath = join(novelPath, file)
        const content = readFileSync(filePath, 'utf-8')

        let order = 999
        let title = file.replace('.md', '')

        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)
        if (frontmatterMatch) {
          const orderMatch = frontmatterMatch[1].match(/order:\s*(\d+)/)
          if (orderMatch) {
            const parsedOrder = parseInt(orderMatch[1], 10)
            if (!Number.isNaN(parsedOrder)) {
              order = parsedOrder
            }
          }
        }

        const titleMatch = content.match(/^#\s+(.+)$/m)
        if (titleMatch) {
          title = titleMatch[1]
        }

        const fileName = file.replace('.md', '')

        return {
          order,
          text: title,
          link: `/articles/${novel}/${fileName}`
        }
      })
      .sort((a, b) => {
        if (a.order === b.order) {
          return a.text.localeCompare(b.text)
        }
        return a.order - b.order
      })
  }

  // ARK 特殊处理函数
  const generateArkSidebar = (novelPath: string) => {
    const items: any[] = []
    
    // 检查是否有 index.md
    const indexPath = join(novelPath, 'index.md')
    try {
      if (statSync(indexPath).isFile()) {
        items.push({ text: '简介', link: '/articles/ark/' })
      }
    } catch (e) {}
    
    // 处理 A 文件夹 - 直接扫描文件
    const aPath = join(novelPath, 'A')
    try {
      if (statSync(aPath).isDirectory()) {
        const aFiles = readdirSync(aPath).filter(f => f.endsWith('.md'))
        const aChapters = aFiles.map(file => {
          const filePath = join(aPath, file)
          const content = readFileSync(filePath, 'utf-8')
          
          let order = 999
          let title = file.replace('.md', '')
          
          const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)
          if (frontmatterMatch) {
            const orderMatch = frontmatterMatch[1].match(/order:\s*(\d+)/)
            if (orderMatch) {
              order = parseInt(orderMatch[1], 10)
            }
          }
          
          const titleMatch = content.match(/^#\s+(.+)$/m)
          if (titleMatch) {
            title = titleMatch[1]
          }
          
          const fileName = file.replace('.md', '')
          return { order, text: title, link: `/articles/ark/A/${fileName}` }
        }).sort((a, b) => a.order - b.order)
        
        aChapters.forEach(ch => items.push(ch))
      }
    } catch (e) {}
    
    // 处理 B 文件夹 - 扫描子文件夹作为系列
    const bPath = join(novelPath, 'B')
    try {
      if (statSync(bPath).isDirectory()) {
        const seriesFolders = readdirSync(bPath).filter(item => {
          const itemPath = join(bPath, item)
          return statSync(itemPath).isDirectory()
        })
        
        // 读取每个系列的 index.md 获取 order 和 title
        const seriesData = seriesFolders.map(series => {
          const seriesPath = join(bPath, series)
          const seriesIndexPath = join(seriesPath, 'index.md')
          
          let seriesTitle = series
          let seriesOrder = 999
          
          try {
            const content = readFileSync(seriesIndexPath, 'utf-8')
            const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)
            if (frontmatterMatch) {
              const orderMatch = frontmatterMatch[1].match(/order:\s*(\d+)/)
              if (orderMatch) {
                seriesOrder = parseInt(orderMatch[1], 10)
              }
              const titleMatch = frontmatterMatch[1].match(/title:\s*(.+)/)
              if (titleMatch) {
                seriesTitle = titleMatch[1].trim()
              }
            }
          } catch (e) {}
          
          // 读取系列下的章节
          const seriesFiles = readdirSync(seriesPath).filter(f => f.endsWith('.md') && f !== 'index.md')
          const chapters = seriesFiles.map(file => {
            const filePath = join(seriesPath, file)
            const content = readFileSync(filePath, 'utf-8')
            
            let order = 999
            let title = file.replace('.md', '')
            
            const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)
            if (frontmatterMatch) {
              const orderMatch = frontmatterMatch[1].match(/order:\s*(\d+)/)
              if (orderMatch) {
                order = parseInt(orderMatch[1], 10)
              }
            }
            
            const titleMatch = content.match(/^#\s+(.+)$/m)
            if (titleMatch) {
              title = titleMatch[1]
            }
            
            const fileName = file.replace('.md', '')
            return { order, text: title, link: `/articles/ark/B/${series}/${fileName}` }
          }).sort((a, b) => a.order - b.order)
          
          return {
            series,
            seriesTitle,
            seriesOrder,
            chapters
          }
        }).sort((a, b) => a.seriesOrder - b.seriesOrder)
        
        // 生成系列的侧边栏项
        seriesData.forEach(({ seriesTitle, chapters }) => {
          items.push({
            text: seriesTitle,
            collapsed: true,
            items: chapters.map(({ text, link }) => ({ text, link }))
          })
        })
      }
    } catch (e) {}
    
    return items
  }

  const novelsData = readdirSync(articlesDir)
    .filter(item => {
      const itemPath = join(articlesDir, item)
      return statSync(itemPath).isDirectory()
    })
    .map(novel => {
      const novelPath = join(articlesDir, novel)
      const files = readdirSync(novelPath).filter(f => f.endsWith('.md'))

      let novelTitle = novel
      let order = 999
      const indexPath = join(novelPath, 'index.md')
      try {
        const content = readFileSync(indexPath, 'utf-8')
        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/)
        if (frontmatterMatch) {
          const orderMatch = frontmatterMatch[1].match(/order:\s*(\d+)/)
          if (orderMatch) {
            const parsedOrder = parseInt(orderMatch[1], 10)
            if (!Number.isNaN(parsedOrder)) {
              order = parsedOrder
            }
          }
          const titleInFrontmatter = frontmatterMatch[1].match(/title:\s*(.+)/)
          if (titleInFrontmatter) {
            novelTitle = titleInFrontmatter[1].trim()
          }
        }
        const titleMatch = content.match(/^#\s+(.+)$/m)
        if (titleMatch) {
          novelTitle = titleMatch[1]
        }
      } catch (e) {
        // ignore missing index.md
      }

      const chapters = getChapters(novel, novelPath, files)

      return {
        novel,
        novelTitle,
        order,
        files,
        chapters
      }
    })

  novelsData.sort((a, b) => {
    if (a.order === b.order) {
      return a.novelTitle.localeCompare(b.novelTitle)
    }
    return a.order - b.order
  })

  // 为 /articles/ 生成侧边栏，ARK 需要特殊处理
  sidebar['/articles/'] = novelsData.map(({ novel, novelTitle, chapters }) => {
    if (novel === 'ark') {
      const arkPath = join(articlesDir, 'ark')
      const arkItems = generateArkSidebar(arkPath)
      return {
        text: novelTitle,
        collapsed: true,
        items: arkItems
      }
    }
    
    return {
      text: novelTitle,
      collapsed: true,
      items: chapters.map(({ text, link }) => ({ text, link }))
    }
  })

  novelsData.forEach(({ novel, novelTitle, files, chapters }) => {
    // ARK 特殊处理
    if (novel === 'ark') {
      const arkPath = join(articlesDir, 'ark')
      const arkItems = generateArkSidebar(arkPath)
      sidebar['/articles/ark/'] = [
        {
          text: novelTitle,
          items: arkItems
        }
      ]
      return
    }
    
    // 其他小说的常规处理
    const items: { text: string; link: string }[] = []

    if (files.includes('index.md')) {
      items.push({ text: '简介', link: `/articles/${novel}/` })
    }

    chapters.forEach(({ text, link }) => {
      items.push({ text, link })
    })

    sidebar[`/articles/${novel}/`] = [
      {
        text: novelTitle,
        items
      }
    ]
  })

  return sidebar
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Naiii's Novel",
  description: "A Novel Site",
  head: [
    // 添加年龄警告的相关 meta 标签
    ['meta', { name: 'rating', content: 'adult' }],
    ['meta', { name: 'content-warning', content: 'NSFW, R18' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '小说', link: '/articles' },
      {
        text: '📚',
        items: [
          { text: '淫乱的罗德岛', link: '/articles/ark' },
          { text: 'TS哥哥和扶她妹妹', link: '/articles/tsandsis' },
          { text: '夏树和美咲的生活', link: '/articles/summer' }
        ]
      },
      { text: '安卓APP', link: '/android-app' },
      { text: '设置', link: '/settings' }
    ],

    notFound: {
      title: '迷路啦！',
      quote: '这里是次元夹缝，路标被史莱姆吃掉了。别慌，跟着导航猫娘回去就好喵！',
      linkText: '喵呜~ 带我回首页'
    },

    sidebar: generateSidebar(),

    docFooter: {
      prev: '上一章',
      next: '下一章'
    },
    search: {
      provider: 'local',
      options: {
        // 自定义 minisearch 配置
        miniSearch: {
          options: {
            tokenize: text => text.split(/[\s\-，。！？；：、]/)
          }
        },
        // 汉化本地搜索 UI
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询',
              resetButtonAriaLabel: '清除查询',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '最近搜索',
              noRecentSearchesText: '暂无最近搜索',
              saveRecentSearchButtonTitle: '保存到最近搜索',
              removeSavedSearchButtonTitle: '移除最近搜索'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '请检查网络连接后重试'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索'
            },
            noResultsScreen: {
              noResultsText: '没有找到相关内容',
              suggestedQueryText: '试试其它关键词',
              reportMissingResultsText: '报告缺失结果',
              searchTipsText: '搜索提示'
            }
          }
        }
      }
    },
  sitemap: {
    hostname: 'https://naiii.novel.fucktx.eu.org'
  },
  lastUpdated: true,
    footer: {
      message: 'Powered By Vitepress · 全站内容遵循 <a href="/license" rel="license">CC BY-SA 4.0</a>',
      copyright: 'Copyright © 2025 Naiii All Rights Reserved.'
    },

    socialLinks: [
      { 
        icon: { 
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>pixiv</title><path d="M4.935 0A4.924 4.924 0 0 0 0 4.935v14.13A4.924 4.924 0 0 0 4.935 24h14.13A4.924 4.924 0 0 0 24 19.065V4.935A4.924 4.924 0 0 0 19.065 0zm7.81 4.547c2.181 0 4.058.676 5.399 1.847a6.118 6.118 0 0 1 2.116 4.66c.005 1.854-.88 3.476-2.257 4.563-1.375 1.092-3.225 1.697-5.258 1.697-2.314 0-4.46-.842-4.46-.842v2.718c0 .397-.242.625-.527.625h-.118c-.285 0-.527-.228-.527-.625v-7.086l-.023-1.273c-.021-1.319.358-2.874 1.282-4.185.944-1.34 2.415-2.099 4.373-2.099zm4.116 3.266c-.483-.534-1.247-.976-2.136-1.231-.888-.252-1.888-.378-2.89-.378-1.694 0-2.755.632-3.469 1.635-.713 1.006-1.078 2.446-1.063 3.844l.023 1.229v5.188s1.991.842 4.233.842c1.732 0 3.316-.529 4.438-1.418 1.121-.889 1.781-2.164 1.777-3.638.004-1.564-.64-2.788-1.913-4.073z"/></svg>' 
        }, 
        link: 'https://www.pixiv.net/users/50811011' 
      }
    ],

    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    // 汉化更新时间标签
    lastUpdatedText: '最后更新'
  }
})
