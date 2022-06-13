import { mount } from "@vue/test-utils";
import BpaPopover from "../../src/components/BpaPopover.vue";

const components = { BpaPopover }
describe('bpa-popover', () => {
  const comp = {
    template: `
    <section>
      <h3>基本</h3>
      <bpa-popover
        id="test1"
      >
        <template v-slot:title>
          搜尋指引
        </template>
        支援多組關鍵字配合布林運算子進行檢索，輸入方式如下：<br>
      </bpa-popover>
    </section>`,
    components
  }
  const wrapper = mount(comp,{ attachTo: document.body, stubs:['bpa-button'] })

  it('has right content', async () => {
    await wrapper.findComponent(BpaPopover).vm.open()

    expect(wrapper.find('.bpa-popover-container').text()).toBe(`支援多組關鍵字配合布林運算子進行檢索，輸入方式如下：`)
  })

  it('has right button text', () => {
    expect(wrapper.find('#popover-test1-btn').text()).toBe('搜尋指引')
  })
  
  it('append to body', () => {

    expect(wrapper.find('.bpa-popover-container').element.parentNode).toBe(document.body)
  })

  // it('esc to close', async () => {
  //   await wrapper.trigger('keyup.esc')

  //   expect(wrapper.findComponent(BpaPopover).vm.ariaExpanded).toBe(false)
  // })
})