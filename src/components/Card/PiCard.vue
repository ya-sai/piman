<template>
  <div
    :class="[
      'pi-card',
      shadow ? 'pi-card--shadow' : ''
    ]"
  >
    <div
      v-if="$slots.header || header"
      class="pi-card-header"
    >
      <slot name="header">{{ header }}</slot>
    </div>
    <div
      :class="[
        'pi-card-container',
        nopadding ? 'no-padding' : ''
      ]"
    >
      <slot></slot>
    </div>
    <div
      v-if="$slots.footer || footer"
      class="pi-card-footer"
    >
      <slot name="footer">{{ footer }}</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  header: {},
  footer: {},
  nopadding: Boolean,
  shadow: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
</style>