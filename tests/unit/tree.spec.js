import { mount } from "@vue/test-utils";
import Tree from "@/components/BpaTree/src/BpaTree.vue";

describe("Tree component", () => {
  it("should present the correct number of nodes and hierarchy", () => {
    const wrapper = mount(Tree, {
      propsData: {
        data: [
          {
            id: 1,
            label: "A",
          },
          {
            id: 2,
            label: "B",
            children: [
              {
                id: 3,
                label: "C",
                children: [
                  {
                    id: 4,
                    label: "E",
                  },
                ],
              },
            ],
          },
        ],
      },
    });

    const nodes = wrapper.findAll(".bpa-tree-node");
    expect(nodes.length).toBe(4);
  });

  it("should show checkbox in node when set prop `show-checkbox`", () => {
    const wrapper = mount(Tree, {
      propsData: {
        data: [
          {
            id: 1,
            label: "A",
          },
        ],
        "show-checkbox": true,
      },
    });

    const target = wrapper.find('input[type="checkbox"]');
    expect(target.attributes("id")).toBe("A");
  });

  it("should expand all node when set prop `default-expand-all`", async () => {
    const wrapper = mount(Tree, {
      propsData: {
        data: [
          {
            id: 1,
            label: "A",
            children: [
              {
                id: 2,
                label: "B",
              },
            ],
          },
        ],
        "default-expand-all": true,
      },
    });

    await wrapper.vm.$nextTick();
    const nodes = wrapper.findAll(".bpa-tree-node");

    expect(nodes.at(0).isVisible()).toBe(true);
    expect(nodes.at(1).isVisible()).toBe(true);
  });

  it("should prop `disabled` work", async () => {
    const wrapper = mount(Tree, {
      propsData: {
        data: [
          {
            id: 1,
            label: "A",
            disabled: true,
          },
          {
            id: 2,
            label: "B",
          },
        ],
        "show-checkbox": true,
      },
    });

    const nodes = wrapper.findAll('input[type="checkbox"]');
    expect(nodes.at(0).attributes("disabled")).toBe("disabled");
    expect(nodes.at(1).attributes("disabled")).toBeFalsy();
  });

  test("setCheckedNodes and getCheckedNodes should be work", async () => {
    const wrapper = mount(Tree, {
      propsData: {
        data: [
          {
            id: 1,
            label: "A",
          },
          {
            id: 2,
            label: "B",
          },
        ],
        "show-checkbox": true,
      },
    });

    await wrapper.vm.setCheckedNodes([{ id: 1 }]);
    const nodes = wrapper.vm.getCheckedNodes();
    expect(nodes).toEqual([
      {
        id: 1,
        label: "A",
      },
    ]);
  });

  test("setCheckedKeys and getCheckedKeys should be work", async () => {
    const wrapper = mount(Tree, {
      propsData: {
        data: [
          {
            id: 1,
            label: "A",
          },
          {
            id: 2,
            label: "B",
          },
        ],
        "show-checkbox": true,
      },
    });

    await wrapper.vm.setCheckedKeys([2]);
    const nodes = wrapper.vm.getCheckedKeys();
    expect(nodes).toEqual([2]);
  });

  test("resetChecked should be work", async () => {
    const wrapper = mount(Tree, {
      propsData: {
        data: [
          {
            id: 1,
            label: "A",
          },
          {
            id: 2,
            label: "B",
          },
        ],
        "show-checkbox": true,
      },
    });

    await wrapper.vm.setCheckedKeys([2]);
    await wrapper.vm.resetChecked();
    const nodes = wrapper.vm.getCheckedKeys();

    expect(nodes).toEqual([]);
  });
});
