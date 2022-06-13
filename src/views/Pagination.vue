<template>
  <div>
    <section>
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
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      totalPages: 100,
      currentPage: 1,
      pagerCount: 3,
      pageSizeOptions: [
        { label: '9', value: 9 },
        { label: '18', value: 18 },
      ],
      pageSize: 9
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
