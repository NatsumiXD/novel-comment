<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

let searchModal: HTMLElement | null = null
let isClosing = false

const triggerFadeOut = () => {
  if (!searchModal || isClosing) return
  
  isClosing = true
  searchModal.classList.add('fade-out')

  setTimeout(() => {
    if (searchModal) {
      searchModal.style.display = 'none'
      searchModal.classList.remove('fade-out')
    }
    isClosing = false
  }, 300)
}

onMounted(() => {
  const waitForSearch = () => {
    searchModal = document.querySelector('.VPLocalSearchBox')
    if (!searchModal) {
      setTimeout(waitForSearch, 50)
      return
    }

    // 监听返回/关闭按钮
    const handleBackButton = () => {
      triggerFadeOut()
    }

    // 监听 Escape 键
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && searchModal && window.getComputedStyle(searchModal).display !== 'none') {
        e.preventDefault()
        triggerFadeOut()
      }
    }

    // 监听链接点击（搜索结果）
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a')) {
        triggerFadeOut()
      }
    }

    // 使用捕获阶段拦截关闭按钮
    searchModal.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.closest('.back-button')) {
        e.stopPropagation()
        handleBackButton()
      } else if (target.closest('a')) {
        handleLinkClick(e)
      }
    })

    document.addEventListener('keydown', handleEscape, true)

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', handleEscape, true)
    })
  }

  waitForSearch()
})
</script>

<template>
  <div style="display: none"></div>
</template>

