import { mount } from "@vue/test-utils";
import BpaDropdown from "../../src/components/BpaDropdown.vue";

const components = { BpaDropdown }

describe('bpa-dropdown', () => {
  const comp = {
    template:`
      <section>
        <h3>icon(fontswesome) + theme + clickOptionEvent</h3>
        <bpa-dropdown
          :options=options3
          id="prefix-id4"
          label="列印..."
          theme="primary"
        />
      </section>`,
    components,
    data(){ return {
      options3: [
        { type: 'link', url: '/', label: '內部連結', },
        { type: 'external-link', url: 'https://google.com', label: '外部連結' },
        { label: '功能按鈕', }
      ],
    }}
  }

  const wrapper = mount(comp, {
    attachTo: document.body,
    stubs: ['bpa-button', 'router-link']
  })
  it('has correct option number', () => {
    expect(wrapper.findAll('.bpa-select-popup li').length).toBe(3)
  })

  it('has correst button text', () => {
    expect(wrapper.find('.bpa-select-btn').text()).toBe('列印...')
  })

  it('the list appends to body', () => {
    wrapper.findComponent(BpaDropdown).vm.open()

    expect(wrapper.find('.bpa-select-popup').element.parentNode).toEqual(document.body)
  })
})