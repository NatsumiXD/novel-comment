---
layout: doc
title: 安卓 APP
---

# 安卓 APP 下载

使用 GitHub Actions 自动产出的 APK，以下按钮始终指向最新构建。

<div class="app-panel">
  <p class="status" v-if="status === 'loading'">正在从 GitHub 获取最新版本…</p>
  <p class="status error" v-else-if="status === 'error'">获取失败：{{ errorMsg }}，可手动按下方规则拼接下载地址。</p>
  <div v-else class="version-block">
    <p>最新版本文件：<strong>{{ latestFile }}</strong></p>
    <a class="download" :href="downloadUrl" target="_blank" rel="noopener">立即下载 APK</a>
  </div>
  <button class="refresh" @click="fetchLatest">刷新</button>
</div>

## 手动获取规则
1. 调用 API：`https://api.github.com/repos/NatsumiXD/novel-comment/commits?sha=apk`
2. 取返回数组的第 0 项，读 `commit.message`，去掉前缀 `Add new build: ` 后剩下的文本即为文件名，例如 `NatNovel-20251222_003949.apk`。
3. 将文件名拼到 `https://hk.gh-proxy.org/https://github.com/NatsumiXD/novel-comment/raw/refs/heads/apk/{文件名}` 即可下载。

<script setup lang="ts">
import { onMounted, ref } from 'vue'

type LoadState = 'loading' | 'ready' | 'error'

const apiUrl = 'https://api.github.com/repos/NatsumiXD/novel-comment/commits?sha=apk'
const latestFile = ref<string>('')
const downloadUrl = ref<string>('')
const status = ref<LoadState>('loading')
const errorMsg = ref<string>('')

const parseFileName = (message: string) => message.replace(/^Add new build:\s*/i, '').trim()

const fetchLatest = async () => {
  status.value = 'loading'
  try {
    const res = await fetch(apiUrl, {
      headers: { Accept: 'application/vnd.github+json' }
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = await res.json()
    if (!Array.isArray(data) || data.length === 0) throw new Error('API 返回为空')

    const first = data[0]
    const message = first?.commit?.message || ''
    const file = parseFileName(message)
    if (!file) throw new Error('无法从 commit.message 解析文件名')

    latestFile.value = file
    downloadUrl.value = `https://hk.gh-proxy.org/https://github.com/NatsumiXD/novel-comment/raw/refs/heads/apk/${file}`
    status.value = 'ready'
  } catch (err) {
    status.value = 'error'
    errorMsg.value = err instanceof Error ? err.message : String(err)
  }
}

onMounted(fetchLatest)
</script>

<style scoped>
.app-panel {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1rem;
  background: var(--vp-c-bg);
  display: grid;
  gap: 0.75rem;
}

.status {
  margin: 0;
  color: var(--vp-c-text-2);
}

.status.error {
  color: var(--vp-c-red-2, #d14343);
}

.version-block {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.download {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.9rem;
  border-radius: 10px;
  background: var(--vp-c-brand-1);
  color: #fff;
  text-decoration: none;
  transition: transform 0.12s ease, box-shadow 0.18s ease;
}

.download:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

.refresh {
  width: fit-content;
  padding: 0.45rem 0.85rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.refresh:hover {
  transform: translateY(-1px);
}
</style>
