# VitePress 小说站点 - AI 代码助手指南

## 项目概述

这是一个使用 VitePress 构建的个人小说站点，用于发布和展示小说内容。VitePress 是一个静态站点生成器，基于 Vue.js 和 Vite。

## 项目结构

```
novel/                    # VitePress 文档根目录
├── .vitepress/
│   └── config.mts       # VitePress 配置文件（TypeScript）
├── articles/            # 小说文章目录
│   └── index.md
├── index.md             # 首页（使用 home layout）
├── api-examples.md      # 示例文件
└── markdown-examples.md # 示例文件
```

## 核心开发命令

```bash
npm run docs:dev      # 启动开发服务器（监听 novel/ 目录）
npm run docs:build    # 构建生产版本
npm run docs:preview  # 预览构建结果
```

注意：所有命令都针对 `novel/` 目录，这是通过 package.json 中的脚本参数指定的。

## 内容创建约定

### 新增小说文章
1. 在 `novel/articles/` 目录下创建新的 `.md` 文件
2. 使用 frontmatter 定义元数据（标题、标签等）
3. 在 `novel/.vitepress/config.mts` 的 sidebar 中添加导航链接

### Frontmatter 模式
首页使用 `layout: home` 配置，包含 hero 和 features 部分：
- `hero.name`: 站点名称
- `hero.tagline`: 支持 HTML（如外部链接）
- `hero.actions`: 主要操作按钮
- `features`: 特性列表（4 个特性卡片）

## 配置文件关键点

**文件**: [novel/.vitepress/config.mts](novel/.vitepress/config.mts)

- 使用 TypeScript 配置文件（`.mts` 扩展名）
- `defineConfig` 从 'vitepress' 导入
- `themeConfig.nav`: 顶部导航栏配置
- `themeConfig.sidebar`: 侧边栏菜单配置
- 所有链接使用相对路径（从 `novel/` 根目录开始）

## VitePress 特定约定

- Markdown 文件自动转换为 HTML 页面
- 支持 Vue 组件嵌入（在 `.md` 文件中使用 `<script setup>`）
- 内置 Shiki 语法高亮
- 支持自定义容器（`::: info`, `::: tip`, `::: warning`）

## 自定义主题和组件

### R18 年龄警告弹窗
站点实现了年龄验证弹窗，位于 `novel/.vitepress/theme/components/AgeWarning.vue`：
- 使用 Cookie 存储用户确认状态（有效期365天）
- 首次访问时显示，确认后不再显示
- 自定义布局在 `novel/.vitepress/theme/Layout.vue`
- 主题入口文件：`novel/.vitepress/theme/index.ts`

修改警告内容：编辑 `AgeWarning.vue` 组件的文本和样式
清除验证状态：删除浏览器中名为 `age_verified` 的 Cookie

## 注意事项

1. **内容目录**: 所有内容文件必须在 `novel/` 目录下
2. **配置修改**: 修改 `config.mts` 后需要重启开发服务器
3. **资源引用**: 图片等静态资源应放在 `novel/public/` 目录（需创建）
4. **路由规则**: 文件路径即 URL 路径（`articles/index.md` → `/articles/`）
