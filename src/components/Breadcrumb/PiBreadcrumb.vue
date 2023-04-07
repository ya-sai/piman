<template>
  <nav
    :aria-label="t('breadcrumb.current_page')"
    class="pi-breadcrumb"
    ref="elBreadcrumb"
  >
    <ol>
      <slot></slot>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import useI18n from '@/locales/useI18n';
import { onMounted, ref } from 'vue';

const { t } = useI18n()

const elBreadcrumb = ref<null|HTMLElement>(null)

onMounted(()=>{
  if(elBreadcrumb.value){
    const items = elBreadcrumb.value.querySelectorAll('ol > li');
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page');
    }
  }
})
</script>

<style lang="scss" scoped>
</style>