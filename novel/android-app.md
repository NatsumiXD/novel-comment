---
layout: doc
title: 安卓 APP
---

# 安卓 APP 下载

为什么使用APP？

可以离线观看...?


使用 GitHub Actions 自动产出的 APK，以下按钮始终指向最新构建。

<div class="app-panel">
  <p class="status" v-if="status === 'loading'">正在从 GitHub 获取最新版本…</p>
  <p class="status error" v-else-if="status === 'error'">获取失败：{{ errorMsg }}，可手动按下方规则拼接下载地址。</p>
  <div v-else class="version-block">
    <p>最新版本文件：<strong>{{ latestFile }}</strong></p>
    <a class="download" :href="downloadUrl" target="_blank" rel="noopener">立即下载 APK</a>
    <p class="compare" v-if="needsUpdate === true">检测到新版本，<br/>请更新（APK 时间：{{ apkTimeStr }}，构建时间：{{ buildTimeStr }}）。</p>
    <p class="compare ok" v-else-if="needsUpdate === false">当前为最新版本<br/>（APK 时间：{{ apkTimeStr }}，构建时间：{{ buildTimeStr }}）。</p>
    <p class="compare warn" v-else>无法识别文件时间或构建时间缺失。</p>
  </div>
  <button class="refresh" @click="fetchLatest">刷新</button>
</div>

## 手动获取规则
1. 调用 API：`https://api.github.com/repos/NatsumiXD/novel-comment/commits?sha=apk`
2. 取返回数组的第 0 项，读 `commit.message`，去掉前缀 `Add new build: ` 后剩下的文本即为文件名，例如 `NatNovel-20251222_003949.apk`。
3. 将文件名拼到 `https://hk.gh-proxy.org/https://github.com/NatsumiXD/novel-comment/raw/refs/heads/apk/{文件名}` 即可下载。

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 全局构建时间常量（由 Vite 注入），格式：YYYYMMDD_HHMMSS
declare const __BUILD_TIME__: string

type LoadState = 'loading' | 'ready' | 'error'

const apiUrl = 'https://api.github.com/repos/NatsumiXD/novel-comment/commits?sha=apk'
const latestFile = ref<string>('')
const downloadUrl = ref<string>('')
const status = ref<LoadState>('loading')
const errorMsg = ref<string>('')

// 比较结果：null=未知；true=需要更新；false=已最新
const needsUpdate = ref<boolean | null>(null)
const apkTimeStr = ref<string>('')
const buildTimeStr = ref<string>('')

const parseFileName = (message: string) => message.replace(/^Add new build:\s*/i, '').trim()

// 从文件名中提取时间字符串，如 NatNovel-20251222_214554-43e8878.apk => 20251222_214554
const extractTimeStr = (file: string): string | null => {
  const m = file.match(/NatNovel-(\d{8}_\d{6})/)
  return m ? m[1] : null
}

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
    // 比较 APK 时间与构建时间
    const apkTs = extractTimeStr(file)
    buildTimeStr.value = typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : ''
    apkTimeStr.value = apkTs ?? ''
    if (apkTs && buildTimeStr.value) {
      // 两者均为 YYYYMMDD_HHMMSS，直接进行字符串比较即可
      needsUpdate.value = buildTimeStr.value < apkTs
    } else {
      needsUpdate.value = null
    }
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

.compare {
  margin: 0;
  color: var(--vp-c-text-2);
}
.compare.ok {
  color: var(--vp-c-green-2, #2f9e44);
}
.compare.warn {
  color: var(--vp-c-yellow-2, #e0a800);
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
