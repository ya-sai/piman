import { mount } from "@vue/test-utils";
import BpaCheckbox from "../../src/components/BpaCheckbox.vue";

const components = { BpaCheckbox }
describe('bpa-checkbox', () => {
  const comp = {
    template: `
    <section>
      <h3>基本</h3>
      <bpa-checkbox id="aaa" name="testname" v-model="MySelectedValues" value="1">核取方塊一</bpa-checkbox>
      <bpa-checkbox id="bbb" name="testname" v-model="MySelectedValues" value="2" disabled>核取方塊二</bpa-checkbox>
      <bpa-checkbox id="ccc" name="testname" v-model="MySelectedValues" value="3">核取方塊三</bpa-checkbox>
      <bpa-checkbox id="ddd" name="testname" v-model="MySelectedValues" value="4" disabled>核取方塊四</bpa-checkbox>
    </section>
    `,
    components,
    data(){ return {
      MySelectedValues: ["1"],
    }},
  }
  const wrapper = mount(comp, {
    attachTo: document.body,
  })

  it('bind with v-model', () => {
    expect(wrapper.findAllComponents(BpaCheckbox).at(0).vm.activeCheck).toBe(true)
    expect(wrapper.findAllComponents(BpaCheckbox).at(1).vm.activeCheck).toBe(false)
  })

  it('change v-model data when checked', () => {
    const checkbox = wrapper.findAllComponents(BpaCheckbox).at(2)
    checkbox.vm.activeCheck = true
    
    expect(wrapper.vm.MySelectedValues).toEqual(["1","3"])
  })
})