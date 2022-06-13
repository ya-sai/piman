<template>
  <div
    :class="[
      'bpa-card',
      shadow ? 'bpa-card--shadow' : ''
    ]"
  >
    <div
      v-if="$slots.header || header"
      class="bpa-card-header"
    >
      <slot name="header">{{ header }}</slot>
    </div>
    <div
      :class="[
        'bpa-card-container',
        nopadding ? 'no-padding' : ''
      ]"
    >
      <slot></slot>
    </div>
    <div
      v-if="$slots.footer || footer"
      class="bpa-card-footer"
    >
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BpaCard',
  props: {
    header: {},
    footer: {},
    nopadding: Boolean,
    shadow: {
      type: Boolean,
      default: false
    }
  },
})
</script>