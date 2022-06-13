<template>
  <form
    class="bpa-form"
    ref="refBpaForm"
    @submit="onSubmit"
  >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import Validator from 'async-validator';

export default Vue.extend({
  name: 'BpaForm',
  provide() {
    return {
      bpaForm: this
    };
  },
  props: {
    model: Object,
    rules: Object,
    autofocus: { type: Boolean, default: true}
  },
  data(){
    return{
      validator: null,
      formItems: []
    }
  },
  methods:{
    async validate(){
      let errors: { message: string; field: string }[] = [];
      let hasFocus = false;

      for (let i = 0; i < (this as any).formItems.length; i++) {
        const item = (this as any).formItems[i];
        await item.validate().then((rsp: { valid: boolean, error: null|Array<{ message: string, field: string }>})=>{
          if(rsp.valid === false) {
            const error = rsp.error as Array<{ message: string, field: string }>
            errors = errors.concat(error)

            item.innerError = true
            item.innerHint = (error)[0].message

            if(!hasFocus && this.autofocus){ 
              item.triggerFocus()
              hasFocus = true
            }
          } else {
            item.innerError = false
            item.innerHint = ""
          }
        })
      }
      
      return new Promise((resolve) => {
        if(errors.length > 0) resolve({ valid: false, error: errors })
        else resolve({ valid: true, error: null })
      })
    },
    onSubmit(evt: Event){
      evt.preventDefault()
      this.$emit('submit', evt)
    }
  },
  mounted(){
    const rule = this.rules || {};
    (this as any).validator = new Validator(rule)
  },
  beforeCreate(){
    this.$on('mountFormItem',(item: any)=>{
      (this as any).formItems.push(item)

    })
  }
})
</script>