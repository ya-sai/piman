<template>
  <div
    class="bpa-tabs"
  >
    <ul
      role="tablist"
      class="bpa-tabs-list"
    >
      <li
        role="presentation"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'bpa-tabs__item',
          tab.name === value ? 'bpa-tabs__item--selected' : ''
        ]"
      >
        <button
          role="tab"
          :aria-setsize="tabs.length"
          :id="`tab-${toKebabCase(tab.name)}`"
          :aria-posinset="`${index + 1}`"
          :tabindex="tab.name === value ? '0' : '-1'"
          :aria-controls="`tab-panel-${toKebabCase(tab.name)}`"
          :aria-selected="tab.name === value ? true : false"
          :class="[
            'bpa-btn',
            tab.name === value ? 'bpa-btn--primary' : ''
          ]"
          @click="handleClickTab(tab.name, index)"
          @keydown="handleKeyboardEvent($event)"
        >
          <span v-if="tab.prefixIcon" class="tab-icon"><i :class="tab.prefixIcon"></i></span>
          <span>{{ tab.label }}</span>
          <span v-if="tab.affixIcon" class="tab-icon"><i :class="tab.affixIcon"></i></span>
          <span v-if="tab.badge" class="badge">{{ tab.badge }}</span>
        </button>
      </li>
    </ul>
    <div class="bpa-tabs-panels">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BpaTabs",
  props: ["value"],
  
  data() {
    return {
      tabs: [],
      currentIndex: 0,
    };
  },
  methods: {
    handleClickTab(name: string, index:number) {
      this.$emit("input", name);
      this.currentIndex = index;
    },

    handleKeyboardEvent(e:any) {
      if(e.key == 'ArrowLeft'   || e.keyCode == 37) { this.handleClickPrevTab() }
      if(e.key == 'ArrowUp'     || e.keyCode == 38) { this.handleClickPrevTab() }
      if(e.key == 'ArrowRight'  || e.keyCode == 39) { this.handleClickNextTab() }
      if(e.key == 'ArrowDown'   || e.keyCode == 40) { this.handleClickNextTab() }
    },

    handleClickPrevTab() {
      this.currentIndex -= 1;
      if (this.currentIndex === -1) {
        this.currentIndex = this.tabs.length - 1;
      }
      (document as any)
        .getElementById(
          "tab-" + this.toKebabCase(this.tabs[this.currentIndex]["name"])
        )
        .focus();
      this.$emit("input", this.tabs[this.currentIndex]["name"]);
    },

    handleClickNextTab() {
      this.currentIndex += 1;
      if (this.currentIndex === this.tabs.length) {
        this.currentIndex = 0;
      }
      (document as any)
        .getElementById(
          "tab-" + this.toKebabCase(this.tabs[this.currentIndex]["name"])
        )
        .focus();
      this.$emit("input", this.tabs[this.currentIndex]["name"]);
    },

    toKebabCase(value:string) {
      value = value.toLowerCase();
      value = value.replace(/^\s+/g, "");
      value = value.replace(/\s+$/g, "");
      return value.replace(/\s+/, "-");
    },
  },
  created() {
    this.tabs = (this as any).$children;
  },
});
</script>
