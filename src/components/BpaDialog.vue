<template>
  <transition name="bpa-dialog-animation">
    <div
      role="dialog"
      v-if="visible"
      :id="`bpa-dialog-${fixId}`"
      :key="fixId"
      class="bpa-dialog"
      aria-modal="true"
      :aria-labelledby="`bpa-dialog-${fixId}`"
      @keydown.esc="handleCloseBpaDialog"
    >
      <div class="bpa-dialog-box">
        <div
          class="bpa-dialog-box__inner"
          v-click-outside="handleClickOutside"
        >
          <div
            v-if="$slots.header || header"
            :id="`bpa-dialog-${fixId}`"
            class="bpa-dialog-header"
          >
            <slot name="header">
              <strong>{{ header }}</strong>
            </slot>
            <bpa-button
              type="button"
              class="bpa-dialog-close-btn"
              @click="handleCloseBpaDialog"
            >✖<span class="visually-hidden">{{ t('dialog.close') }}</span></bpa-button>
          </div>
          <div class="bpa-dialog-container">
            <slot></slot>
          </div>
          <div
            v-if="$slots.footer || footer"
            class="bpa-dialog-footer"
          >
            <slot name="footer">{{ footer }}</slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { generateId } from '@/utils/generateId';
import vClickOutside from 'v-click-outside'
import BpaButton from "./BpaButton.vue";
import Trap from "../utils/trapFocus";
import BpaI18n from '@/locale';

interface ThisData {
  handleCloseBpaDialog(e?: KeyboardEvent) :void;
  closeModal(): void;
  trap: Trap;
  elFocusWhenLeave: HTMLElement | null;
}

export default (Vue as VueConstructor<Vue & ThisData>).extend({
  name: 'BpaDialog',
  mixins: [ BpaI18n ],
  components: { BpaButton },
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    id: String,
    header: String,
    footer: String,
    visible: {
      type: Boolean,
      default: false
    },
    clickoutside: {
      type: Boolean,
      default: true
    }
  },
  data(){ 
    return {
      trap: null,
      elFocusWhenLeave: null,
      fixId: '',
    }
  },
  methods: {
    handleCloseBpaDialog(e?: KeyboardEvent) {
      // esc to close modal
      if(e && e.type === 'keyup' && e.key !== 'Escape') return
      (this as any).closeModal()
    },
    handleClickOutside() {
      if(!(this as any).clickoutside) {
        return
      }
      else (this as any).closeModal()
    },
    closeModal(){
      (this as any).$emit('update:visible', false);
      (this as any).$emit('close');
    },
  },
  mounted(){
    if((this as any).id){
      (this as any).fixId = (this as any).id
    }
    else {
      (this as any).fixId = generateId()
    }
    document.body.appendChild((this as any).$el)
  },
  watch:{
    visible(val){
      if (val) {
        document.body.style.overflow = 'hidden';
        
        (this as any).elFocusWhenLeave = document.activeElement as HTMLElement
        
        (this as any).$nextTick().then(()=>{
          (this as any).trap = new Trap([(this as any).$el] as HTMLElement[])
        })

        document.addEventListener('keyup', (this as any).handleCloseBpaDialog)
      }
      else {
        document.body.style.overflow = '';
        
        (this as any).trap.dismiss()

        if((this as any).elFocusWhenLeave) (this as any).elFocusWhenLeave.focus()
        
        document.removeEventListener('keyup', (this as any).handleCloseBpaDialog)
      }
    }
  },
  beforeDestroy(){
    (this as any).visible = false
    if((this as any).$el.parentNode)(this as any).$el.parentNode.removeChild((this as any).$el);
  }
})
</script>
