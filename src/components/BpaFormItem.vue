<template>
  <div class="bpa-form__item">
    <label
      class="bpa-form__item-label"
      :for="labelFor"
    >
      <span>{{ label }}</span>
      <span
        v-if="required"
        class="bpa-form__item-label-required-hint"
      >({{ t('form.required') }})</span>
    </label>
    <div class="bpa-form__item-value">
      <div
        :class="[
          'bpa-form__item-value-container',
          innerError ? 'bpa-form__item-value-container--danger' : ''
        ]"
      >
        <slot :error="innerError"></slot>
      </div>
      <div
        v-if="innerHint"
        :class="[
          'bpa-form__item-hint',
          innerError ? 'bpa-form__item-hint--danger' : ''
        ]"
      >
        <span
          :role="innerError ? 'alert' : ''"
          aria-live="assertive"
          :aria-atomic="innerError  ? true : false"
        >⚠ {{ innerHint }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Validator, { ErrorList, RuleItem, Rules, ValidateSource } from 'async-validator';
import BpaI18n from '@/locale';
import { findAllFocus } from '@/utils/trapFocus';

export default Vue.extend({
  name: 'BpaFormItem',
  mixins: [ BpaI18n ],
  props: {
    label: {
      type: String,
      required: true,
    },
    labelFor: String,
    required: Boolean,
    error: Boolean,
    hint: String,
    prop: String,
    rules: [Object, Array],
    model: [Object, Array, Boolean, String, Number]
  },
  data(){
    return{
      innerError: false,
      innerHint:"",
      value: "",
    }
  },
  methods:{
    validate(trigger?: 'blur'|'change'){
      let ruleItems = this.getFilteredRule(trigger)

      const rule: Rules = {}
      rule[this.prop] = ruleItems

      let validator = new Validator(rule)

      const model: ValidateSource = {}
      if(this.form){
        model[this.prop] = this.form.model[this.prop] || this.model
      }

      return new Promise((resolve)=>{
        if(ruleItems.length === 0) return resolve(true)

        validator.validate(model, { firstFields: true, suppressWarning: true }, (error: ErrorList)=>{
          this.innerError = !!error
          this.innerHint = error? error[0].message : '';
          this.$emit('validate', { valid:!error, message: this.innerHint, prop: this.prop })
          
          if(error === null) resolve({valid: true, error})
          else resolve({valid: false, error})
        })
      })
    },
    getRules(): Array<RuleItem & {trigger?: string}> {
      let allRules: Array<RuleItem & {trigger?: string}> = [];
      const prop = this.prop;
      let formRules = this.form ? this.form.rules : {};
      allRules = formRules && formRules[prop] ? formRules[prop] : [];

      const selfRules = this.rules;
      if(selfRules) allRules = allRules.concat(selfRules)

      if(this.required !== undefined && allRules.find(r=>r.required === this.required) === undefined){
        allRules = allRules.concat([{ required: !!this.required }])
      }
      return allRules
    },
    getFilteredRule(trigger?: 'blur'|'change') {
      const rules = this.getRules();

      return rules.filter(rule => {
        if (!trigger) return true;
        if (!rule.trigger) return false;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1;
        } else {
          return rule.trigger === trigger;
        }
      }).map(rule => Object.assign({}, rule));
    },
    triggerFocus(){
      let list = findAllFocus(this.$el.childNodes)
      if(list.length > 0) list[0].focus()
    }
  },
  computed:{
    form() {
      let parent = this.$parent;
      if(!parent) return null
      let parentName = parent.$options.name;
      while (parentName !== 'BpaForm') {
        parent = parent.$parent;
        if(!parent) return null
        parentName = parent.$options.name;
      }
      return parent as Vue & {rules: {[key: string]: RuleItem[]}, model: {[key: string]: unknown}};
    },
  },
  mounted(){
    this.innerError = this.error
    this.innerHint = this.hint

    this.$parent.$emit('mountFormItem', this)

    this.$on('blur',()=>{
      this.validate('blur').catch(()=>{ /*不作為*/ })
    })
    this.$on('change',()=>{
      this.validate('change').catch(()=>{ /*不作為*/ })
    })
  },
  watch: {
    error(val){
      this.innerError = val
    },
    hint(val){
      this.innerHint = val
    }
  }
})
</script>