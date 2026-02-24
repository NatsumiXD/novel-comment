#!/usr/bin/env python3
"""
自动创建下一个章节文件 (chapter<num>.md)
在当前目录下查找所有 chapter<num>.md 文件，提取最大数字 num，
然后创建 chapter<num+1>.md，并写入：
---
order: <num+1>
---
"""

import os
import re
import sys

def find_next_chapter_number():
    """扫描当前目录，返回下一个可用的章节编号"""
    pattern = re.compile(r'^chapter(\d+)\.md$')
    max_num = 0
    for filename in os.listdir('.'):
        match = pattern.match(filename)
        if match:
            num = int(match.group(1))
            if num > max_num:
                max_num = num
    return max_num + 1

def create_chapter_file(num):
    """创建 chapter{num}.md 文件，并写入 order 元数据"""
    filename = f"chapter{num}.md"
    if os.path.exists(filename):
        print(f"错误：文件 {filename} 已存在，无法创建。", file=sys.stderr)
        sys.exit(1)

    content = f"---\norder: {num}\n---\n"
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"成功创建 {filename}，内容已写入：")
        print(content.rstrip())
    except IOError as e:
        print(f"写入文件失败：{e}", file=sys.stderr)
        sys.exit(1)

def main():
    next_num = find_next_chapter_number()
    create_chapter_file(next_num)

if __name__ == "__main__":
    main()