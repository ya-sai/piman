import { mount } from "@vue/test-utils";
import TreeNode from "@/components/BpaTree/src/BpaTreeNode.vue";

describe("TreeNode component", () => {
  it("should emit `node-click, data, component` when label on click", async () => {
    const wrapper = mount(TreeNode, {
      propsData: {
        id: 1,
        label: "A",
      },
      provide: () => ({
        showCheckbox: true,
      }),
    });

    const nodeContent = wrapper.find(".bpa-tree-node__inner");
    await nodeContent.trigger("click");

    expect(wrapper.emitted()["node-click"]).toBeTruthy();

    expect(wrapper.emitted()["node-click"][0].length).toBe(2);

    expect(wrapper.emitted()["node-click"][0][0]).toEqual({
      expanded: false,
      isChecked: false,
      indeterminate: false,
      id: 1,
      label: "A",
      children: [],
      disabled: false,
      isFocus: false,
      isHover: false,
      tabindex: -1,
    });
  });

  it("should emit `node-expand,data, component` when label on click and children is exist", async () => {
    const wrapper = mount(TreeNode, {
      propsData: {
        id: 1,
        label: "A",
        children: [
          {
            id: 2,
            label: "B",
          },
        ],
      },
      provide: () => ({
        showCheckbox: true,
      }),
    });

    const nodeContent = wrapper.find(".bpa-tree-node__inner");
    await nodeContent.trigger("click");

    expect(wrapper.emitted()["node-expand"]).toBeTruthy();

    expect(wrapper.emitted()["node-expand"][0].length).toBe(2);

    expect(wrapper.emitted()["node-expand"][0][0]).toEqual({
      expanded: true,
      isChecked: false,
      indeterminate: false,
      id: 1,
      label: "A",
      disabled: false,
      isFocus: false,
      isHover: false,
      tabindex: -1,
      children: [
        {
          id: 2,
          label: "B",
        },
      ],
    });
  });

  it("focus / focusout 事件會在元素上 新增/移除 class 'focus'", async () => {
    const wrapper = mount(TreeNode, {
      propsData: {
        id: 1,
        label: "A",
      },
      provide: () => ({
        showCheckbox: true,
      }),
    });

    const target = wrapper.find(".bpa-tree-node__inner");
    await target.trigger("focus");
    expect(target.classes("focus")).toBe(true);

    await target.trigger("focusout");
    expect(target.classes("focus")).toBe(false);
  });

  it("mouseenter/ mouseleave 事件會在元素上 新增/移除 class 'hover'", async () => {
    const wrapper = mount(TreeNode, {
      propsData: {
        id: 1,
        label: "A",
      },
      provide: () => ({
        showCheckbox: true,
      }),
    });

    const target = wrapper.find(".bpa-tree-node__inner");
    await target.trigger("mouseenter");
    expect(target.classes("hover")).toBe(true);

    await target.trigger("mouseleave");
    expect(target.classes("hover")).toBe(false);
  });
});
