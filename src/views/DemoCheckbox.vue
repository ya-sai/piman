<template>
  <article>
    <section>
      <h3>基本</h3>
      <pi-checkbox value="1" v-model="valCheckbox">核取方塊 1</pi-checkbox>
      <pi-checkbox value="2" v-model="valCheckbox">核取方塊 2</pi-checkbox>
      <pi-checkbox value="3" v-model="valCheckbox">核取方塊 3</pi-checkbox>
      <div>{{ valCheckbox }}  <pi-button size="small" @click="onClearCheckbox">Clear</pi-button></div>
    </section>
    <section>
      <h3>禁用</h3>
      <pi-checkbox value="1" v-model="valCheckbox" disabled>核取方塊 1</pi-checkbox>
      <pi-checkbox value="2" v-model="valCheckbox" disabled>核取方塊 2</pi-checkbox>
      <pi-checkbox value="3" v-model="valCheckbox" disabled>核取方塊 3</pi-checkbox>
      <div>{{ valCheckbox }}  <pi-button size="small" @click="onClearCheckbox">Clear</pi-button></div>
    </section>
  </article>
</template>

<script lang="ts" setup>

import { ref } from "vue";
//@ts-ignore
import { PiButton, PiCheckbox } from "/dist/piman-vue3.es";

// checkbox
const valCheckbox = ref([])
const onClearCheckbox = () => {
  valCheckbox.value = []
}
</script>

<style lang="scss" scoped>
</style>