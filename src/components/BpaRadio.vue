<template>
  <label
    :for="fixId"
    :class="[
      'bpa-radio-label',
      disabled ? 'bpa-radio-label--disabled' : ''
    ]"
  >
    <input
      type="radio"
      :id="fixId"
      v-model="activeValue"
      :value="value"
      :name="name"
      :disabled="disabled"
      class="bpa-radio-input"
      @blur="onEvent('blur')"
      @change="onEvent('change')"
    />
    <div class="bpa-radio__inner"><slot></slot></div>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import { generateId } from '@/utils/generateId';
export default Vue.extend({
  name: 'BpaRadio',
  model: {
    prop: 'model',
    event: 'input'
  },
  props: {
    id: String,
    disabled: Boolean,
    value: String,
    model: String,
    name: String
  },
  computed:{
    activeValue:{
      get(){ return this.model },
      set(){ return this.$emit('input', this.value)}
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
  data() {
    return {
      fixId: '',
    }
  },
  methods:{
    onEvent(event: 'blur' | 'change'){
      this.$nextTick(()=>{
        if(this.formItem) this.formItem.$emit(event)
      })
    }
  },
  mounted(){
    if(this.id){
      (this as any).fixId = 'bpa-radio-' + this.id
    }
    else {
      (this as any).fixId = 'bpa-radio-' + generateId()
    }
  }
})
</script>