/**
 * 页面白名单管理
 * 用于控制哪些页面会被记录在 last_read cookie 中
 * 以及最新更新横幅中可以显示的页面范围
 */

export const PAGE_WHITELIST = {
  // 允许记录的页面路径前缀
  allowedPrefixes: [
    '/',          // 主页及所有其他页面（作为默认允许）
    '/articles',  // 所有小说章节
    '/license',   // 许可证页面
    '/settings',  // 设置页面
  ],
  
  // 需要排除的页面路径（黑名单，优先级高于白名单）
  excludedPrefixes: [
    '/404',       // 404 页面
  ],
  
  // 需要排除的页面路径（包含匹配）
  excludedIncludes: [],
}

/**
 * 判断页面是否在白名单中（允许被记录）
 * @param path 页面路径
 * @returns 是否在白名单中
 */
export const shouldRecordPath = (path: string): boolean => {
  // 先检查黑名单（排除）
  for (const prefix of PAGE_WHITELIST.excludedPrefixes) {
    if (path.startsWith(prefix)) return false
  }
  
  for (const include of PAGE_WHITELIST.excludedIncludes) {
    if (path.includes(include)) return false
  }
  
  // 再检查白名单（允许）
  for (const prefix of PAGE_WHITELIST.allowedPrefixes) {
    if (path.startsWith(prefix)) return true
  }
  
  return false
}
