<template>
  <div
    :id="`tab-panel-${name}`"
    role="tabpanel"
    v-show="showPanel"
    :aria-labelledby="`tab-${name}`"
    tabindex="0"
    :class="[
      'bpa-tabs-panel',
      showPanel ? 'bpa-tabs-panel--selected': ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BpaTabPanel',
  props: {
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
    },
  },
  computed: {
    showPanel () {
      return this.name === (this as any).$parent.value
    }
  },
})
</script>
