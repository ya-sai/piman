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
      <h2>分頁碼</h2>
      <article>
        <section>
          <h3>大小</h3>
          <bpa-pagination
            :total="totalPages"
            :current-page.sync="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            @change:pageSize="onChangeSize"
            :pageSize="pageSize"
            :pageSizeOptions="pageSizeOptions"
            size="small"
          />
          <bpa-pagination
            :total="totalPages"
            :current-page.sync="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            @change:pageSize="onChangeSize"
            :pageSize="pageSize"
            :pageSizeOptions="pageSizeOptions"
          />
          <bpa-pagination
            :total="totalPages"
            :current-page.sync="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            @change:pageSize="onChangeSize"
            :pageSize="pageSize"
            :pageSizeOptions="pageSizeOptions"
            size="large"
          />
        </section>
        <section>
          <h3>客製化前/後按鈕</h3>
          <bpa-pagination
            :total="totalPages"
            :current-page.sync="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            @change:pageSize="onChangeSize"
            :pageSize="pageSize"
            :pageSizeOptions="pageSizeOptions"
          >
            <template v-slot:first-page-text>最前</template>
            <template v-slot:prev-page-text>往前</template>
            <template v-slot:next-page-text>往後</template>
            <template v-slot:last-page-text>最後</template>
          </bpa-pagination>
        </section>
        <section>
          <h3>分頁碼顯示項目( :layout=['total_item', 'total_page', 'page_size', 'first', 'last', 'jump'] )</h3>
          <bpa-pagination
            :total="totalPages"
            :current-page.sync="currentPage"
            :pager-count="pagerCount"
            @change:page="onChangePage"
            @change:pageSize="onChangeSize"
            :pageSize="pageSize"
            :pageSizeOptions="pageSizeOptions"
            :layout="[]"
          />
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Pagination',
  data() {
    return {
      totalPages: 100,
      currentPage: 1,
      pagerCount: 3,
      pageSizeOptions: [
        { label: '9', value: 9 },
        { label: '18', value: 18 },
      ],
      pageSize: 9,
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  },
  methods: {
    onChangePage(page: number){
      console.log('turn to ', page);
    },
    onChangeSize(size: number){
      this.pageSize = size
      this.currentPage = 1
      console.log('expand to ', size);
    }
  },
})
</script>
