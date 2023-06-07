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
      <h2>折疊面板</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-accordion>
            <bpa-accordion-item>
              內容1
            </bpa-accordion-item>
            <bpa-accordion-item open>
              預設打開
            </bpa-accordion-item>
          </bpa-accordion>
        </section>
        <section>
          <h3>客製化標題</h3>
          <bpa-accordion>
            <bpa-accordion-item title="客製化標題：純文字">
              內容1
            </bpa-accordion-item>
            <bpa-accordion-item>
              <template v-slot:title><mark>客製化標題：HTML</mark></template>
              內容2
            </bpa-accordion-item>
          </bpa-accordion>
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Accordion',
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
