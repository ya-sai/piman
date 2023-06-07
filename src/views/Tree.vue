<template>
  <div class="page">
    <div class="page-header">
      <bpa-button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <title>選單 Menu</title>
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </bpa-button>
      <bpa-breadcrumb :key="$route.path">
        <bpa-breadcrumb-item
          v-for="(pathItem, pathIndex) in path"
          :key="`pathIndex-${pathIndex}`"
          :title="`前往${pathItem.title}`"
          :to="pathItem.url"
        > {{ pathItem.title }}</bpa-breadcrumb-item>
      </bpa-breadcrumb>
    </div>
    <div class="page-main">
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
    </div>
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
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Tree',
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
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
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
