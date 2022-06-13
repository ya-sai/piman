<template>
  <div class="bpa-switch">
    <button
      type="button"
      role="switch"
      :aria-checked="`${value}`"
      :id="`bpa-switch-${fixId}`"
      @click="onSwitch"
      @blur="onEvent('blur')"
    >
      <div class="bpa-switch-text bpa-switch-text--close">
        <slot name="close-text">{{ t('switch.off') }}</slot>
      </div>
      <div class="bpa-switch-text bpa-switch-text--open">
        <slot name="open-text">{{ t('switch.on') }}</slot>
      </div>
    </button>
    <label
      :for="`bpa-switch-${fixId}`"
      class="visually-hidden"
    >
      {{ labelText }}
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { generateId } from '@/utils/generateId';
import BpaI18n from '@/locale';
export default Vue.extend({
  name: 'BpaSwitch',
  mixins:[ BpaI18n ],
  props: {
    id: String,
    labelText: {
      type: String,
      required: true,
    },
    value: Boolean,
  },
  data() {
    return {
      fixId: '',
      switchOpen: false
    }
  },
  computed:{
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
  methods:{
    onEvent(event: 'blur' | 'change'){
      this.$nextTick(()=>{
        if(this.formItem) this.formItem.$emit(event)
      })
    },
    onSwitch(){
      this.$emit('input', !this.value)
      this.$emit('change', !this.value)
      this.onEvent('change')
    }
  },
  mounted(){
    if(this.id){
      (this as any).fixId = this.id
    }
    else {
      (this as any).fixId = generateId()
    }
  }
})
</script>