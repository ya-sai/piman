<template>
  <div>
    <section>
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
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Bpa from "@/components";
const { Msg } = Bpa
export default Vue.extend({
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
