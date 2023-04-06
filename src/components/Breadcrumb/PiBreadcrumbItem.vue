<template>
 <li class="pi-breadcrumb__item">
    <router-link
      v-if="to"
      :to="to"
      :title="title"
    >
      <slot></slot>
    </router-link>
    <slot v-else></slot>
  </li>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';


defineProps({
  to: [String, Object],
  title: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>
</style>