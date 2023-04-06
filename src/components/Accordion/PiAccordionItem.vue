<template>
  <div
    :class="[
      'pi-accordion__item',
      accordionContainerOpen ? 'pi-accordion__item--open' : ''
    ]"
  >
    <div class="pi-accordion__item-header">
      <button
        type="button"
        :aria-controls="`accordion-content-${fixId}`"
        :id="`accordion-title-${fixId}`"
        :aria-expanded="`${accordionContainerOpen}`"
        @click="handleClickAccordion"
      >
        <slot name="title">{{ title ? title : t('accordion.title') }}</slot>
      </button>
    </div>
    <div
      role="region"
      :id="`accordion-content-${fixId}`"
      :aria-labelledby="`accordion-title-${fixId}`"
      :aria-hidden="`${!accordionContainerOpen}`"
      class="pi-accordion__item-container"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { generateId } from '@/utils/generateId';
import { onMounted, ref } from 'vue';
import useI18n from "@/locales/useI18n";

const props = defineProps({
  id: String,
  title: {
    type: String,
  },
  open: {
    type: Boolean,
    default: false
  }
})

const { t } = useI18n()

const fixId = ref('')
const accordionContainerOpen = ref(false)
const handleClickAccordion = () => {
  accordionContainerOpen.value = !accordionContainerOpen.value;
}

onMounted(()=>{
  if(props.open == true) {
    accordionContainerOpen.value = true
  }
  if(props.id){
    fixId.value = props.id
  }
  else {
    fixId.value = String(generateId())
  }
})


</script>

<style lang="scss" scoped>
</style>