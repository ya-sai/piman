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
      <h2>輸入框</h2>
      <article>
        <section>
          <h3>大小</h3>
          <bpa-input
            v-model="value"
            size="small"
          />
          <bpa-input
            v-model="value"
          />
          <bpa-input
            v-model="value"
            size="large"
          />
        </section>
        <section>
          <h3>客製化預設文字</h3>
          <bpa-input
            v-model="value"
            placeholder="客製化文字"
          />
        </section>
        <section>
          <h3>禁用</h3>
          <bpa-input
            v-model="value"
            disabled
          />
        </section>
        <section>
          <h3>唯讀</h3>
          <bpa-input
            v-model="value"
            readonly
          />
        </section>
        <section>
          <h3>必填</h3>
          <bpa-input
            v-model="value"
            required
          />
        </section>
        <section>
          <h3>錯誤狀態</h3>
          <bpa-input
            v-model="value"
            error
          />
        </section>
        <section>
          <h3>快捷鍵注目焦點（範例：K）</h3>
          <bpa-input
            v-model="value"
            accesskey="K"
          />
        </section>
        <section>
          <h3>不顯示清空按鈕</h3>
          <bpa-input
            v-model="value"
            disabledClear
          />
        </section>
        <section>
          <h3>類型</h3>
          <bpa-input
            v-model="value"
            type="password"
            placeholder="這是密碼"
          />
          <bpa-input
            v-model="value"
            type="textarea"
             placeholder="這是多行文字"
          />
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Input',
  data() {
    return {
      value:'',
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  }
})
</script>
