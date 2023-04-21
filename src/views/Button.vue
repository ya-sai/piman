<template>
  <div class="page">
    <div class="page-header">
      <bpa-button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <title>選單 Menu</title>
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </bpa-button>
      <bpa-breadcrumb :key="$route.path">
        <bpa-breadcrumb-item
          v-for="(pathItem, pathIndex) in path"
          :key="`pathIndex-${pathIndex}`"
          :title="`前往${pathItem.title}`"
          :to="pathItem.url"
        > {{ pathItem.title }}</bpa-breadcrumb-item>
      </bpa-breadcrumb>
    </div>
    <div class="page-main">
      <h2>按鈕</h2>
      <article>
        <section>
          <h3>大小</h3>
          <bpa-button size="small">小按鈕</bpa-button>
          <bpa-button>預設按鈕</bpa-button>
          <bpa-button size="large">大按鈕</bpa-button>
        </section>
        <section>
          <h3>風格</h3>
          <bpa-button theme="primary">主題色</bpa-button>
          <bpa-button theme="success">成功</bpa-button>
          <bpa-button theme="warning">注意</bpa-button>
          <bpa-button theme="danger">警告</bpa-button>
          <bpa-button theme="primary-ghost">主題色</bpa-button>
          <bpa-button theme="success-ghost">成功</bpa-button>
          <bpa-button theme="warning-ghost">注意</bpa-button>
          <bpa-button theme="danger-ghost">警告</bpa-button>
        </section>
        <section>
          <h3>搭配 icon</h3>
          <bpa-button theme="primary">
            <span aria-hidden="true">😃</span>如果 icon 是純裝飾，在螢幕報讀時隱藏
          </bpa-button>
        </section>
        <section>
          <h3>停用</h3>
          <bpa-button disabled>預設按鈕</bpa-button>
          <bpa-button theme="primary" disabled>主題色</bpa-button>
          <bpa-button theme="success" disabled>成功</bpa-button>
          <bpa-button theme="warning" disabled>注意</bpa-button>
          <bpa-button theme="danger" disabled>警告</bpa-button>
          <bpa-button theme="primary-ghost" disabled>主題色</bpa-button>
          <bpa-button theme="success-ghost" disabled>成功</bpa-button>
          <bpa-button theme="warning-ghost" disabled>注意</bpa-button>
          <bpa-button theme="danger-ghost" disabled>警告</bpa-button>
        </section>
        <section>
          <h3>載入中</h3>
          <bpa-button :loading="true"></bpa-button>
          <bpa-button :loading="true">預設按鈕</bpa-button>
          <bpa-button theme="primary" :loading="true">主題色</bpa-button>
          <bpa-button theme="success" :loading="true">成功</bpa-button>
          <bpa-button theme="warning" :loading="true">注意</bpa-button>
          <bpa-button theme="danger" :loading="true">警告</bpa-button>
          <bpa-button theme="primary-ghost" :loading="true">主題色</bpa-button>
          <bpa-button theme="success-ghost" :loading="true">成功</bpa-button>
          <bpa-button theme="warning-ghost" :loading="true">注意</bpa-button>
          <bpa-button theme="danger-ghost" :loading="true">警告</bpa-button>
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  },
})
</script>
