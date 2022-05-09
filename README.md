# Piman UI framework
> Piman is an open-source UI framework built by Blueplanet Inc.

![image](https://badgen.net/badge/vue/2.x/green) ![image](https://badgen.net/badge/npm/v16.13.0/red) ![image](https://badgen.net/badge/license/Apache-2.0/orange) ![image](https://badgen.net/badge/PRs/welcome/green) ![image](https://badgen.net/badge/chat/discord/blue) 

## 🛠 Getting started

### Install
```bash
npm install @yasai/piman
```

### Vue Project
```js
//main.js
import Vue from 'vue'

import piman from "@yasai/piman";
import '@yasai/piman/dist/piman.css';
Vue.use(piman)
```

### Nuxt Project
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

## 🖥 Browser Support
Modern browsers and Internet Explorer 11+.


## 📖 Documentation
[See our site](https://piman.notion.site/Piman-6389e4787ceb405abe42ffb37cfe1ca4) for full docs and guidelines.

## 😎 Contributing
We're looking for contributors to help us improve the project. If you're interested, definitely check out our [Contributing Guide](https://github.com/ya-sai/piman/blob/main/CONTRIBUTING.md) and our [Developer Guide](https://www.notion.so/piman/Developer-4d5c910dfbee4066b455cb07d0684af8)! 

## 💬 Community
(coming soon)

## ❗ Copyright and license 
Licensed under the [Apache 2.0 License](https://github.com/ya-sai/piman/blob/main/LICENSE).
