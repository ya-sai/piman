# Piman 無障礙網頁設計 UI 框架
> Piman 是一款致力於降低開發無障礙網頁設計成本，使用 Vue 2 的 UI 框架。

![image](https://badgen.net/badge/vue/2.x/green) ![image](https://badgen.net/badge/npm/v16/red) ![image](https://badgen.net/badge/license/Apache-2.0/orange) ![image](https://badgen.net/badge/PRs/welcome/green) 

## 🛠 快速開始

### 安裝
```bash
npm install @yasai/piman
```

### Vue 專案
```js
//main.js
import Vue from 'vue'

import piman from "@yasai/piman";
import '@yasai/piman/dist/piman.css';
Vue.use(piman)
```

### Nuxt 專案
```js
// nuxt.config.js
export default {
  plugins: [
    '@/plugins/piman',
  ],
}

// plugins/piman.js
import Vue from 'vue'
import piman from "@yasai/piman";
Vue.use(piman)
```

## 🖥 瀏覽器支援
主流瀏覽器與 IE 11


## 📖 開發文件
[前往 Piman Notion 觀看](https://piman.notion.site/Piman-6389e4787ceb405abe42ffb37cfe1ca4) for full docs and guidelines.

## 😎 成為貢獻者
我們正在招募貢獻者幫助我們改善 Piman，如果您有興趣，請先至 [Contributing Guide](https://github.com/ya-sai/piman/blob/main/.github/CONTRIBUTING.md) 以及 [Developer Guide](https://piman.notion.site/Contributors-Piman-4d5c910dfbee4066b455cb07d0684af8) ，若有興趣，請來信至 [piman@bluepalnet.com.tw](mailto:piman@bluepalnet.com.tw)。

## 💬 社群
(coming soon)

## ❗ Copyright and license 
Licensed under the [Apache 2.0 License](https://github.com/ya-sai/piman/blob/main/LICENSE).
