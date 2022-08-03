<template>
  <div class="bpa-pagination-group">
    <div class="bpa-pagination-group__item">
      <div
        v-if="layout.includes('total_item') || layout.includes('total_page')"
        class="bpa-pagination-info"
      >
        {{ t('pagination.total') }}
        <span v-if="layout.includes('total_page')">{{ totalPages }} {{ t('pagination.page') }}</span>
        <span v-if="layout.includes('total_item')">{{ total }} {{ t('pagination.result') }}</span>
      </div>
      <div
        v-if="layout.includes('page_size')"
        class="bpa-pagination-info bpa-pagination-info--pagesize"
      >
        <bpa-select
          v-model="syncPageSize"
          class="page-size-select"
          :options="pageSizeOptions"
          disabledClear
          :size=size
          @input="onChangeSize"
        >
          <template v-slot:prefix>
            <span class="prefix">{{ t('pagination.per') }}</span>
          </template>
          <template v-slot:affix>
            <span class="affix">{{ t('pagination.result') }}</span>
          </template>
        </bpa-select>
      </div> 
    </div>
    <div class="bpa-pagination-group__item">
      <nav
        :aria-label="t('pagination.aria')"
        class="bpa-pagination"
      >
        <ul>
          <li
            v-if="layout.includes('first')"
            class="first"
          >
            <bpa-button
              :aria-disabled="currentPage === 1 ? true : false"
              :disabled="currentPage === 1 ? true : false"
              theme="primary-ghost"
              :size=size
              @click="handleClickPager(1)"
            >
              <slot name="first-page-text">
                <span aria-hidden="true">⇤</span>
                <span class="visually-hidden">{{ t('pagination.first_page_text') }}</span>
              </slot>
            </bpa-button>
          </li>
          <li class="prev">
            <bpa-button
              :aria-disabled="currentPage === 1 ? true : false"
              :disabled="currentPage === 1 ? true : false"
              theme="primary-ghost"
              :size=size
              @click="handleClickPager(prevPage)"
            >
              <slot name="prev-page-text">
                <span aria-hidden="true">⇠</span>
                <span class="visually-hidden">{{ t('pagination.prev_page_text') }}</span>
              </slot>
            </bpa-button>
          </li>
          <li 
            v-for="item in pagers"
            :key="item"
            :class="item === currentPage ? 'current' : ''"
          >
            <bpa-button
              :aria-current="item === currentPage ? true : false"
              :theme="item === currentPage ? 'primary' : 'primary-ghost'"
              :size=size
              @click="handleClickPager(item)"
            >
              <span class="visually-hidden">{{ t('pagination.goto') }}</span>
              <span>{{ item }}</span>
              <span class="visually-hidden">{{ t('pagination.page') }}</span>
            </bpa-button>
          </li>
          <li class="next">
            <bpa-button
              :aria-disabled="currentPage === totalPages ? true : false"
              :disabled="(currentPage === totalPages) || (totalPages === 0) ? true : false"
              theme="primary-ghost"
              :size=size
              @click="handleClickPager(nextPage)"
            >
              <slot name="next-page-text">
                <span aria-hidden="true">⇢</span>
                <span class="visually-hidden">{{ t('pagination.next_page_text') }}</span>
              </slot>
            </bpa-button>
          </li>
          <li
            v-if="layout.includes('last')"
            class="last"
          >
            <bpa-button
              :aria-disabled="currentPage === totalPages ? true : false"
              :disabled="(currentPage === totalPages) || (totalPages === 0) ? true : false"
              theme="primary-ghost"
              :size=size
              @click="handleClickPager(totalPages)"
            >
              <slot name="last-page-text">
                <span aria-hidden="true">⇥</span>
                <span class="visually-hidden">{{ t('pagination.last_page_text') }}</span>
              </slot>
            </bpa-button>
          </li>
        </ul>
      </nav>
    </div>
    <div 
      v-if="layout.includes('jump')"
      class="bpa-pagination-group__item bpa-pagination-group__item--jump"
    >
      <label :for="goPagesId">
        <span>{{ t('pagination.goto') }}</span>
        <bpa-input
          type="number"
          :max="totalPages"
          :min="1"
          :value="jumperNumber"
          @inputKeyup="handleClickPager"
          disabled-clear
          :size=size
          :id="goPagesId"
        />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import BpaI18n from '../locale'
import { generateId } from '@/utils/generateId';
import Vue from 'vue'
import BpaMsg from "./BpaMsg";
export default Vue.extend({
  name: 'BpaPagination',
  mixins:[ BpaI18n ],
  props: {
    total: { type: Number, required: true },
    currentPage: { type: Number, required: true },
    pagerCount: { type: Number, default: 5 },
    pageSizeOptions: {
      type: Array,
      default: () => {
        return [
          { label: '10', value: 10 },
          { label: '20', value: 20 },
          { label: '50', value: 50 },
          { label: '100', value: 100 },
        ]
      }
    },
    pageSize: { type: Number, default: 10 },
    layout: { type: Array, default: () => ['total_item', 'total_page', 'page_size', 'first', 'last', 'jump']},
    size: String
  },
  data() {
    return {
      goPagesId: ''
    }
  },
  computed: {
    syncPageSize:{
      get() {
        return this.pageSize
      },
      set(newValue : number){
        return newValue
      }
    },
    jumperNumber() {
      return this.currentPage
    },
    totalPages(): number {
      return Math.ceil(this.total / this.syncPageSize );
    },
    pagers() {
      let pagers = [];
      let pagerStart = (Math.ceil(this.currentPage / this.pagerCount) - 1) * this.pagerCount + 1;
      let pagerEnd = (Math.ceil(this.currentPage / this.pagerCount) - 1) * this.pagerCount + this.pagerCount;
      for(let i=pagerStart; i <= pagerEnd; i++) {
        if(i <= this.totalPages) {
            pagers.push(i);
        }
      }
      return pagers;
    },
    prevPage() {
      return this.currentPage - 1;
    },
    nextPage() {
      return this.currentPage + 1;
    },
  },
  methods: {
    handleClickPager(page: number) {
      if(page > 0 && page <= this.totalPages) {
        this.$emit('update:currentPage', Number(page));
        this.$emit('sync-page-param', {currentPage: Number(page)})
        this.$emit('change:page', Number(page))
      }
      else {
        BpaMsg({
          msg: (this as any).t('pagination.exceed'),
        })
      }
    },
    onChangeSize(pageSize: number){
      this.$emit('change:pageSize', pageSize)
    }
  },
  mounted(){
    this.goPagesId = 'bpa-pagination-go-pages-' + generateId()
  },
})

</script>