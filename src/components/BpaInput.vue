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
        <span v-show="pwdVisible" :title="t('input.hide')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <title>{{ t('input.hide') }}</title>
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z"/>
          </svg>
          <span class="visually-hidden">{{ t('input.hide') }}</span>
        </span>
        <span v-show="!pwdVisible" :title="t('input.show')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <title>{{ t('input.show') }}</title>
            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/>
          </svg>
          <span class="visually-hidden">{{ t('input.show') }}</span>
        </span>
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