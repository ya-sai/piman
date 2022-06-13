<template>
  <div>
    <section>
      <h2>下拉選擇</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-checkbox value="1" v-model="MySelectedValues">核取方塊 1</bpa-checkbox>
          <bpa-checkbox value="2" v-model="MySelectedValues">核取方塊 2</bpa-checkbox>
          <bpa-checkbox value="3" v-model="MySelectedValues">核取方塊 3</bpa-checkbox>
          <div>{{ MySelectedValues }}  <bpa-button size="small" @click="onClear">Clear</bpa-button></div>
        </section>
        <section>
          <h3>禁用</h3>
          <bpa-checkbox value="1" v-model="MySelectedValues" disabled>核取方塊 1</bpa-checkbox>
          <bpa-checkbox value="2" v-model="MySelectedValues" disabled>核取方塊 2</bpa-checkbox>
          <bpa-checkbox value="3" v-model="MySelectedValues" disabled>核取方塊 3</bpa-checkbox>
          <div>{{ MySelectedValues }}  <bpa-button size="small" @click="onClear">Clear</bpa-button></div>
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
      MySelectedValues: ["2"],
    }
  },
  methods:{
    onClear(){
      this.MySelectedValues = []
    }
  }
})
</script>
