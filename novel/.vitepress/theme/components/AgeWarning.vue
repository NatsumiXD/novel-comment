<template>
  <Teleport to="body">
    <div v-if="showWarning" class="age-warning-overlay" :class="{ 'fade-out': isFadingOut }">
      <div class="age-warning-modal">
        <div class="warning-icon">🔞</div>
        <h2>未成年人禁止入内</h2>
        <p>本站包含成人内容，仅限18岁及以上人士访问。</p>
        <p class="warning-detail">
          继续访问即表示您已年满18周岁，并同意浏览成人内容。
        </p>
        <div class="warning-buttons">
          <button @click="handleConfirm" class="btn-confirm">
            是，我已年满18岁
          </button>
          <button @click="handleReject" class="btn-reject">
            否，我未满18岁
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showWarning = ref(false)
const isFadingOut = ref(false)
const COOKIE_NAME = 'age_verified'
const COOKIE_DAYS = 365

// 设置 Cookie
function setCookie(name: string, value: string, days: number) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`
}

// 获取 Cookie
function getCookie(name: string): string | null {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

// 确认已满18岁
function handleConfirm() {
  isFadingOut.value = true
  setTimeout(() => {
    showWarning.value = false
    isFadingOut.value = false
  }, 300)
  setCookie(COOKIE_NAME, 'true', COOKIE_DAYS)
}

// 拒绝进入
function handleReject() {
  // 跳转到央视新闻
  window.location.href = 'https://tv.cctv.com/2013/09/02/VIDE1378113141436780.shtml'
}

onMounted(() => {
  // 检查是否已验证年龄
  const verified = getCookie(COOKIE_NAME)
  if (!verified) {
    showWarning.value = true
  }
})
</script>

<style scoped>
.age-warning-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.78);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10100;
  backdrop-filter: blur(8px);
  animation: fadeInAge 0.3s ease;
  padding: 1rem;
}

.age-warning-overlay.fade-out {
  animation: fadeOutAge 0.3s ease forwards;
}

@keyframes fadeInAge {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOutAge {
  from { opacity: 1; }
  to { opacity: 0; }
}

.age-warning-modal {
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-danger-1);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 540px;
  width: min(540px, 100%);
  text-align: center;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.36), 0 0 0 1px rgba(255, 80, 80, 0.18) inset;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.warning-icon {
  font-size: 52px;
  margin-bottom: 0.85rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.age-warning-modal h2 {
  color: var(--vp-c-danger-1);
  font-size: 1.65rem;
  margin-bottom: 0.8rem;
  font-weight: bold;
}

.age-warning-modal p {
  color: var(--vp-c-text-1);
  font-size: 0.98rem;
  line-height: 1.65;
  margin-bottom: 0.5rem;
}

.warning-detail {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.warning-buttons {
  display: grid;
  gap: 0.75rem;
}

.warning-buttons button {
  width: 100%;
  min-height: 48px;
  padding: 0.7rem 1rem;
  font-size: 0.98rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: transform 0.12s ease, box-shadow 0.15s ease, filter 0.15s ease, background 0.15s ease;
  -webkit-tap-highlight-color: transparent;
}

.btn-confirm {
  background: var(--vp-c-danger-1);
  color: #fff;
  border-color: var(--vp-c-danger-1);
}

.btn-confirm:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(220, 38, 38, 0.35);
  filter: brightness(1.06);
}

.btn-reject {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.btn-reject:hover {
  background: var(--vp-c-bg-mute);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

@media (hover: none) and (pointer: coarse) {
  .warning-buttons button:hover {
    transform: none;
    box-shadow: none;
    filter: none;
  }

  .warning-buttons button:active {
    transform: scale(0.98);
    opacity: 0.9;
  }
}

@media (min-width: 640px) {
  .warning-buttons {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 520px) {
  .age-warning-modal {
    padding: 1.15rem;
    border-radius: 12px;
  }

  .age-warning-modal h2 {
    font-size: 1.35rem;
  }
}
</style>
