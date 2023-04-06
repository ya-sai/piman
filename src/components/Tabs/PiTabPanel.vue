<template>
<div
  :id="`tab-panel-${name}`"
  role="tabpanel"
  v-show="showPanel"
  :aria-labelledby="`tab-${name}`"
  tabindex="0"
  :class="[
    'pi-tabs-panel',
    showPanel ? 'pi-tabs-panel--selected': ''
  ]"
>
  <slot></slot>
</div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance } from 'vue';


const props = defineProps({
  name: {
    type: String,
    required: true
  },
  prefixIcon: String,
  label: {
    type: String,
    required: true,
  },
  affixIcon: String,
  badge: {
    type: String || Number,
  }
})

const showPanel = computed(() => {
  const self = getCurrentInstance()
  if(!self || !self.parent) return false
  return props.name === self.parent.props.modelValue
})
</script>

<style lang="scss" scoped>
</style>