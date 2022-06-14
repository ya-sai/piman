<template>
  <div class="wrapper">
    <the-header/>
    <div class="container">
      <nuxt />
    </div>
    <the-footer/>
    <noscript class="noscript" data-html2canvas-ignore="true"> Your browser does not support JavaScript! 您的瀏覽器不支援 JavaScript 功能，若網頁功能無法正常使用時，請開啟瀏覽器 JavaScript 狀態。 </noscript>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import theHeader from '@/components/theHeader.vue'
import theFooter from '@/components/theFooter.vue'

export default defineComponent({
  components: {
    theHeader,
    theFooter,
  },
})
</script>