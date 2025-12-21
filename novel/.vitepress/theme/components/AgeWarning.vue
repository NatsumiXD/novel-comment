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
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10100;
  backdrop-filter: blur(10px);
  animation: fadeInAge 0.3s ease;
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
  background: #1a1a1a;
  border: 2px solid #ff4444;
  border-radius: 16px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(255, 68, 68, 0.3);
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
  font-size: 64px;
  margin-bottom: 20px;
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
  color: #ff4444;
  font-size: 28px;
  margin-bottom: 20px;
  font-weight: bold;
}

.age-warning-modal p {
  color: #cccccc;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 12px;
}

.warning-detail {
  font-size: 14px;
  color: #999999;
  margin-bottom: 30px;
}

.warning-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.warning-buttons button {
  padding: 14px 32px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  min-width: 140px;
}

.btn-confirm {
  background: #ff4444;
  color: white;
}

.btn-confirm:hover {
  background: #ff6666;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 68, 68, 0.4);
}

.btn-reject {
  background: #333333;
  color: #cccccc;
}

.btn-reject:hover {
  background: #444444;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .age-warning-modal {
    padding: 30px 20px;
  }

  .age-warning-modal h2 {
    font-size: 24px;
  }

  .warning-buttons {
    flex-direction: column;
  }

  .warning-buttons button {
    width: 100%;
  }
}
</style>
