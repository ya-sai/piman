<template>
  <div
    :class="[
      'bpa-accordion__item',
      accordionContainerOpen ? 'bpa-accordion__item--open' : ''
    ]"
  >
    <div class="bpa-accordion__item-header">
      <button
        type="button"
        :aria-controls="`accordion-content-${fixId}`"
        :id="`accordion-title-${fixId}`"
        aria-selected="false"
        :aria-expanded="`${accordionContainerOpen}`"
        @click="handleClickAccordion"
      >
        <div><slot name="title">{{ title ? title : t('accordion.title') }}</slot></div>
      </button>
    </div>
    <div
      role="region"
      :id="`accordion-content-${fixId}`"
      :aria-labelledby="`accordion-title-${fixId}`"
      :aria-hidden="`${!accordionContainerOpen}`"
      class="bpa-accordion__item-container"
    >
      <div><slot></slot></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BpaI18n from '@/locale';
import { generateId } from '@/utils/generateId';
export default Vue.extend({
  name: 'BpaAccordionItem',
  mixins:[ BpaI18n ],
  props: {
    id: String,
    title: String,
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      fixId: '',
      accordionContainerOpen: false,
    }
  },
  methods: {
    handleClickAccordion() {
      this.accordionContainerOpen = !this.accordionContainerOpen;
    }
  },
  mounted(){
    if(this.open == true) {
      this.accordionContainerOpen = true
    }
    if(this.id){
      (this as any).fixId = this.id
    }
    else {
      (this as any).fixId = generateId()
    }
  }
})
</script>