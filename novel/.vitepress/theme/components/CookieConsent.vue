<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const COOKIE_CONSENT_KEY = 'cookie_consent'
const AGE_VERIFIED_KEY = 'age_verified'

const show = ref(false)
const isFadingOut = ref(false)
const ageVerified = ref(false)

const acceptCookies = () => {
  isFadingOut.value = true
  setTimeout(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
    show.value = false
    isFadingOut.value = false
  }, 300)
}

const declineCookies = () => {
  window.location.href = 'https://www.pixiv.net/users/50811011'
}

const isConsentGiven = () => {
  return localStorage.getItem(COOKIE_CONSENT_KEY) === 'true'
}

const isAgeVerified = () => {
  return document.cookie.includes(`${AGE_VERIFIED_KEY}=true`)
}

const checkAndShowConsent = () => {
  // 只有在年龄验证通过且未给予 Cookie 同意时才显示
  ageVerified.value = isAgeVerified()
  if (ageVerified.value && !isConsentGiven()) {
    show.value = true
  }
}

onMounted(() => {
  checkAndShowConsent()
  
  // 每500ms检查一次是否需要显示 Cookie 同意（监听 age_verified cookie 的变化）
  const checkInterval = setInterval(() => {
    const isNowVerified = isAgeVerified()
    if (isNowVerified && !ageVerified.value) {
      // age_verified cookie 刚被设置
      checkAndShowConsent()
    }
  }, 500)
  
  // 清理定时器
  return () => clearInterval(checkInterval)
})
</script>

<template>
  <div v-if="show" class="cookie-consent" :class="{ 'fade-out': isFadingOut }">
    <div class="cookie-backdrop"></div>
    <div class="cookie-modal">
      <div class="cookie-modal__content">
        <h2>Cookie 政策</h2>
        <p>此网站使用 Cookie 来改进用户体验，包括记录您的阅读位置和偏好设置。</p>
        <p>如果您不同意使用 Cookie，请点击"拒绝"按钮离开此网站。</p>
        <div class="cookie-modal__actions">
          <button class="accept" @click="acceptCookies">同意并继续</button>
          <button class="decline" @click="declineCookies">拒绝</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInCookie {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeOutCookie {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

.cookie-consent {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10200;
  animation: fadeInCookie 0.3s ease-out;

  &.fade-out {
    animation: fadeOutCookie 0.3s ease-out forwards;
  }
}

.cookie-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.cookie-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10201;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cookie-modal__content {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 2rem;
  max-width: 520px;
  width: calc(100% - 2rem);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  color: var(--vp-c-text-1);
}

.cookie-modal__content h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.cookie-modal__content p {
  margin: 0.75rem 0;
  line-height: 1.6;
}

.cookie-modal__actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

button {
@media (max-width: 480px) {
  .cookie-modal__content {
    padding: 1.5rem;
    width: calc(100% - 1rem);
    border-radius: 12px;
  }
  
  .cookie-modal__content h2 {
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
  }
  
  .cookie-modal__content p {
    font-size: 0.95rem;
    margin: 0.5rem 0;
  }
  
  .cookie-modal__actions {
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }
  
  button {
    padding: 0.65rem 1rem;
    min-height: 48px;
    font-size: 0.95rem;
  }
}

@media (min-width: 720px) {
  .cookie-modal__actions {
    flex-direction: row;
    gap: 1rem;
    margin-top: 1.5rem;
  }
}
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.1s ease, box-shadow 0.15s ease, background 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

button.accept {
  background: var(--vp-c-brand);
  color: #fff;
  border-color: var(--vp-c-brand);
}

button.decline {
  background: var(--vp-c-bg-soft);
}

button.decline:hover {
  background: var(--vp-c-bg-mute);
}
</style>
