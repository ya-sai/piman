import { mount } from "@vue/test-utils";
import Vue from "vue";
import BpaPagination from "../../src/components/BpaPagination.vue";
import { use } from "../../src/locale";
import zhHant from "../../src/locale/lang/zh-Hant-TW";


const components = { BpaPagination }

describe('bpa-i18n', () => {
  const comp = {
    template:`
      <section>
        <h3>pagi</h3>
        <bpa-pagination
          :total="totalPages"
          :current-page.sync="currentPage"
          :pager-count="pagerCount"
          :prev-text="prevText"
          :next-text="nextText"
          showJumpEdge
          :first-text="firstText"
          :last-text="lastText"
          :pageSize="pageSize"
          showPageSize
        />
      </section>`,
    components,
    data(){ return {
      totalPages: 100,
      currentPage: 1,
      pagerCount: 3,
      prevText: 'prev',
      nextText: 'next',
      firstText: '這是第一頁拉',
      lastText: '阿不就最後一頁',
      pageSizeOptions: [
        { label: '9', value: 9 },
        { label: '18', value: 18 },
      ],
      pageSize: 9
    }}
  }

  const wrapper = mount(comp, {
    attachTo: document.body,
    stubs: ['bpa-button', 'bpa-select', 'bpa-input']
  })

  it('translated by given path',()=>{
    const text = zhHant.pagination.aria
    expect(wrapper.findComponent(BpaPagination).find('.bpa-pagination').attributes()['aria-label']).toBe(text)
  })
  
  it('uses given json', () => {
    use({
      "pagination":{
        "haha":"哈哈",
        "aria":"分頁選擇choose your fate",
      },
    })
    Vue.nextTick(()=>{
      expect(wrapper.findComponent(BpaPagination).find('.bpa-pagination').attributes()['aria-label']).toBe('分頁選擇choose your fate')
    })
  })

})