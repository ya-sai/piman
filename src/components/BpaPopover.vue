<template>
  <div
    :class="[
      'bpa-popover',
      ariaExpanded ? 'bpa-popover--open' : ''
    ]"
    :id="`popover-${fixId}`"
  >
    <bpa-button 
      type="button"
      :theme="theme ? `${theme}` : ''"
      :id="`popover-${fixId}-btn`"
      :aria-expanded="`${ariaExpanded}`"
      ref="refPopBtn"
      :aria-controls="`popover-${fixId}-content`"
      @click="handleClick"
      :size="size"
      :disabled="disabled"
    >
      <slot name="title">{{ title }}</slot>
    </bpa-button>
    <div
      ref="refPopContent"
      :class="[
        'bpa-popover-container',
        nopadding ? 'no-padding' : ''
      ]"
      :id="`popover-${fixId}-content`"
      :aria-labelledby="`popover-${fixId}-btn`"
      role="region"
      v-if="ariaExpanded"
      v-click-outside="vcoConfig"
    >
      <slot></slot>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { generateId } from '@/utils/generateId';
import vClickOutside from 'v-click-outside'
import FocusTrap from '@/utils/trapFocus'
import { ComponentOptions } from 'vue/types/umd'

export default Vue.extend({
  name: 'BpaPopover',
  vcoIntercept: true,
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    theme: String,
    id: String,
    title: {
      type: String,
      default: 'Popover'
    },
    nopadding: Boolean,
    size: String,
    disabled: [String, Boolean]
  },
  data(){
    return {
      fixId: '',
      ariaExpanded: false,
      trap: null,
      vcoConfig: {
        handler: this.handleClickOutside,
        middleware: this.checkInsideList,
      },
      vcoItems:[],
      slotOpenedItems: new Set<Vue>()
    }
  },
  methods: {
    handleClick() {
      if(this.ariaExpanded) this.close()
      else this.open()
    },
    handleClickOutside() {
      if(this.ariaExpanded) this.close()
      else this.open()
    },
    checkInsideList (event: Event) {
      let notInside = true
      this.vcoItems.forEach((item: HTMLElement) => {
        if(item.contains(event.target as Node)) notInside = false
      });
      return notInside
    },
    handleEsc(e: KeyboardEvent){
      if(e.key !== 'Escape') return
      if(this.slotOpenedItems.size > 0) return
      
      this.close()
    },
    open(){
      this.ariaExpanded = true

      this.$nextTick().then(()=> {
        const content = this.$refs.refPopContent as HTMLElement
        const btn = (this.$refs.refPopBtn as Vue).$el as HTMLElement
        
        document.body.appendChild(content)
        this.trap = new FocusTrap([btn, content])

        const coor = btn.getBoundingClientRect()
        content.style.top = window.pageYOffset + coor.top + coor.height + 'px'
        if(coor.left + content.offsetWidth > window.innerWidth) content.style.right = 0 + 'px'
        else content.style.left = coor.left + 'px'
      })

      document.addEventListener('keyup', this.handleEsc)
    },
    close(){
      this.ariaExpanded = false
      const content = this.$refs.refPopContent as HTMLElement
      const btn = (this.$refs.refPopBtn as Vue).$el as HTMLElement

      if(this.trap) this.trap.dismiss()
      btn.focus()
      document.body.removeChild(content)

      document.removeEventListener('keyup', this.handleEsc)
    }
  },
  beforeCreate(){
    //若slot內有元件會觸發click outside，點擊該元件時不能關閉popover
    this.$on('mountVcoItem',(item: any)=>{
      (this as any).vcoItems.push(item)
    })

    // 若slot內有元件用esc關閉，點擊esc時優先關閉內部元件
    this.$on('toggleSlotItem', (isOpne: boolean, that: Vue) => {
      if(isOpne)this.slotOpenedItems.add(that)
      else this.slotOpenedItems.delete(that)
    })
  },
  beforeDestroy(){
    if((this as any).ariaExpanded) (this as any).close()
  },
  mounted(){
    if((this as any).id){
      (this as any).fixId = (this as any).id
    }
    else {
      (this as any).fixId = generateId()
    }
  }
} as ComponentOptions<any>)
</script>
