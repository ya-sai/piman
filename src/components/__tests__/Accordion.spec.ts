import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import PiAccordion from "../Accordion/PiAccordion.vue";
import PiAccordionItem from "../Accordion/PiAccordionItem.vue";

describe("Accordion", () => {
  it("點擊時展開body", () => {
    const wrapper = mount({
      template: `
        <pi-accordion>
          <pi-accordion-item>
            內容1
          </pi-accordion-item>
        </pi-accordion>
      `,
      components:{
        PiAccordion, PiAccordionItem
      }
    });

    expect(wrapper.find(".pi-accordion__item-container").isVisible()).toBe(false);
    wrapper.find(".pi-accordion__item-header button").trigger("click");
    expect(wrapper.find(".pi-accordion__item-container").isVisible()).toBe(true);
  })

})