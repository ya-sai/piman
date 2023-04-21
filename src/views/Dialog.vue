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
      <h2>對話框</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-button theme="primary" @click="isBpaDialogVisible = true">Open Dialog</bpa-button>
          <bpa-dialog
            :visible.sync="isBpaDialogVisible"
            header="標題"
            footer="footer"
          >
            <div class="demo-dialog-content">content</div>
          </bpa-dialog>
        </section>
        <section>
          <h3>點擊黑色區域不關閉</h3>
          <bpa-button theme="primary" @click="isBpaDialogVisible2 = true">Open Dialog</bpa-button>
          <bpa-dialog
            :visible.sync="isBpaDialogVisible2"
            header="購物車"
            id="2"
            :clickoutside="false"
          >
            <div>
              爸爸買給我
              <p>購買連結：<a href="https://bpnpm.blueplanet.com.tw/" target="_blank" rel="noopener noreferrer">Bp Npm</a></p>
              <p>購買人：<bpa-input v-model="value"/></p>
              <bpa-select
                v-model="value2"
                :options=options
              />
              <bpa-input
                v-model="value"
                type="password"
                placeholder="這是密碼"
              />
            </div>
            <template v-slot:footer>
              <bpa-button @click="onBuy">購買</bpa-button>
            </template>
          </bpa-dialog>
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
      isBpaDialogVisible: false,
      isBpaDialogVisible2: false,
      options: [
        { label: 'label', value: '123' },
        { label: 'label2', value: '456' }
      ],
      value: '',
      value2: '',
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  },
  methods:{
    onBuy(){
      this.$msg.danger({msg:'不行！！',duration: 0})
    }
  }
})
</script>

<style lang="scss" scoped>
  .demo-dialog-content {
    height: 300px;
  }
</style>