<template>
  <li
    role="treeitem"
    class="bpa-tree-node"
    :aria-expanded="children.length ? expanded ? true : false : false"
  >
    <template>
      <div
        v-if="label"
        :class="[
          'bpa-tree-node__inner',
          isFocus ? 'focus' : '',
          isHover ? 'hover' : '',
        ]"
        :tabindex="tabindex"
        @click.stop="nodeExpand"
        @focus="onFocus"
        @focusout="onFocusOut"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
        @keydown="onKeyup"
        @keydown.prevent.down="onKeyup"
        @keydown.prevent.up="onKeyup"
        @keydown.prevent.space="nodeChecked()"
      >
        <span v-if="children.length" class="has-children-icon"></span>
        <label
          :for="'bpa-tree-node-checkbox-' + fixId"
          :class="[
            'bpa-checkbox-label',
            disabled ? ' bpa-checkbox-label--disabled' : ''
          ]"
        >
          <input
            v-if="showCheckbox"
            :id="'bpa-tree-node-checkbox-' + fixId"
            ref="checkbox"
            type="checkbox"
            class="bpa-checkbox-input"
            :disabled="disabled"
            :checked="isChecked"
            :indeterminate.prop="indeterminate"
            tabindex="-1"
            @change="nodeChecked(isChecked)"
            @click.stop
          />
          <div
            :class="
              showCheckbox
                ? indeterminate
                  ? 'bpa-checkbox__inner bpa-checkbox-input--indeterminate'
                  : 'bpa-checkbox__inner'
                : 'bpa-checkbox__inner--hide'
            "
          >
            {{ label }}
          </div>
        </label>
      </div>
      <ul
        v-if="children.length"
        role="group"
        :class="[
          expanded ? 'show' : 'hide'
        ]"
      >
        <BpaTreeNode
          :id="item.id || key.toString()"
          :ref="'childNode' + key"
          v-bind="item"
          v-on="$listeners"
          v-for="(item, key) in children"
          :key="key"
          @parentNodeMayNeedChecked="parentNodeMayNeedChecked"
        >
        </BpaTreeNode>
      </ul>
    </template>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import { generateId } from '@/utils/generateId';
export default Vue.extend({
  name: "BpaTreeNode",
  props: {
    id: {},
    label: {
      type: [String, Number],
    },
    children: {
      type: Array,
      default() {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  inject: ["showCheckbox"],
  computed: {
    caretDirection() {
      return (this as any).expanded ? "down" : "right";
    },
    isParentsNode() {
      return this.$parent.$options.name === "BpaTreeNode" ? 1 : 0;
    },
  },
  data() {
    return {
      expanded: false,
      isChecked: false,
      indeterminate: false,
      isHover: false,
      isFocus: false,
      tabindex: -1,
      fixId: '',
    };
  },
  methods: {
    nodeExpand() {
      this.$emit("node-click", { ...this.$data, ...this.$props }, this);

      if (this.children.length > 0) {
        this.expanded = !this.expanded;
        this.$emit("node-expand", { ...this.$data, ...this.$props }, this);
      }
    },
    expandAll() {
      this.expanded = true;
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          (this.$refs[key] as any)[0].expandAll();
        }
      }
    },
    nodeChecked() {
      this.$emit("node-check", { ...this.$data, ...this.$props }, this);
      if(this.disabled == false) {
        this.isChecked = !this.isChecked;
        this.indeterminate = false;
        if (this.isParentsNode) {
          this.$emit("parentNodeMayNeedChecked", this.isChecked);
        }
        this.setChildChecked(this.isChecked);
      }
    },
    setChildChecked(val: boolean) {
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          (this.$refs[key] as any)[0].setChecked(val);
        }
      }
    },
    setChecked(val: boolean) {
      this.isChecked = val;
      this.indeterminate = false;
      this.setChildChecked(val);
    },
    async parentNodeMayNeedChecked(val: boolean) {
      this.checkThisNodeIsIndeterminate();
      await this.$nextTick();
      this.$emit("parentNodeMayNeedChecked", val);
    },
    checkThisNodeIsIndeterminate() {
      var nodeCheckeds = [];
      var nodeindeterminate = [];

      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          const { isChecked, indeterminate } = (this.$refs[key] as any)[0];
          nodeCheckeds.push(isChecked);
          nodeindeterminate.push(indeterminate);
        }
      }

      if (nodeCheckeds.every((x) => x === false)) {
        this.indeterminate = false;
        this.isChecked = false;
      }
      if (
        nodeCheckeds.some((x) => x === true) ||
        nodeindeterminate.some((x) => x === true)
      ) {
        this.indeterminate = true;
        this.isChecked = false;
      }
      if (nodeCheckeds.every((x) => x === true)) {
        this.indeterminate = false;
        this.isChecked = true;
      }

      if (nodeindeterminate.every((x) => x === true)) {
        this.indeterminate = true;
      }
    },
    findCheckedNode() {
      const node = {
        id: this.id,
        label: this.label,
      };

      if (this.children.length === 0) {
        return this.isChecked ? [node] : [];
      } else {
        var nodes: { id: number; label: string }[] = [];
        for (const key in this.$refs) {
          if (key.includes("childNode")) {
            nodes = nodes.concat((this.$refs[key] as any)[0].findCheckedNode());
          }
        }
        return this.isChecked ? [node, ...nodes] : [...nodes];
      }
    },
    findCheckedKeys() {
      const id = this.id;

      if (this.children.length === 0) {
        return this.isChecked ? [id] : [];
      } else {
        var ids: number[] = [];
        for (const key in this.$refs) {
          if (key.includes("childNode")) {
            ids = ids.concat((this.$refs[key] as any)[0].findCheckedKeys());
          }
        }
        return this.isChecked ? [id, ...ids] : [...ids];
      }
    },
    setByNodeId(nodes: { id: number; lable: string }[]) {
      if (nodes.find((x) => x.id === this.id)) {
        this.nodeChecked();
      }
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          (this.$refs[key] as any)[0].setByNodeId(nodes);
        }
      }
    },
    setByKey(keys: number[]) {
      if (keys.find((key: number) => key === this.id)) {
        this.nodeChecked();
      }
      for (const key in this.$refs) {
        if (key.includes("childNode")) {
          (this.$refs[key] as any)[0].setByKey(keys);
        }
      }
    },
    findAllNode() {
      const node = this;

      if (this.children.length === 0) {
        return [node];
      } else {
        var nodes: { id: number; label: string }[] = [];
        for (const key in this.$refs) {
          if (key.includes("childNode")) {
            nodes = nodes.concat((this.$refs[key] as any)[0].findAllNode());
          }
        }

        return [node, ...nodes];
      }
    },
    mouseenter() {
      this.isHover = true;
    },
    mouseleave() {
      this.isHover = false;
    },
    onFocus() {
      this.isFocus = true;
      this.tabindex = 0;
    },
    onFocusOut() {
      this.isFocus = false;
    },
    onKeyup({ key, keyCode }: { key: string; keyCode: number }) {
      if(key == 'Enter'       || keyCode == 108 ) { this.nodeExpand(); }
      if(key == 'ArrowLeft'   || keyCode == 37  ) { this.$emit("onKeyup", {code: 'left',_this: this,}); }
      if(key == 'ArrowUp'     || keyCode == 38  ) { this.$emit("onKeyup", {code: 'prev',_this: this,}); }
      if(key == 'ArrowRight'  || keyCode == 39  ) { this.$emit("onKeyup", {code: 'right',_this: this,}); }
      if(key == 'ArrowDown'   || keyCode == 40  ) { this.$emit("onKeyup", {code: 'next',_this: this,}); }
      if(key == 'Home'        || keyCode == 36  ) { this.$emit("onKeyup", {code: 'home',_this: this,}); }
      if(key == 'End'         || keyCode == 35  ) { this.$emit("onKeyup", {code: 'end',_this: this,}); }
    },
  },
  mounted(){
    (this as any).fixId = generateId()
  },
});
</script>
