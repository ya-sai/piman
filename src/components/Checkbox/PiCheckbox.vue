<template>
  <label
    :for=fixId
    :class="[
      'pi-checkbox-label',
      disabled ? 'pi-checkbox-label--disabled' : ''
    ]"
  >
    <input
      type="checkbox"
      :id="fixId"
      v-model="activeCheck"
      :disabled="disabled"
      :value="value"

      class="pi-checkbox-input"
      v-bind="$attrs"
      @change="onEvent('change')"
      @blur="onEvent('blur')"
    />
    <div class="pi-checkbox__inner">
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, onMounted, ref } from 'vue';
import { generateId } from '@/utils/generateId';

const props = defineProps({
  id: String,
  disabled: Boolean,
  value: {
    type: [String, Number],
    default: ''
  },
  modelValue: {
    type: Array,
    default: ()=>([])
  }
})

const emit = defineEmits([ 'input', 'blur', 'change', 'update:modelValue' ])

const fixId = ref('')

const activeCheck = computed({
  get(){
    return props.modelValue.includes(props.value)
  },
  set(checked){
    let result = props.modelValue

    if(checked && !result.includes(props.value)) result.push(props.value)
    else if(!checked) result = result.filter(r => r !== props.value)

    return emit('update:modelValue', result)
  }
})

const formItem = computed(()=>{
  const self = getCurrentInstance()
  if(!self) return null
  let parent = self.parent;
  if(!parent) return null
  let parentName = parent.type.__name;

  while (parentName !== 'PiFormItem') {
    parent = parent.parent;
    if(!parent) return null
    parentName = parent.type.__name;
  }
  return parent;
})

const onEvent = (event: 'blur' | 'change') => {
  emit(event)
  nextTick(()=>{
    if(formItem.value) formItem.value.emit(event)
  })
}

onMounted(()=>{
  fixId.value = props.id ? `pi-checkbox-${props.id}` : `pi-checkbox-${generateId()}`
})
</script>

<style lang="scss" scoped>
</style>