
# Piman 無障礙網頁設計 UI 框架（注意：此版本已停止開發！）

> Piman 是一款致力於降低開發無障礙網頁設計成本，使用 Vue 2 的 UI 框架。

[前往 Piman 網站](https://bpio.gitbook.io/piman/)

![image](https://badgen.net/badge/vue/2.x/green) ![image](https://badgen.net/badge/nodejs/v18/red) ![image](https://badgen.net/badge/license/Apache-2.0/orange) ![image](https://badgen.net/badge/PRs/welcome/green) ![image](https://badgen.net/badge/Typescript/4.4.4/blue) 



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
[前往 Piman 文件](https://bpio.gitbook.io/piman/vue2/getting-start)

## 😎 成為貢獻者
我們正在招募貢獻者幫助我們改善 Piman，如果您有興趣，請先至 [Contributing Guide](https://github.com/ya-sai/piman/blob/main/.github/CONTRIBUTING.md) 以及 [Developer Guide](https://bpio.gitbook.io/piman/dev-guide) ，若有興趣，請來信至 [piman@bluepalnet.com.tw](mailto:piman@bluepalnet.com.tw)。

## 💬 體驗調查
我們非常希望能接收到您[對 Piman 的感受或使用心得](https://bpio.gitbook.io/piman/about#contact)，
以作為 Piman 越來越好的參考，並且幫助到更多的使用者。

## ❗ Copyright and license 
Licensed under the [Apache 2.0 License](https://github.com/ya-sai/piman/blob/main/LICENSE).
