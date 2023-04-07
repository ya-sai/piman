<template>
  <article>
    <section>
      <h3>基本</h3>
      <pi-accordion>
        <pi-accordion-item>
          內容1
        </pi-accordion-item>
        <pi-accordion-item open>
          預設打開
        </pi-accordion-item>
      </pi-accordion>
    </section>
    <section>
      <h3>客製化標題</h3>
      <pi-accordion>
        <pi-accordion-item title="客製化標題：純文字">
          內容1
        </pi-accordion-item>
        <pi-accordion-item>
          <template v-slot:title><mark>客製化標題：HTML</mark></template>
          內容2
        </pi-accordion-item>
      </pi-accordion>
    </section>
  </article>
</template>

<script lang="ts" setup>
//@ts-ignore
import { PiAccordion, PiAccordionItem } from "/dist/piman-vue3.es";

</script>

<style lang="scss" scoped>
</style>