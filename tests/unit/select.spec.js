import { mount } from "@vue/test-utils";
import BpaSelect from "../../src/components/BpaSelect.vue";

const components = { BpaSelect }
describe('bpa-select', () => {
  describe('single', () =>{
    const comp = {
      template: `
      <section>
        <h3>基本</h3>
        <bpa-select
          :options="options"
          prefixId="test1"
          v-model="data"
        />
      </section>
      `,
      components,
      data(){ return {
        options: [
          { 
            type: 'group',
            label: '日式',
            options: [
              { label: '抹茶冰淇淋', value: 'matcha' },
              { label: 'ほうじ茶アイス', value: 'houjicha' },
            ]
          },
          { label: '海鹽', value: 'umishio' },
        ],
        data: 'matcha'
      }},
    }
    const wrapper = mount(comp, {
      attachTo: document.body,
      stubs: ['bpa-button']
    })
  
    it('has correct options number', () => {
      expect(wrapper.findAll('.bpa-select-popup li[role=option]').length).toBe(3)
      expect(wrapper.findAll('.bpa-select-popup li[role=group]').length).toBe(1)
    })
  
    it('bind with v-model value', ()=>{
      expect(wrapper.find('.bpa-select-btn').text()).toBe('抹茶冰淇淋')
    })
  
    it('listbox append to body', async () => {
      await wrapper.findComponent(BpaSelect).vm.open()
      
      expect(wrapper.find('.bpa-select-popup').element.parentNode).toBe(document.body)
    })
  })

  describe("multiple", () => {
    const comp = {
      template: `
      <section>
        <h3>基本</h3>
        <bpa-select
          :options="options"
          prefixId="test1"
          v-model="data"
          multiple="accordion"
        />
      </section>
      `,
      components,
      data(){ return {
        options: [
          { 
            type: 'group',
            label: '日式',
            options: [
              { label: '抹茶冰淇淋', value: 'matcha' },
              { label: 'ほうじ茶アイス', value: 'houjicha' },
            ]
          },
          { label: '海鹽', value: 'umishio' },
        ],
        data: ['matcha', 'houjicha']
      }},
    }
    const wrapper = mount(comp, {
      attachTo: document.body,
      stubs: ['bpa-button']
    })

    it('bind with v-model value and accordion', () =>{
      expect(wrapper.findAll('.multiple-chip').length).toBe(2)
      expect(wrapper.findAll('.multiple-chip').at(1).text()).toBe('+1')
    })

    it('select on click non-selected option', async () => {
      await wrapper.findAll('.bpa-select-popup li[role=option]').at(2).trigger('click')
      expect(wrapper.vm.$data.data).toEqual(['matcha', 'houjicha', 'umishio'])
      expect(wrapper.findAll('.multiple-chip').length).toBe(2)
    })

    it('unselect on click selected option', async () => {
      await wrapper.findAll('.bpa-select-popup li[role=option]').at(1).trigger('click')
      expect(wrapper.vm.$data.data).toEqual([ 'umishio', 'matcha' ])
      expect(wrapper.findAll('.multiple-chip').length).toBe(2)
    })

  })
  // 不知怎麼測
  // it('focus back when close', async () => {
  //   await wrapper.findComponent(BpaSelect).vm.close()

  //   expect(document.activeElement).toEqual(wrapper.find('#test1').element)
  // })
})