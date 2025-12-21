<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const visible = ref(false)
const threshold = 280

const onScroll = () => {
  visible.value = window.scrollY > threshold
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <button
    v-if="visible"
    class="back-top"
    type="button"
    @click="scrollToTop"
    aria-label="返回顶部"
  >
    ↑
  </button>
</template>

<style scoped>
.back-top {
  position: fixed;
  right: 1.25rem;
  bottom: 1.5rem;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;
  z-index: 9000;
}

.back-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.14);
  background: var(--vp-c-bg);
}

.back-top:active {
  transform: translateY(0);
}
</style>
