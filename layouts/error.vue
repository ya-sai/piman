<template>
  <div>
    <div v-if="error.statusCode === 404">
      您所訪問的頁面不存在
    </div>
    <div v-else>
      <samp>error{{ error.statusCode }}</samp>
    </div>
  </div>
</template>


<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>
