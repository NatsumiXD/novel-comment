import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import ChapterList from './components/ChapterList.vue'
import ARKChapterList from './components/ARKChapterList.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('ChapterList', ChapterList)
    app.component('ARKChapterList', ARKChapterList)
  }
}
