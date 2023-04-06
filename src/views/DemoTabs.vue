<template>
  <article>
    <section>
      <h3>基本</h3>
      <pi-tabs v-model="demoTabs">
        <pi-tab-panel name="first-tab" label="First tab">This is the content of the first tab</pi-tab-panel>
        <pi-tab-panel name="second-tab" label="Second tab">This is the content of the second tab</pi-tab-panel>
      </pi-tabs>
    </section>
    <section>
      <h3>badge</h3>
      <pi-tabs v-model="demoTabs2">
        <pi-tab-panel name="first-tab2" label="First tab2" badge="23">This is the content of the first tab</pi-tab-panel>
        <pi-tab-panel name="second-tab2" label="Second tab2" badge="new">This is the content of the second tab</pi-tab-panel>
        <pi-tab-panel name="third-tab2" label="Third tab2">This is the content of the third tab</pi-tab-panel>
        <pi-tab-panel name="forth-tab2" label="Forth tab2"><strong>Hey!Look!</strong></pi-tab-panel>
      </pi-tabs>
    </section>
    <section>
      <h3>前後綴icon classname（如果需要）</h3>
      <pi-tabs v-model="demoTabs3">
        <pi-tab-panel name="first-tab3" label="First tab3" prefix-icon="fas fa-search">This is the content of the first tab</pi-tab-panel>
        <pi-tab-panel name="second-tab3" label="Second tab3" affix-icon="fas fa-search">This is the content of the second tab</pi-tab-panel>
      </pi-tabs>
    </section>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { PiTabPanel, PiTabs } from "/dist/piman-vue3.es";


const demoTabs = ref('first-tab')
const demoTabs2 = ref('first-tab2')
const demoTabs3 = ref('first-tab3')
</script>
