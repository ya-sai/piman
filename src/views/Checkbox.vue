<template>
  <div class="page">
    <div class="page-header">
      <bpa-button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <title>選單 Menu</title>
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </bpa-button>
      <bpa-breadcrumb :key="$route.path">
        <bpa-breadcrumb-item
          v-for="(pathItem, pathIndex) in path"
          :key="`pathIndex-${pathIndex}`"
          :title="`前往${pathItem.title}`"
          :to="pathItem.url"
        > {{ pathItem.title }}</bpa-breadcrumb-item>
      </bpa-breadcrumb>
    </div>
    <div class="page-main">
      <h2>下拉選擇</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-checkbox value="1" v-model="MySelectedValues">核取方塊 1</bpa-checkbox>
          <bpa-checkbox value="2" v-model="MySelectedValues">核取方塊 2</bpa-checkbox>
          <bpa-checkbox value="3" v-model="MySelectedValues">核取方塊 3</bpa-checkbox>
          <div>{{ MySelectedValues }}  <bpa-button size="small" @click="onClear">Clear</bpa-button></div>
        </section>
        <section>
          <h3>禁用</h3>
          <bpa-checkbox value="1" v-model="MySelectedValues" disabled>核取方塊 1</bpa-checkbox>
          <bpa-checkbox value="2" v-model="MySelectedValues" disabled>核取方塊 2</bpa-checkbox>
          <bpa-checkbox value="3" v-model="MySelectedValues" disabled>核取方塊 3</bpa-checkbox>
          <div>{{ MySelectedValues }}  <bpa-button size="small" @click="onClear">Clear</bpa-button></div>
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Checkbox',
  data() {
    return {
      MySelectedValues: ["2"],
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  },
  methods:{
    onClear(){
      this.MySelectedValues = []
    }
  }
})
</script>
