<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

const visible = ref(false)
const isInstalled = ref(false)
const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null)

const detectInstalled = () => {
  const standalone = window.matchMedia('(display-mode: standalone)').matches
  const iosStandalone = (window.navigator as Navigator & { standalone?: boolean }).standalone === true
  isInstalled.value = standalone || iosStandalone
}

const onBeforeInstallPrompt = (event: Event) => {
  event.preventDefault()
  deferredPrompt.value = event as BeforeInstallPromptEvent
  visible.value = !isInstalled.value
}

const onAppInstalled = () => {
  isInstalled.value = true
  visible.value = false
  deferredPrompt.value = null
}

const installApp = async () => {
  if (!deferredPrompt.value) return
  await deferredPrompt.value.prompt()
  const result = await deferredPrompt.value.userChoice
  if (result.outcome === 'accepted') {
    visible.value = false
  }
  deferredPrompt.value = null
}

onMounted(() => {
  detectInstalled()
  window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.addEventListener('appinstalled', onAppInstalled)
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.removeEventListener('appinstalled', onAppInstalled)
})
</script>

<template>
  <button
    v-if="visible"
    class="pwa-install"
    type="button"
    @click="installApp"
    aria-label="安装应用"
  >
    安装 App
  </button>
</template>

<style scoped>
.pwa-install {
  position: fixed;
  right: 1.25rem;
  bottom: 4.8rem;
  min-height: 2.75rem;
  padding: 0 0.95rem;
  border-radius: 999px;
  border: 1px solid var(--vp-c-brand);
  background: var(--vp-c-brand);
  color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease, filter 0.15s ease;
  z-index: 9000;
  -webkit-tap-highlight-color: transparent;
}

.pwa-install:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.14);
  filter: brightness(1.05);
}

.pwa-install:active {
  transform: translateY(0);
}

@media (hover: none) and (pointer: coarse) {
  .pwa-install:hover {
    transform: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    filter: none;
  }

  .pwa-install:active {
    transform: scale(0.98);
  }
}

@media (max-width: 520px) {
  .pwa-install {
    right: 1rem;
    bottom: 4.6rem;
    min-height: 2.65rem;
    font-size: 0.88rem;
  }
}
</style>
