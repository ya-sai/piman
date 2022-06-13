import TrapFocus from "../../src/utils/trapFocus";
import { shallowMount } from "@vue/test-utils";

describe('trapFocus', () => {
  const comp = {
    template: `
    <div>
      <ol>
        <li><button id="first"><span>first</span></button></li>
      </ol>
      <a href="javascript:;" id="second firstfocus">2</a>
      <p>3</p>
      <footer>
        <button id="last">last</button>
        <p>end test</p>
      </footer>
    </div>`,
  }
  const wrapper = shallowMount(comp, { attachTo: document.body })
  const firstfocus = document.getElementById('firstfocus')
  const trap = new TrapFocus([wrapper.element], firstfocus)

  it('find focusable elements', () => {
    expect(trap._focusList.length).toBe(1)
    expect(trap._focusList[0].length).toBe(3)
  })

})