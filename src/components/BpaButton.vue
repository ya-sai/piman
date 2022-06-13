<template>
  <button
    v-bind="$attrs"
    :disabled="disabled || loading"
    :class="[
      'bpa-btn',
      theme ? `bpa-btn--${theme}` : '',
      size ? `bpa-btn--${size}` : ''
    ]"
    @click="handleClick"
  >
    <slot v-if="$slots.default"></slot>
    <span
      v-if="loading"
      class="bpa-btn-loading"
      :title="t('button.loading')"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
</template>

<script lang="ts">
import BpaI18n from '@/locale';
import Vue from 'vue'

export default Vue.extend({
  name: 'BpaButton',
  mixins:[ BpaI18n ],
  props: {
    theme: String,
    disabled: Boolean,
    loading: Boolean,
    size: String,
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick(evt: Event) {
      this.$emit('click', evt);
    },
  },
})
</script>