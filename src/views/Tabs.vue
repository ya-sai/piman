<template>
  <div>
    <section>
      <h2>Tabs</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-tabs v-model="demoTabs">
            <bpa-tab-panel name="first-tab" label="First tab">This is the content of the first tab</bpa-tab-panel>
            <bpa-tab-panel name="second-tab" label="Second tab">This is the content of the second tab</bpa-tab-panel>
          </bpa-tabs>
        </section>
        <section>
          <h3>badge</h3>
          <bpa-tabs v-model="demoTabs2">
            <bpa-tab-panel name="first-tab2" label="First tab2" badge="23">This is the content of the first tab</bpa-tab-panel>
            <bpa-tab-panel name="second-tab2" label="Second tab2" badge="new">This is the content of the second tab</bpa-tab-panel>
            <bpa-tab-panel name="third-tab2" label="Third tab2">This is the content of the third tab</bpa-tab-panel>
            <bpa-tab-panel name="forth-tab2" label="Forth tab2"><strong>Hey!Look!</strong></bpa-tab-panel>
          </bpa-tabs>
        </section>
        <section>
          <h3>前後綴icon classname（如果需要）</h3>
          <bpa-tabs v-model="demoTabs3">
            <bpa-tab-panel name="first-tab3" label="First tab3" prefix-icon="fas fa-search">This is the content of the first tab</bpa-tab-panel>
            <bpa-tab-panel name="second-tab3" label="Second tab3" affix-icon="fas fa-search">This is the content of the second tab</bpa-tab-panel>
          </bpa-tabs>
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
      demoTabs: 'first-tab',
      demoTabs2: 'first-tab2',
      demoTabs3: 'first-tab3',
    }
  }
})
</script>
