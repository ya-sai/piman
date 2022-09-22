<template>
  <div>
    <section>
      <h2>頁面導覽(麵包屑)</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-breadcrumb :key="$route.path">
            <bpa-breadcrumb-item
              v-for="(pathItem, pathIndex) in path"
              :key="`pathIndex-${pathIndex}`"
              :title="`前往${pathItem.title}`"
              :to="pathItem.url"
            > {{ pathItem.title }}</bpa-breadcrumb-item>
          </bpa-breadcrumb>
        </section>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  },
})
</script>
