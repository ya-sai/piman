<template>
  <div
    role="presentation"
    class="bpa-accordion"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BpaAccordion',
})
</script>