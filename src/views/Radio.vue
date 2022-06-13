<template>
  <div>
    <section>
      <h2>下拉選擇</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-radio name="testname" value="1" v-model="data">單選按鈕 1</bpa-radio>
          <bpa-radio name="testname" value="2" v-model="data">單選按鈕 2</bpa-radio>
          <bpa-radio name="testname" value="3" v-model="data">單選按鈕 3</bpa-radio>
        </section>
        <section>
          <h3>禁用</h3>
          <bpa-radio name="testname1" value="1" v-model="data" disabled>單選按鈕 1</bpa-radio>
          <bpa-radio name="testname1" value="2" v-model="data" disabled>單選按鈕 2</bpa-radio>
          <bpa-radio name="testname1" value="3" v-model="data" disabled>單選按鈕 3</bpa-radio>
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
      data: "1",
    }
  }
})
</script>
