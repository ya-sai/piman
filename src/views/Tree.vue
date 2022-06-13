<template>
  <div>
    <section>
      <h2>Tree</h2>
      <article>
        <section>
          <h3>基本</h3>
          <!-- <bpa-tree
            ref="bpatree"
            :data="treeData1"
          /> -->
        </section>
        <section>
          <h3>可選取</h3>
          <!-- <bpa-tree
            ref="bpatree"
            :data="treeData1"
            show-checkbox
          /> -->
        </section>
        <section>
          <h3>預設展開</h3>
          <bpa-tree
            ref="bpatree"
            :data="treeData1"
            show-checkbox
            default-expand-all
          />
        </section>
        <section>
          <h3>禁用</h3>
          <bpa-tree
            ref="bpatree"
            :data="treeData2"
            show-checkbox
            default-expand-all
          />
        </section>
        <section>
          <h3>樹節點的選擇</h3>
          <bpa-tree
            ref="bpatree"
            :data="treeData3"
            @node-check="nodeCheck"
            @node-click="nodeClick"
            show-checkbox
            default-expand-all
          />
          <bpa-button @click="getCheckedNodes">取得已選取的節點</bpa-button>
          <bpa-button @click="getCheckedKeys"
            >取得已選取的節點的 key(id)</bpa-button
          >
          <bpa-button @click="setCheckedNodes">通過 node 設置</bpa-button>
          <bpa-button @click="setCheckedKeys">通過 key(id) 設置</bpa-button>
          <bpa-button @click="resetChecked">清除</bpa-button>
        </section>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
interface NodeData {
  children: { id: number | string; lable: string }[];
  disabled: boolean;
  expanded: boolean;
  id: number;
  indeterminate: boolean;
  isChecked: boolean;
  label: string;
}
export default Vue.extend({
  data() {
    return {
      treeData1: [
        {
          id: 1,
          label: "A",
          children: [
            { id: 4, label: "D" },
            { id: 5, label: "E" },
          ],
        },
        {
          id: 2,
          label: "B",
          children: [
            { id: 6, label: "F" },
            {
              id: 7,
              label: "G",
              children: [
                { id: 8, label: "H" },
                { id: 9, label: "I" },
              ],
            },
          ],
        },
        {
          id: 3,
          label: "C",
        },
      ],
      treeData2: [
        {
          id: 1,
          disabled: true,
          label: "A",
        },
        {
          id: 2,
          label: "B",
        },
        {
          id: 3,
          label: "C",
        },
      ],
      treeData3: [
        {
          id: 1,
          label: "A",
          children: [
            { id: 4, label: "D" },
            { id: 5, label: "E" },
          ],
        },
        {
          id: 2,
          label: "B",
          children: [
            { id: 6, label: "F" },
            {
              id: 7,
              label: "G",
              children: [
                { id: 8, label: "H" },
                { id: 9, label: "I" },
              ],
            },
          ],
        },
        {
          id: 3,
          label: "C",
        },
      ],
    };
  },
  methods: {
    getCheckedNodes() {
      const bptree = this.$refs["bpatree"] as any;
      const nodes = bptree.getCheckedNodes();
      console.log(nodes);
    },

    getCheckedKeys() {
      const bptree = this.$refs["bpatree"] as any;
      const keys = bptree.getCheckedKeys();
      console.log(keys);
    },
    setCheckedNodes() {
      const bptree = this.$refs["bpatree"] as any;
      bptree.setCheckedNodes([{ id: 3 }, { id: 4 }, { id: 7 }]);
    },
    setCheckedKeys() {
      const bptree = this.$refs["bpatree"] as any;
      bptree.setCheckedKeys([1]);
    },
    resetChecked() {
      (this.$refs["bpatree"] as Vue & {
        resetChecked: () => void;
      }).resetChecked();
    },
    nodeCheck(data: NodeData, component: any) {
      console.log(data);
      console.log(component);
    },
    nodeClick(data: NodeData, component: any) {
      console.log(data);
      console.log(component);
    },
  },
});
</script>
