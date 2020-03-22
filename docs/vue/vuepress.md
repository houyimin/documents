---
title: vuepress
---

## 快速上手

``` bash
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md
```
接着，在 package.json 里加一些脚本:
``` bash
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
启动
``` bash
yarn docs:dev # 或者：npm run docs:dev
```
要生成静态的 HTML 文件，运行：
``` bash
yarn docs:build # 或者：npm run docs:build
```
默认情况下，文件将会被生成在 .vuepress/dist