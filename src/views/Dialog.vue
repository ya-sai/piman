<template>
  <div>
    <section>
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
            </div>
            <template v-slot:footer>
              <bpa-button @click="onBuy">購買</bpa-button>
            </template>
          </bpa-dialog>
        </section>
      </article>
    </section>
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
      value2: ''
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