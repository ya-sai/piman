<template>
  <div>
    <section>
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
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
