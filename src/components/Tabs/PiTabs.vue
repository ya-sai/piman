<template>
  <div
    class="pi-tabs"
  >
    <ul
      role="tablist"
      class="pi-tabs-list"
    >
      <li
        role="presentation"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'pi-tabs__item',
          tab.name === modelValue ? 'pi-tabs__item--selected' : ''
        ]"
      >
        <button
          role="tab"
          :aria-setsize="tabs.length"
          :id="`tab-${toKebabCase(tab.name)}`"
          :aria-posinset="`${index + 1}`"
          :tabindex="tab.name === modelValue ? '0' : '-1'"
          :aria-controls="`tab-panel-${toKebabCase(tab.name)}`"
          :aria-selected="tab.name === modelValue ? true : false"
          :class="[
            'pi-btn',
            tab.name === modelValue ? 'pi-btn--primary' : ''
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
    <div class="pi-tabs-panels">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, ref } from 'vue';

const props = defineProps({
  modelValue: String
})

const emits = defineEmits(["update:modelValue"])

const tabs = computed(()=>{
  const self = getCurrentInstance()
  if(!self || !self.slots.default) return []
  return self.slots.default().map( kid => kid.props || {} )
})
const currentIndex = ref(0)


const handleClickTab = (name: string, index:number) => {
  emits("update:modelValue", name);
  currentIndex.value = index;
}

const handleKeyboardEvent = (e:any) => {
  if(e.key == 'ArrowLeft'   || e.keyCode == 37) { handleClickPrevTab() }
  if(e.key == 'ArrowUp'     || e.keyCode == 38) { handleClickPrevTab() }
  if(e.key == 'ArrowRight'  || e.keyCode == 39) { handleClickNextTab() }
  if(e.key == 'ArrowDown'   || e.keyCode == 40) { handleClickNextTab() }
}

const handleClickPrevTab = () => {
  currentIndex.value -= 1;
  if (currentIndex.value === -1) {
    currentIndex.value = tabs.value.length - 1;
  }
  (document as any)
    .getElementById(
      "tab-" + toKebabCase(tabs.value[currentIndex.value]["name"])
    )
    .focus();
  emits("update:modelValue", tabs.value[currentIndex.value]["name"]);
}

const handleClickNextTab = () => {
  currentIndex.value += 1;
  if (currentIndex.value === tabs.value.length) {
    currentIndex.value = 0;
  }
  (document as any)
    .getElementById(
      "tab-" + toKebabCase(tabs.value[currentIndex.value]["name"])
    )
    .focus();
  emits("update:modelValue", tabs.value[currentIndex.value]["name"]);
}

const toKebabCase = (value:string) => {
  value = value.toLowerCase();
  value = value.replace(/^\s+/g, "");
  value = value.replace(/\s+$/g, "");
  return value.replace(/\s+/, "-");
}

</script>

<style lang="scss" scoped>
</style>