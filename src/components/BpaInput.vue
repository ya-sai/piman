<template>
  <div
    :class="[
      'bpa-input-box',
      disabled ? 'bpa-input-box--disabled' : '',
      readonly ? 'bpa-input-box--readonly' : '',
      focus ? 'bpa-input-box--focus' : '',
      error ? 'bpa-input-box--danger' : '',
      size ? `bpa-input-box--${size}` : ''
    ]"
  >
    <template v-if="type !== 'textarea'">
      <input
        v-bind="[$attrs, $props]"
        ref="refBpaInput"
        :id="id"
        :type="checkTypePassword ? (pwdVisible ? 'text' : 'password' ) : type"
        :placeholder="placeholder ? placeholder : t('input.placeholder')"
        :accesskey="accesskey"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        @keydown.stop.prevent.enter="handleKeyup"
        :class="[
          'bpa-input',
           size ? `bpa-input--${size}` : ''
        ]"
      />
      <div
        v-if="checkTypePassword"
        role="button"
        tabindex="0"
        :aria-pressed="pwdVisible"
        @click.stop="handlePwdVisible"
        @keydown.stop.prevent.enter="handlePwdVisible"
        @keydown.stop.prevent.space="handlePwdVisible"
        class="bpa-input-toggle-reveal-btn"
      >
        <span v-show="pwdVisible" :title="t('input.hide')">🗨<span class="visually-hidden">{{ t('input.hide') }}</span></span>
        <span v-show="!pwdVisible" :title="t('input.show')">👁‍🗨<span class="visually-hidden">{{ t('input.show') }}</span></span>
      </div>
      <div
        v-if="value && disabledClear == false && disabled  == false && readonly  == false"
        role="button"
        tabindex="0"
        @click.stop="handleClearInput"
        @keydown.stop.prevent.enter="handleClearInput"
        @keydown.stop.prevent.space="handleClearInput"
        class="bpa-input-clear-btn"
      >
        <span aria-hidden="true">✖</span>
        <span class="visually-hidden">{{ t('input.clear') }}</span>
      </div>
    </template>
    <textarea
      v-else
      v-bind="[$attrs, $props]"
      :id="id"
      :placeholder="placeholder ? placeholder : t('input.placeholder')"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @keydown.enter="handleKeyup"
      :class="[
        'bpa-input',
        size ? `bpa-input--${size}` : ''
      ]"
    ></textarea>
  </div>
</template>

<script lang="ts">
import BpaI18n from '@/locale'
import Vue, { VueConstructor } from 'vue'

interface ThisData {
  focus: boolean,
  pwdVisible: boolean,
  checkTypePassword: boolean,
  formItem: Vue,
}

export default (Vue as VueConstructor<Vue & ThisData>).extend({
  name: 'BpaInput',
  mixins: [ BpaI18n ],
  props: {
    value: [ String, Number ],
    id: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    required: Boolean,
    error: Boolean,
    disabledClear: {
      type: Boolean,
      default: false
    },
    size: String,
    accesskey: String
  },
  data() {
    return {
      pwdVisible: false,
      checkTypePassword: false,
      focus: false,
    }
  },
  methods: {
    handleFocus() {
      this.focus = true
    },
    handleBlur() {
      this.focus = false
      this.$parent.$emit('blur', (this as any).value)
    },
    handleInput(event: any) {
      this.$emit('input', event.target.value);
      this.$parent.$emit('change', event.target.value)
    },
    handleClearInput() {
      this.$emit('input', '');
      this.$emit('change', '');
      if(this.formItem) this.formItem.$emit('change')
      this.$emit('clear', '');
      let focusBpaInput: HTMLInputElement = this.$refs.refBpaInput as HTMLInputElement
      focusBpaInput.focus();
    },
    handlePwdVisible() {
      this.pwdVisible = !this.pwdVisible;
    },
    handleKeyup(event: any) {
      this.$emit('inputKeyup', event.target.value);
    },
  },
  mounted() {
    if((this as any).type == 'password') {
      (this as any).checkTypePassword = true
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
  }
})
</script>