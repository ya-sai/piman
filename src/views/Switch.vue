<template>
  <div>
    <section>
      <h2>開關</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-switch
            labelText="開關說明"
            v-model="isOpen"
          />
        </section>
        <section>
          <h3>客製化開關內文字</h3>
          <bpa-switch
            labelText="開關說明"
            v-model="isOpen"
          >
            <template v-slot:close-text><img src="favicon.ico" alt=""/>Off</template>
            <template v-slot:open-text>On👍🏽</template>
          </bpa-switch>
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
      isOpen: true
    }
  }
})
</script>
