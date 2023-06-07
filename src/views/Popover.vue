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
      <h2>Popover</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-popover>
            支援多組關鍵字配合布林運算子進行檢索，輸入方式如下：<br>
            AND：<br>
            使用 + 或 AND(全大寫或全小寫) 或 空格 或 &amp; 置於條件之前。<br>
            如：A &amp;B；A +B；A ANDB；A andB；A B<br><br>
            OR：<br>
            使用 | 或 OR(全大寫或全小寫)置於條件之前。<br>
            如：A ｜B；A ORB；A orB<br><br>
            NOT：<br>
            使用 - 或 NOT(全大寫或全小寫)置於條件之前。<br>
            如：A -B；A notB；A NOTB
          </bpa-popover>
        </section>
        <section>
          <h3>大小</h3>
          <bpa-popover size="small">小</bpa-popover>
          <bpa-popover>預設</bpa-popover>
          <bpa-popover size="large">大</bpa-popover>
        </section>
        <section>
          <h3>樣式</h3>
          <bpa-popover theme="primary">主色</bpa-popover>
        </section>
        <section>
          <h3>按鈕文字</h3>
          <bpa-popover title="點我點我">
            內容
          </bpa-popover>
          <bpa-popover>
            <template v-slot:title>
              <mark>點我點我</mark>
            </template>
            內容
          </bpa-popover>
        </section>
        <section>
          <h3>內容無padding</h3>
          <bpa-popover nopadding>
            內容
          </bpa-popover>
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Popover',
  data() {
    return {
      options: [
        { label: 'label', value: '123' },
        { label: 'label2', value: '456' }
      ],
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  }
})
</script>
