<template>
  <label
    :for=fixId
    :class="[
      'bpa-checkbox-label',
      disabled ? 'bpa-checkbox-label--disabled' : ''
    ]"
  >
    <input
      type="checkbox"
      :id=fixId
      v-model="activeCheck"
      :disabled="disabled"
      :value="value"
      class="bpa-checkbox-input"
      @change="onEvent('change')"
      @blur="onEvent('blur')"
    />
    <div class="bpa-checkbox__inner">
      <slot></slot>
    </div>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import { generateId } from '@/utils/generateId';
export default Vue.extend({
  name: 'BpaCheckbox',
  model: {
    prop: 'model',
    event: 'input'
  },
  props: {
    id: String,
    disabled: Boolean,
    value: String,
    model: Array,
  },
  data() {
    return {
      fixId: ''
    }
  },
  methods:{
    onEvent(event: 'blur' | 'change'){
      this.$nextTick(()=>{
        if(this.formItem) this.formItem.$emit(event)
      })
    }
  },
  computed:{
    activeCheck:{
      get(){
        return this.model.includes(this.value)
      },
      set(checked){
        let result = this.model

        if(checked && !result.includes(this.value)) result.push(this.value)
        else if(!checked) result = result.filter(r => r !== this.value)

        return this.$emit('input', result)
      }
    },
    formItem(){
      let parent = this.$parent;
      if(!parent) return null
      let parentName = parent.$options.name;

      while (parentName !== 'BpaFormItem') {
        parent = parent.$parent;
        if(!parent) return null
        parentName = parent.$options.name;
      }
      return parent;
    }
  },
  mounted(){
    if(this.id){
      (this as any).fixId = 'bpa-checkbox-' + this.id
    }
    else {
      (this as any).fixId = 'bpa-checkbox-' + generateId()
    }
  }
})
</script>