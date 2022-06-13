<template>
  <ul aria-labelledby="tree_label" class="bpa-tree" role="tree">
    <BpaTreeNode
      :id="item.id || key.toString()"
      :ref="'childNode' + key"
      v-for="(item, key) in data"
      :key="key"
      v-bind="item"
      v-on="$listeners"
      @onKeyup="onKeyup"
    />
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import BpaTreeNode from "./BpaTreeNode.vue";
export default Vue.extend({
  name: "BpaTree",
  components: {
    BpaTreeNode,
  },
  props: {
    data: {
      type: Array,
    },
    label: String,
    "show-checkbox": {
      type: Boolean,
      default: false,
    },
    "default-expand-all": {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      showCheckbox: (this as any).showCheckbox as any,
    };
  },
  data() {
    return {
      currentTabindex: 0,
      treeNodes: [],
    };
  },
  computed: {
    firstChars() {
      return (this as any).treeNodes.map((x: any) => x.label.toLowerCase());
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if ((this as any).defaultExpandAll) {
        this.expandAll();
      }
      this.setTabIndex();

      var nodes = [] as any;
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          const node = (this.$refs[key] as any)[0].findAllNode();
          nodes = nodes.concat(node);
        }
      }

      this.treeNodes = nodes;
    },
    getCheckedNodes() {
      var nodes: any[] = [];
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          nodes = nodes.concat((this.$refs[key] as any)[0].findCheckedNode());
        }
      }
      return nodes;
    },
    getCheckedKeys() {
      var nodes: { id: number; lable: string }[] = [];
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          nodes = nodes.concat((this.$refs[key] as any)[0].findCheckedKeys());
        }
      }
      return nodes;
    },
    setCheckedNodes(nodes: { id: number; label: string }[]) {
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          (this.$refs[key] as any)[0].setByNodeId(nodes);
        }
      }
    },
    setCheckedKeys(keys: number[]) {
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          (this.$refs[key] as any)[0].setByKey(keys);
        }
      }
    },
    resetChecked() {
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          (this.$refs[key] as any)[0].setChecked(false);
        }
      }
    },
    expandAll() {
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          (this.$refs[key] as any)[0].expandAll();
        }
      }
    },
    setTabIndex() {
      (this as any).$refs[`childNode${this.currentTabindex}`][0].tabindex = 0;
    },
    onKeyup({ key, code, _this }: { key: string; code: string; _this: any }) {
      if (code) {
        (this as any)[code](_this);
      }
      if (key) {
        if (this.isPrintableCharacter(key)) {
          this.printableCharacter(key, _this);
        }
      }
    },
    prev(currentNode: any) {
      var prevNode = false;

      for (var i = 0; i < this.treeNodes.length; i++) {
        var treeNode = this.treeNodes[i] as any;
        if (treeNode === currentNode) {
          break;
        }
        if (treeNode.$el.offsetParent) {
          prevNode = treeNode;
        }
      }

      if (prevNode) {
        this.setFocusToNode(prevNode);
      }
    },
    next(currentNode: any) {
      var nextNode = false;

      for (var i = this.treeNodes.length - 1; i >= 0; i--) {
        var treeNode = this.treeNodes[i] as any;
        if (treeNode === currentNode) {
          break;
        }
        if (treeNode.$el.offsetParent) {
          nextNode = treeNode;
        }
      }

      if (nextNode) {
        this.setFocusToNode(nextNode);
      }
    },
    left(currentNode: any) {
      if (currentNode.children.length && currentNode.expanded) {
        currentNode.expanded = false;
      } else {
        if (currentNode.$parent.$options.name === "BpaTreeNode") {
          this.setFocusToParentNode(currentNode);
        }
      }
    },
    right(currentNode: any) {
      if (currentNode.children.length) {
        if (currentNode.expanded) {
          this.next(currentNode);
        } else {
          currentNode.expanded = true;
        }
      }
    },
    home() {
      this.setFocusToFirstNode();
    },
    end() {
      this.setFocusToLastNode();
    },
    setFocusToNode(treeNode: any) {
      for (var i = 0; i < this.treeNodes.length; i++) {
        var ti = this.treeNodes[i] as any;

        if (ti === treeNode) {
          ti.$el.children[0].tabIndex = 0;
          ti.$el.children[0].focus();
        } else {
          ti.$el.children[0].tabIndex = -1;
        }
      }
    },
    setFocusToParentNode(currentNode: any) {
      if (currentNode.$parent.children.length) {
        this.setFocusToNode(currentNode.$parent);
      }
    },
    printableCharacter(char: string, node: any) {
      if (char == "*") {
        this.expandAllSiblingNodes(node);
      } else {
        if (this.isPrintableCharacter(char)) {
          this.setFocusByFirstCharacter(node, char);
        }
      }
    },
    isPrintableCharacter(str: string) {
      return str.length === 1 && str.match(/\S/);
    },
    setFocusByFirstCharacter(currentNode: any, char: string) {
      var start = 0,
        index;

      char = char.toLowerCase();

      // Get start index for search based on position of currentNode
      start = (this.treeNodes as any).indexOf(currentNode) + 1;

      if (start === this.treeNodes.length) {
        start = 0;
      }

      // Check remaining slots in the menu
      index = this.getIndexFirstChars(start, char);

      // If not found in remaining slots, check from beginning
      if (index === -1) {
        index = this.getIndexFirstChars(0, char);
      }

      // If match was found...
      if (index > -1) {
        this.setFocusToNode(this.treeNodes[index]);
      }
    },
    getIndexFirstChars(startIndex: number, char: string) {
      for (var i = startIndex; i < this.firstChars.length; i++) {
        if ((this.treeNodes[i] as any).$el.offsetParent) {
          if (char === this.firstChars[i]) {
            return i;
          }
        }
      }
      return -1;
    },
    expandAllSiblingNodes(currentNode: any) {
      for (var i = 0; i < this.treeNodes.length; i++) {
        var ti = this.treeNodes[i] as any;

        if (ti.$parent === currentNode.$parent && ti.children) {
          ti.nodeExpand();
        }
      }
    },
    setFocusToFirstNode() {
      this.setFocusToNode(this.treeNodes[0]);
    },
    setFocusToLastNode() {
      this.setFocusToNode(this.treeNodes[this.treeNodes.length - 1]);
    },
  },
});
</script>
