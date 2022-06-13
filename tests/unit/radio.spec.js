import { mount } from "@vue/test-utils";
import BpaRadio from "../../src/components/BpaRadio.vue";

const components = { BpaRadio }
describe('bpa-checkbox', () => {
  const comp = {
    template: `
    <section>
      <h3>基本</h3>
      <bpa-radio id="aaa" name="testname" value="1" v-model="data">單選按鈕一</bpa-radio>
      <bpa-radio id="bbb" name="testname" value="2" v-model="data" disabled>單選按鈕二</bpa-radio>
      <bpa-radio id="ccc" name="testname" value="3" v-model="data" >單選按鈕三</bpa-radio>
    </section>
    `,
    components,
    data(){ return {
      data: "1",
    }},
  }
  const wrapper = mount(comp, {
    attachTo: document.body,
  })

  it('bind with v-model', () => {
    expect(wrapper.findAllComponents(BpaRadio).at(0).vm.activeValue).toBe('1')
    expect(wrapper.findAllComponents(BpaRadio).at(1).vm.activeValue).toBe('1')
  })

  it('change v-model data when checked', () => {
    const checkbox = wrapper.findAllComponents(BpaRadio).at(2)
    checkbox.vm.activeValue = true
    
    expect(wrapper.vm.data).toBe("3")
  })
})