<template>
  <article>
    <section>
      <h3>基本</h3>
      <pi-breadcrumb key="/">
        <pi-breadcrumb-item
          v-for="(pathItem, pathIndex) in path"
          :key="`pathIndex-${pathIndex}`"
          :title="`前往${pathItem.title}`"
          :to="pathItem.url"
        >
          {{ pathItem.title }}
        </pi-breadcrumb-item>
      </pi-breadcrumb>
    </section>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
//@ts-ignore
import { PiBreadcrumb, PiBreadcrumbItem } from "/dist/piman-vue3.es";

const path = ref([
  { title: '🏠首頁', url: '/'},
  { title: '表單範例',  url: '/formvalidate'},
  { title: '現在頁面'},
])
</script>

<style lang="scss" scoped>
</style>