<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const COOKIE_CONSENT_KEY = 'cookie_consent'
const AGE_VERIFIED_KEY = 'age_verified'

const show = ref(false)
const isFadingOut = ref(false)
const ageVerified = ref(false)
let checkInterval: number | undefined

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
  ageVerified.value = isAgeVerified()
  if (ageVerified.value && !isConsentGiven()) {
    show.value = true
  }
}

onMounted(() => {
  checkAndShowConsent()

  checkInterval = window.setInterval(() => {
    const isNowVerified = isAgeVerified()
    if (isNowVerified && !ageVerified.value) {
      checkAndShowConsent()
    }
  }, 500)
})

onBeforeUnmount(() => {
  if (checkInterval) {
    clearInterval(checkInterval)
  }
})
</script>

<template>
  <div v-if="show" class="cookie-consent" :class="{ 'fade-out': isFadingOut }">
    <div class="cookie-backdrop" />
    <div class="cookie-modal">
      <div class="cookie-modal__content">
        <h2>Cookie 政策</h2>
        <p>此网站使用 Cookie 来改进用户体验，包括记录您的阅读位置和偏好设置。</p>
        <p>如果您不同意使用 Cookie，请点击“拒绝”按钮离开此网站。</p>
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
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeOutCookie {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
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
  padding: 1rem;
}

.cookie-consent.fade-out {
  animation: fadeOutCookie 0.3s ease-out forwards;
}

.cookie-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(8px);
}

.cookie-modal {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10201;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cookie-modal__content {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 520px;
  width: min(520px, 100%);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.3);
  color: var(--vp-c-text-1);
}

.cookie-modal__content h2 {
  margin: 0 0 0.8rem;
  font-size: 1.4rem;
}

.cookie-modal__content p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.cookie-modal__actions {
  display: grid;
  gap: 0.75rem;
  margin-top: 1rem;
}

button {
  width: 100%;
  min-height: 48px;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.12s ease, box-shadow 0.15s ease, background 0.15s ease, filter 0.15s ease;
  -webkit-tap-highlight-color: transparent;
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

button.accept:hover {
  filter: brightness(1.05);
}

button.decline:hover {
  background: var(--vp-c-bg-mute);
}

@media (hover: none) and (pointer: coarse) {
  button:hover {
    transform: none;
    box-shadow: none;
    filter: none;
  }

  button:active {
    transform: scale(0.98);
    opacity: 0.9;
  }
}

@media (min-width: 640px) {
  .cookie-modal__actions {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 520px) {
  .cookie-modal__content {
    padding: 1.15rem;
    border-radius: 12px;
  }

  .cookie-modal__content h2 {
    font-size: 1.25rem;
  }
}
</style>
