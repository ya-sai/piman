import { mount, shallowMount } from '@vue/test-utils'
import BpaDialog from "../../src/components/BpaDialog.vue";

const components = { BpaDialog }

describe('bpa-dialog', () => {
  describe('in a template', () => {
    const comp = {
      template: `
      <div>
        <bpa-dialog 
          id="1"
          header="標題" 
          footer="footer" 
          :visible.sync="visible"
        >
          <div>我是內容</div>
        </bpa-dialog>
      </div>`,
      components,
      props: ['id', 'clickoutside'],
      data(){ return {
        visible: true
      }},
    }
    const wrapper = mount(comp, {
      attachTo: document.body,
      stubs: ['bpa-button']
    })
    it('create', () => {
      expect(wrapper.find('.bpa-dialog').exists()).toBe(true)
    })
    
    it('has close button', () => {
      expect(wrapper.find('.bpa-dialog-close-btn').exists()).toBe(true)
    })
  
    it('append to body', () => {
      expect(wrapper.find('.bpa-dialog').element.parentNode.parentNode).toBe(document.body)
    })
  
    it('has correct content', () => {
      expect(wrapper.find('.bpa-dialog-container').text()).toBe('我是內容')
    })
  })
  
  // describe('component itself', () => {
  //   const $emit = jest.fn()
  //   const wrapper = shallowMount(BpaDialog, {
  //     propsData:{
  //       id: "1",
  //       header: '購物車',
  //       footer: '版權所有',
  //       visible: true
  //     },
  //     mocks: { $emit }
  //   })

  //   // 無法測試
  //   // it('closes on keyup esc', async () => {
  //   //   await wrapper.trigger('keyup.esc')
  //   //   expect(wrapper.vm.visible).toBe(false)
  //   // })
    
  //   it('focuses inside the modal', () => {
  
  //   })
  // })
})