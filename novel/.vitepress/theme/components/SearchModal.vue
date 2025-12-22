<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let searchModal: HTMLElement | null = null
let ignoreEvent = false

onMounted(() => {
  const waitForSearch = () => {
    searchModal = document.querySelector('.VPLocalSearchBox')
    if (!searchModal) {
      setTimeout(waitForSearch, 50)
      return
    }

    const playExitAnimation = (callback: () => void) => {
      if (!searchModal) return
      searchModal.classList.add('fade-out')
      setTimeout(() => {
        if (searchModal) searchModal.classList.remove('fade-out')
        callback()
      }, 200) // 200ms 动画时间，与 CSS 保持一致
    }

    const handleIntercept = (e: Event) => {
      if (ignoreEvent) return

      const target = e.target as HTMLElement
      // 判定是否为关闭操作：
      // 1. 点击遮罩层 (target === searchModal)
      // 2. 点击关闭按钮 (通常是 button 且不在输入框区域，这里简化判断：所有 button)
      // 3. 点击链接 (a 标签)
      // 4. ESC 键
      
      const isMask = target === searchModal
      const isButton = target.closest('button')
      const isLink = target.closest('a')
      const isEsc = e.type === 'keydown' && (e as KeyboardEvent).key === 'Escape'

      if (isMask || isButton || isLink || isEsc) {
        // 阻止默认关闭
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()

        playExitAnimation(() => {
          ignoreEvent = true
          // 重放事件
          if (isEsc) {
            window.dispatchEvent(new KeyboardEvent('keydown', { 
              key: 'Escape', 
              code: 'Escape',
              keyCode: 27,
              bubbles: true,
              cancelable: true 
            }))
          } else {
            // 对于点击，重新触发
            // 注意：如果是 button，target.click() 可能无效如果 button 是 disabled 或其他情况
            // 但通常可行。如果是遮罩，直接 click searchModal
            if (target instanceof HTMLElement) {
              target.click()
            }
          }
          
          // 恢复标志
          setTimeout(() => { ignoreEvent = false }, 0)
        })
      }
    }

    // 使用捕获阶段拦截，确保比 VitePress 先拿到事件
    searchModal.addEventListener('click', handleIntercept, true)
    window.addEventListener('keydown', handleIntercept, true)

    onBeforeUnmount(() => {
      if (searchModal) searchModal.removeEventListener('click', handleIntercept, true)
      window.removeEventListener('keydown', handleIntercept, true)
    })
  }

  waitForSearch()
})
</script>

<template>
  <div style="display: none"></div>
</template>

