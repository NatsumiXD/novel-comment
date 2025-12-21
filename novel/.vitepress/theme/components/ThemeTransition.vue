<script setup lang="ts">
import { ref, watch } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const showMask = ref(false)
const maskToDark = ref(false)
const showBackdrop = ref(false)
const isAnimating = ref(false)
const fastExit = ref(false)

let fadeInTimer: number | undefined
let fadeOutTimer: number | undefined
let themeChangeTimer: number | undefined

const clearTimers = () => {
  if (fadeInTimer) {
    clearTimeout(fadeInTimer)
    fadeInTimer = undefined
  }
  if (fadeOutTimer) {
    clearTimeout(fadeOutTimer)
    fadeOutTimer = undefined
  }
  if (themeChangeTimer) {
    clearTimeout(themeChangeTimer)
    themeChangeTimer = undefined
  }
}

const endCurrentTransitionFast = () => {
  // 加速结束当前动画：快速淡出并清理
  fastExit.value = true
  isAnimating.value = false
  showBackdrop.value = false
  // 允许快速过渡完成
  fadeOutTimer = setTimeout(() => {
    showMask.value = false
    fastExit.value = false
  }, 260)
}

const applyThemeChange = (toDark: boolean) => {
  // 触发实际的主题切换
  // 通过改变 html 元素的 class 来让 VitePress 切换主题
  const html = document.documentElement
  if (toDark) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

const startTransition = (toDark: boolean) => {
  clearTimers()
  maskToDark.value = toDark
  // 阶段1：立即显示幕布+遮罩 + 隐藏滚动条
  document.documentElement.classList.add('theme-switching')
  showBackdrop.value = true
  showMask.value = true
  isAnimating.value = false

  // 阶段2：遮罩淡入
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      isAnimating.value = true
    })
  })

  // 阶段3：在蒙层完全显示后（200ms）延迟切换主题
  themeChangeTimer = setTimeout(() => {
    applyThemeChange(toDark)
  }, 200)

  // 阶段4：等待主题切换完成（500ms）后一起淡出
  fadeInTimer = setTimeout(() => {
    isAnimating.value = false
    showBackdrop.value = false
     // 提前恢复滚动条（蒙层淡出时恢复）
     document.documentElement.classList.remove('theme-switching')
    fadeOutTimer = setTimeout(() => {
       showMask.value = false
     }, 400)
  }, 500)
}

watch(isDark, (newVal, oldVal) => {
  if (typeof window === 'undefined') return
  if (oldVal === undefined) return // 跳过初始加载

  // 若正在动画，先快速结束当前过渡
  if (showMask.value || isAnimating.value || showBackdrop.value) {
    clearTimers()
    endCurrentTransitionFast()
    // 等快速结束完成后再启动下一次（稍微延迟以避免闪烁）
    setTimeout(() => startTransition(newVal), 130)
    return
  }

  startTransition(newVal)
})
</script>

<template>
  <div v-if="showMask">
    <div class="theme-backdrop" :class="{ 'backdrop-dark': maskToDark, 'show': showBackdrop, 'fast': fastExit }"></div>
    <div class="theme-transition-mask" :class="{ 'mask-dark': maskToDark, 'animating': isAnimating, 'fast': fastExit }">
      <div class="moon-icon">
        {{ maskToDark ? '🌙' : '☀️' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  background: #ffffff;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-backdrop.show {
  opacity: 1;
}

.theme-backdrop.backdrop-dark {
  background: #1a1a1a;
}

.theme-transition-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-transition-mask.animating {
  opacity: 1;
}
.theme-backdrop.fast,
.theme-transition-mask.fast {
  transition-duration: 0.28s;
}

.theme-transition-mask.mask-dark {
  background: rgba(26, 26, 26, 0.3);
}

.moon-icon {
  font-size: 4rem;
  animation: bounce 0.7s ease-in-out;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  25% {
    transform: translateY(-20px) scale(1.1);
  }
  50% {
    transform: translateY(0) scale(1);
  }
  75% {
    transform: translateY(-10px) scale(1.05);
  }
}
</style>
