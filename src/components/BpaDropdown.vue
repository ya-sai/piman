<template>
  <div
    :id=fixId
    class="bpa-dropdown"
    v-click-outside="vcoConfig"
  >
    <bpa-button
      type="button"
      :id="`${fixId}-btn`"
      :theme=theme
      aria-haspopup="listbox"
      :aria-expanded=listboxOpen
      :disabled=disabled
      :size=size
      @click="handleClickSelect"
      :class="[
        'bpa-dropdown-btn',
        listboxOpen ? 'bpa-dropdown-btn--open' : '',
      ]"
    >
      <slot name="prefix"></slot>
      <span class="bpa-dropdown-text" :id="`${fixId}-label-text`">
        <span v-if="placeholder">{{ placeholder }}</span>
        <span v-else>{{ t('dropdown.placeholder') }}</span>
      </span>
      <slot name="affix"></slot>
    </bpa-button>
    <ul
      role="listbox"
      ref="refBpaDropList"
      tabindex="-1"
      :aria-labelledby="`${fixId}-label-text`"
      :class="[
        'bpa-dropdown-popup',
        listboxOpen ? 'bpa-dropdown-popup--open' : '',
        listboxClass ? listboxClass : ''
      ]"
    >
      <template v-for="(item, index) in options">
        <li
          :id="`${fixId}-option-${index}`"
          role="option"
          :tabindex="(item.type != 'link' && item.type != 'external-link' )? '0' : '-1'"
          :key="index"
          @click.capture="handleClickOption(item, index, item.type)"
          @keyup.capture.prevent.enter="handleClickOption(item, index, item.type)"
          @keydown.capture.prevent.space="onKeypress"
        >
          <router-link
            v-if="item.type=='link'"
            :to="item.url"
            :title="`${t('dropdown.goto')} ${ item.label }`"
            v-html="item.label"
          ></router-link>

          <a
            v-else-if="item.type=='external-link'"
            :href="item.url"
            :title="`${t('dropdown.new_tab')} ${ item.label }`"
            target="_blank"
            rel="noopener noreferrer"
            v-html="item.label"
          ></a>
          <span v-html="item.label" v-else></span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import vClickOutside from 'v-click-outside'
import FocusTrap from '@/utils/trapFocus'
import BpaI18n from '@/locale'
import { generateId } from '@/utils/generateId';

export default Vue.extend({
  name: 'BpaDropdown',
  mixins: [ BpaI18n ],
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    theme: String,
    disabled: Boolean,
    id: String,
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
    },
    fixed: String,
    optionWidth: String,
    size: String,
    listboxClass: String,
  },
  data() {
    return {
      listboxOpen: false,
      trap: null,
      fixId: '',
      vcoConfig: {
        handler: (this as any).handleClickOutside,
        middleware: (this as any).checkInsideList,
      },
    }
  },
  methods: {
    handleClickSelect() {
      if(this.disabled) return
      if(this.listboxOpen) this.close()
      else this.open()
    },
    onKeypress(evt: KeyboardEvent){
      if( evt.target ) (evt.target as HTMLElement).click()
    },
    handleClickOption(item: any, i: number, type:string) {
      if(type != 'link' && type != 'external-link') {
        this.$emit('click', item)
      }
      this.close()
    },
    handleClickOutside() {
      if(this.listboxOpen) this.close()
    },
    checkInsideList (event: Event) {
      const list: HTMLElement = this.$refs.refBpaDropList as HTMLElement
      return !list.contains(event.target as Node)
    },
    handleEsc(e: KeyboardEvent){
      if(e.key === 'Escape' || e.keyCode === 27) this.close()
    },
    open(){
      this.listboxOpen = true

      const list = this.$refs.refBpaDropList as HTMLElement
      const btn = document.getElementById((this as any).fixId)

      document.body.appendChild(list)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.trap = new FocusTrap([btn!, list]) as any

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const coor = btn!.getBoundingClientRect()
      if(this.fixed !== undefined){
        list.style.top = coor.top + coor.height + 'px'
        list.style.position = 'fixed'
      }else{
        list.style.top = window.pageYOffset + coor.top + coor.height + 'px'
      }
      // listbox min-width = 8rem
      const totalWidthOfDropdown = coor.left + (16 * 8)
      if((totalWidthOfDropdown > document.body.clientWidth) && (coor.width < 16 * 8)) {
        list.style.right = "0"
        list.style.width = "auto"
      }else {
        list.style.left = coor.left + 'px'
        list.style.width = this.optionWidth || coor.width + 'px'
      }

      document.addEventListener('keyup', this.handleEsc)

      if(this.vcoIntercept){
        this.vcoIntercept.$emit('toggleSlotItem', true, this)
      }
    },
    close(){
      this.listboxOpen = false
      const list = this.$refs.refBpaDropList as HTMLElement
      const btn = document.getElementById((this as any).fixId)

      if(this.trap){
        (this.trap as any).dismiss()
        this.trap = null
      }
      if(btn) btn.focus()
      document.body.removeChild(list)

      document.removeEventListener('keyup', this.handleEsc)

      if(this.vcoIntercept){
        this.vcoIntercept.$emit('toggleSlotItem', false, this)
      }
    },
  },
  computed:{
    vcoIntercept(){
      let parent = this.$parent as Vue & { $options: { vcoIntercept: boolean }}
      if(!parent) return null
      let hasIntercept = parent.$options.vcoIntercept;

      while (!hasIntercept) {
        parent = parent.$parent as Vue & { $options: { vcoIntercept: boolean }}
        if(!parent) return null

        hasIntercept = parent.$options.vcoIntercept;
      }
      return parent;
    },
  },
  mounted(){
    const list: HTMLElement = this.$refs.refBpaDropList as HTMLElement
    if(this.vcoIntercept){
      this.vcoIntercept.$emit('mountVcoItem', list)
    }
    if(this.id){
      (this as any).fixId = 'bpa-dropdown-' + this.id
    }
    else {
      (this as any).fixId = 'bpa-dropdown-' + generateId()
    }
  },
  beforeDestroy(){
    if(this.listboxOpen) this.close()
  }
})
</script>