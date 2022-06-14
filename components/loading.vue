<template>
  <div v-if="loading">
    <div class="loading">
       <div class="loading-container">
          <div class="loader"></div>
       </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  })
</script>