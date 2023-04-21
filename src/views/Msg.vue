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
      <h2>訊息提示</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-button @click="openMsg1">提示</bpa-button>
        </section>
        <section>
          <h3>前綴</h3>
          <bpa-button @click="openMsg2">純文字</bpa-button>
          <bpa-button @click="openMsg3">客製化前綴（具有危險性）</bpa-button>
        </section>
        <section>
          <h3>展示時間</h3>
          <bpa-button @click="openMsg4">顯示5秒鐘</bpa-button>
          <bpa-button @click="openMsg9">永不關閉（主動關閉）</bpa-button>
        </section>
        <section>
          <h3>主題色</h3>
          <bpa-button @click="openMsg5">Normal</bpa-button>
          <bpa-button @click="openMsg6">Success</bpa-button>
          <bpa-button @click="openMsg7">Warning</bpa-button>
          <bpa-button @click="openMsg8">Danger</bpa-button>
        </section>
        <section>
          <h3>另一種寫法</h3>
          <bpa-button @click="openMsg10">另一種寫法</bpa-button>
        </section>
        <section>
          <h3>關閉觸發</h3>
          <bpa-button @click="openMsg11">關閉訊息觸發</bpa-button>
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Bpa from "@/components";
const { Msg } = Bpa
export default Vue.extend({
  data() {
    return {
      value:'',
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  },
  methods: {
    openMsg1() {
      (this as any).$msg({
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
      })
    },
    openMsg2() {
      (this as any).$msg({
        prefix: '⚠',
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
      })
    },
    openMsg3() {
      (this as any).$msg({
        prefix: '<img src="favicon.ico" alt=""/>',
        dangerHTML: true,
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
      })
    },
    openMsg4() {
      (this as any).$msg({
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
        duration: 5000
      })
    },
    openMsg5() {
      (this as any).$msg({
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
      })
    },
    openMsg6() {
      (this as any).$msg.success({
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
      })
    },
    openMsg7() {
      (this as any).$msg.warning({
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
      })
    },
    openMsg8() {
      (this as any).$msg.danger({
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
      })
    },
    openMsg9() {
      (this as any).$msg({
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
        duration: 0
      })
    },
    openMsg10() {
      Msg({
        prefix: '<img src="favicon.ico" alt=""/>',
        dangerHTML: true,
        msg: '很短',
        duration: 0,
        theme: 'primary',
      })
    },
    openMsg11() {
      (this as any).$msg({
        msg: 'These can be useful for demos with large templates or in extremely small applications, but should otherwise be avoided, because they separate templates from the rest of the component definition.',
        duration: 0,
        onClose: function(){
          alert('關閉了')
        }
      })
    },
  },
})
</script>
