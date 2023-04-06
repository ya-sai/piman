<template>
  <nav
    :aria-label="t('breadcrumb.current_page')"
    class="pi-breadcrumb"
  >
    <ol>
      <slot></slot>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import useI18n from '@/locales/useI18n';
import { getCurrentInstance, onMounted } from 'vue';

const { t } = useI18n()

onMounted(()=>{
  const self = getCurrentInstance()
  if(self && self.slots.default){
    const items = self.slots.default()[0].children
    console.log(items);
    
    if (items.length && items[items.length - 1].el) {
      items[items.length - 1].el!.setAttribute('aria-current', 'page');
    }
  }
})
</script>

<style lang="scss" scoped>
</style>