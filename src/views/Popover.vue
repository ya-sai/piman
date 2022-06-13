<template>
  <div>
    <section>
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
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      options: [
        { label: 'label', value: '123' },
        { label: 'label2', value: '456' }
      ],
    }
  }
})
</script>
