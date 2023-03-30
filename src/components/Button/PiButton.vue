<template>
  <button
    v-bind="$attrs"
    :disabled="disabled || loading"
    :class="[
      'pi-btn',
      theme ? `pi-btn--${theme}` : '',
      size ? `pi-btn--${size}` : ''
    ]"
  >
    <slot v-if="$slots.default"></slot>
    <span
      v-if="loading"
      class="pi-btn-loading"
      title="loading"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
</template>

<script lang="ts" setup>

defineProps({
  theme: String,
  disabled: Boolean,
  loading: Boolean,
  size: String,
})

</script>

<style lang="scss" scoped>
</style>