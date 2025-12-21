<template>
  <div class="not-found">
    <div class="not-found__bubble">
      <p class="not-found__code">404</p>
      <h1>迷路啦！</h1>
      <p>这里是次元夹缝，路标被史莱姆吃掉了。</p>
      <p>别慌，跟着导航猫娘回去就好喵！</p>
      <a class="not-found__button" href="/">喵呜~ 带我回首页</a>
      <p class="not-found__tip">一直往前会抵达未来，但换个方向更快找到想要的世界。</p>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 20% 20%, rgba(255, 214, 255, 0.35), transparent 40%),
    radial-gradient(circle at 80% 30%, rgba(180, 214, 255, 0.35), transparent 40%),
    var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-align: center;
  padding: 2.5rem 1.5rem;
}

.not-found__bubble {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 2rem 2.5rem;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.08);
  max-width: 620px;
  width: 100%;
  backdrop-filter: blur(6px);
}

.not-found__code {
  margin: 0;
  font-size: 3rem;
  letter-spacing: 0.1em;
  color: var(--vp-c-brand);
}

h1 {
  margin: 0.25rem 0 0.5rem;
  font-size: 2rem;
}

p {
  margin: 0.35rem 0;
  line-height: 1.6;
}

.not-found__button {
  display: inline-block;
  margin: 1rem 0 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 999px;
  background: var(--vp-c-brand);
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.not-found__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.16);
}

.not-found__tip {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}
</style>
