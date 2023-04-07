<template>
  <div
    :id=fixId
    class="bpa-dropdown"
  >
    <bpa-button
      type="button"
      :id="`${fixId}-btn`"
      :theme="theme"
      aria-haspopup="listbox"
      :aria-expanded="listboxOpen ? 'true' : 'false'"
      :aria-controls="`${fixId}-listbox`"
      :disabled="disabled"
      :size="size"
      @click="handleClickSelect"
      :class="[
        'bpa-dropdown-btn',
        listboxOpen ? 'bpa-dropdown-btn--open' : '',
      ]"
    >
      <slot name="prefix"></slot>
      <span class="bpa-dropdown-text" :id="`${fixId}-label-text`">
        <span v-if="placeholder">{{ placeholder }}</span>
        <span v-else>{{ t('dropdown.placeholder') }}</span>
        <span class="visually-hidden">{{ t('dropdown.hint') }}</span>
      </span>
      <slot name="affix"></slot>
    </bpa-button>
    <ul
      :id="`${fixId}-listbox`"
      role="listbox"
      ref="refBpaDropList"
      tabindex="-1"
      :aria-labelledby="`${fixId}-label-text`"
      :class="[
        'bpa-dropdown-popup',
        listboxOpen ? 'bpa-dropdown-popup--open' : '',
        listboxClass ? listboxClass : ''
      ]"
    >
      <template v-for="(item, index) in options">
        <li
          :id="`${fixId}-option-${index}`"
          role="option"
          :tabindex="(item.type != 'link' && item.type != 'external-link' )? '0' : '-1'"
          :key="index"
          @click.capture="handleClickOption(item, index, item.type)"
          @keyup.capture.prevent.enter="handleClickOption(item, index, item.type)"
          @keydown.capture.prevent.space="onKeypress"
        >
          <router-link
            v-if="item.type=='link'"
            :to="item.url"
            :title="`${t('dropdown.goto')} ${ item.label }`"
            v-html="item.label"
          ></router-link>

          <a
            v-else-if="item.type=='external-link'"
            :href="item.url"
            :title="`${t('dropdown.new_tab')} ${ item.label }`"
            target="_blank"
            rel="noopener noreferrer"
            v-html="item.label"
          ></a>
          <span v-html="item.label" v-else></span>
        </li>
      </template>
    </ul>
  </div>

</template>

<script lang="ts" setup>
import useClickOutside from "@/composables/useClickOutside";
import { ref } from "vue";

const props = defineProps({
  theme: String,
  disabled: Boolean,
  id: String,
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
  },
  fixed: String,
  optionWidth: String,
  size: String,
  listboxClass: String,
})
const emits = defineEmits(['click'])
useClickOutside(() )

const listboxOpen = ref(false)
const trap = ref(null)
const fixId = ref('')
</script>

<style lang="scss" scoped>
</style>