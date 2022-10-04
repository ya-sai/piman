<template>
  <div
    :id=fixId
    ref="refBpaSelect"
    class="bpa-select"
    v-click-outside="vcoConfig"
  >
    <bpa-button
      type="button"
      :id="`${fixId}-btn`"
      :theme=theme
      ref="refOpenBtn"
      aria-haspopup="listbox"
      :aria-expanded="listboxOpen ? 'true' : 'false'"
      :aria-controls="`${fixId}-listbox`"
      :aria-description="t('select.hint')"
      :disabled="disabled"
      :size="size"
      @click="handleClickSelect"
      :class="[
        'bpa-select-btn',
        listboxOpen ? 'bpa-select-btn--open' : '',
      ]"
    >
      <slot name="prefix"></slot>
      <span
        v-if="selectedVal.length === 0"
        :id="`${fixId}-label-text`"
        class="bpa-select-text bpa-select-placeholder"
      >
        <span v-if="placeholder">{{ placeholder }}</span>
        <span v-else>{{ t('select.placeholder') }}</span>
      </span>
      <span
        v-else-if="multiple !== undefined"
        class="bpa-select-text multiple-label-group"
      >
        <template v-if="multiple === 'accordion' && selectedVal.length > 1">
          <span class="multiple-label">{{ selectedVal[0].label }}</span>
          <span class="bpa-badge">+{{ selectedVal.length -1 }}</span>
        </template>
        <span
          v-else
          v-for="item in selectedVal" :key="item.value"
          class="multiple-label"
        >
          {{ item.label }}
        </span>
      </span>
      <span
        v-else
        :id="`${fixId}-label-text`"
        class="bpa-select-text"
      >
        {{ selectedVal[0].label  }}
      </span>
      <slot name="affix"></slot>
      <div
        role="button"
        v-if="selectedVal.length > 0 && disabledClear == false"
        tabindex="0"
        @click.stop="handleClearSelected"
        @keydown.stop.prevent.enter="handleClearSelected"
        @keydown.stop.prevent.space="handleClearSelected"
        class="bpa-select-clear-btn"
      >
        <span aria-hidden="true">✖</span>
        <span class="visually-hidden">{{ t('select.clear') }}</span>
      </div>
    </bpa-button>
    <ul
      :id="`${fixId}-listbox`"
      role="listbox"
      ref="refListbox"
      tabindex="-1"
      :aria-labelledby="`${fixId}-label-text`"
      :aria-activedescendant="selectedId"
      :aria-multiselectable="multiple !== undefined"
      :class="[
        'bpa-select-popup',
        listboxOpen ? 'bpa-select-popup--open' : '',
        listboxClass ? listboxClass : ''
      ]"
    >
      <div
        v-if="toolbar"
        class="toolbar"
      >
        <label :for="`${fixId}-search`">
          <bpa-input
            v-model="searchInput"
            ref="refSelectSearch"
            v-if="toolbar.includes('search')"
            :id="`${fixId}-search`"
            :placeholder="t('select.search')"
            @input="debounceSearch"
          />
          <span class="visually-hidden">{{ t('select.area_search') }}</span>
        </label>
      </div>
      <template v-for="(item, index) in innerOptions">
        <!-- 群組選項 -->
        <li
          role="group"
          v-if="item.type === 'group'"
          :key="index"
          tabindex="-1"
        >
          <ul
            role="none"
            :aria-label="item.label"
            tabindex="-1"
            :aria-labelledby="`${fixId}-optgroup-${index}`"
          >
            <li 
              role="presentation"
              class="optgroup-title"
              :id="`${fixId}-optgroup-${index}`"
            >
              {{ item.label }}
            </li>
            <li
              role="option"
              :id="`${fixId}-optgroup-${index}-option-${childIndex}`"
              v-for="(item, childIndex) in item.options"
              :key="childIndex"
              tabindex="0"
              :class="{
                'option-checked': item.checked,
                'option-multi-checked': multiple !== undefined
              }"
              :aria-selected="item.checked"
              @click="handleClickOption(item, childIndex, index, true)"
              @keydown.stop.prevent.enter="handleClickOption(item, childIndex, index, true)"
              @keydown.stop.prevent.space="onKeypress"
            >
              <slot name="option" :option="item">{{ item.label }}</slot>
            </li>
          </ul>
        </li>
        <!-- 選項 -->
        <li
          v-else
          role="option"
          :id="`${fixId}-option-${index}`"
          :key="index"
          tabindex="0"
          :class="{
            'option-checked': item.checked,
            'option-checked--multi': multiple !== undefined
          }"
          :aria-selected="item.checked"
          @click="handleClickOption(item, index, false)"
          @keydown.stop.prevent.enter="handleClickOption(item, index, false)"
          @keydown.stop.prevent.space="onKeypress"
        >
          <slot name="option" :option="item">{{ item.label }}</slot>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import vClickOutside from 'v-click-outside'
import FocusTrap from '../utils/trapFocus'
import BpaI18n from '@/locale'
import { generateId } from '@/utils/generateId';

interface ThisData {
  listboxOpen: boolean;
  selectedId: string;
  selected: string | null | {value: string, label: string};
  innerOptions: {value: string, label: string, checked: boolean}[];
  options: (Option|OptionGroup)[];
  selectedVal: {value: string, label: string}[];
  keyword: string;
  searchInput: string;
  debounce: { wait: number, timer: number };
  formItem: Vue | null;
  trap: FocusTrap | null;
  toolbar: string;
  vcoIntercept: null|Vue;
  close(): void;
  open(): void;
  handleEsc(): void;
  checkInsideList(): boolean;
  handleClickOutside(): void;
  onSearch(): void;
  resetTrap(el: HTMLElement): void;
}

interface OptionGroup {
  label: string,
  type: 'group',
  options: Option[]
}

interface Option {
  value: string,
  label: string,
}

export default (Vue as VueConstructor<Vue & ThisData>).extend({
  name: 'BpaSelect',
  mixins: [ BpaI18n ],
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    id: String,
    theme: String,
    options: {
      type: Array,
      required: true,
    },
    value: [ String, Number, Array ],
    multiple: [ String ],
    placeholder: String,
    disabledClear: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    toolbar: Array,
    optionWidth: String,
    size: String,
    listboxClass: String,
  },
  data() {
    return {
      listboxOpen: false,
      selectedId: '',
      // selected: this.label ? this.label : this.options.length > 0 ? this.options[0] : null,
      trap: null,
      vcoConfig: {
        handler: this.handleClickOutside,
        middleware: this.checkInsideList,
      },
      fixId: '',
      keyword: '',
      searchInput: "",
      debounce: {
        timer: undefined,
        wait: 800
      },
      addedOptions: []
    }
  },

  methods: {
    debounceSearch(){
      if(this.debounce.timer){ clearTimeout(this.debounce.timer) }
      this.debounce.timer = setTimeout(() => {
        this.onSearch()
      }, this.debounce.wait);
    },
    onSearch(){
      if(this.$listeners && this.$listeners.search){
        this.$emit('search', this.searchInput)
      }else{
        this.keyword = this.searchInput
        this.resetTrap(this.$refs.refSelectSearch as HTMLElement)
      }
    },
    checkInsideList (event: Event) {
      const list: HTMLElement = this.$refs.refListbox as HTMLElement
      return !list.contains(event.target as Node)
    },
    handleClickSelect() {
      if(this.disabled) return
      if(this.listboxOpen) this.close()
      else this.open()
    },
    handleClearSelected() {
      this.innerOptions.forEach(o => o.checked = false)
      const val = this.multiple === undefined ? '' : []
      this.$emit('input', val);
      if(this.formItem) this.formItem.$emit('change', val)
      // this.selected = '';
      this.selectedId = '';
      document.getElementById((this as any).fixId+'-btn')?.focus();
    },
    handleClickOption(item: {value: any, label: string}, index: number, parentIndex: number, group: boolean) {
      this.selectedId = group ? `${(this as any).fixId}-optgroup-${parentIndex}-option-${index}` : `${(this as any).fixId}-option-${index}`;
      if(this.multiple === undefined){
        // this.selected = item;
        this.close()
        this.selectedVal = item.value;
        // document.getElementById((this as any).fixId)?.focus();
      }
      else {
        let arr = this.selectedVal.map(s=>s.value)
        let idx = arr.indexOf(item.value)
        if(idx >= 0) {
          arr.splice(idx, 1)
          this.selectedVal = arr as any
        }
        else {
          arr.push(item.value)
          this.selectedVal = arr as any
        }
      }
    },
    onKeypress(evt: KeyboardEvent){
      if( evt.target ) (evt.target as HTMLElement).click()
    },
    handleClickOutside() {
      if(this.listboxOpen) this.close()
    },
    handleEsc(e: KeyboardEvent){
      if(e.key === 'Escape' || e.keyCode === 27) this.close()
    },
    close(){
      this.listboxOpen = false
      const list: HTMLElement = this.$refs.refListbox as HTMLElement
      const btn: HTMLButtonElement = (this.$refs.refOpenBtn as Vue).$el as HTMLButtonElement

      if(this.trap){
        this.trap.dismiss()
        this.trap = null as any
      }
      btn.focus()
      document.body.removeChild(list)
      
      if(this.formItem) this.formItem.$emit('blur')

      document.removeEventListener('keyup', this.handleEsc)

      if(this.vcoIntercept){
        this.vcoIntercept.$emit('toggleSlotItem', false, this)
      }
    },
    open(){
      this.listboxOpen = true
      const list: HTMLElement = this.$refs.refListbox as HTMLElement
      const btn: HTMLButtonElement = (this.$refs.refOpenBtn as Vue).$el as HTMLButtonElement

      document.body.appendChild(list)
      this.trap = new FocusTrap([this.$refs.refBpaSelect as HTMLElement, list])

      const coor = btn.getBoundingClientRect()
      list.style.top = window.pageYOffset + coor.top + coor.height + 'px'
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
    resetTrap(firstFocus: HTMLElement){
      this.$nextTick(()=>{
        if(this.trap) this.trap.dismiss()
        const list: HTMLElement = this.$refs.refListbox as HTMLElement
        this.trap = new FocusTrap([this.$refs.refBpaSelect as HTMLElement, list], firstFocus)
      })
    }
  },
  computed: {
    selectedVal:{
      get(){
        if((this as any).multiple === undefined){
          let groupOpt: Option|undefined;
          const opt = this.options
            .find(o => {
              if((o as OptionGroup).type === 'group'){
                const found = (o as OptionGroup).options
                  .find(subO => subO.value === (this as any).value )
                if(found) groupOpt = found
              }
              else {
                return (o as Option).value === (this as any).value
              }
            })
            
          return opt? [opt] : groupOpt ? [groupOpt] : []
        }
        else {
          let groupOpts: Option[] = []
          const opt = this.options.filter(o => {
            if((o as OptionGroup).type === 'group'){
              const found = (o as OptionGroup).options
                .filter( subO => (this as any).value.includes(subO.value))
              groupOpts = groupOpts.concat(found)
            }
            else {
              return (this.value as Array<string|number>).includes((o as Option).value)
            }
          })
          return opt.concat(groupOpts)
        }
      },
      set(val){
        (this as any).$emit('input', val)
        if((this as any).formItem){
          (this as any).$nextTick(()=>{
            (this as any).formItem?.$emit('change', val)
          })
        }
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
    },
    innerOptions(){
      let result = this.options.map((opt: OptionGroup|Option) => {
        if((opt as OptionGroup).type === 'group'){
          let subOpts =  (opt as OptionGroup).options.map(subO => {
            return {
              checked: this.selectedVal.map(s=>s.value).includes(subO.value),
              ...subO
            }
          })
          if(this.keyword !== '') subOpts = subOpts.filter(opt => opt.label.includes(this.keyword))
          
          return {
            ...opt,
            options: subOpts
          }
        }else{
          return { 
            checked: this.selectedVal.map(s=>s.value).includes((opt as Option).value), 
            ...opt 
          }
        }
      })
      if(this.keyword !== '') {
        result = result.filter(opt => (opt as OptionGroup).type==='group' || opt.label.includes(this.keyword))
      }

      return result
    },
    optionsLength(){
      let opt = 0
      let groupOpt = 0
      this.options.forEach(o => {
        if((o as OptionGroup).type === 'group'){
          groupOpt += (o as OptionGroup).options.length
        }
        else opt++
      })
      return opt + groupOpt
    },
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
  watch:{
    optionsLength(){
      if(this.listboxOpen) this.resetTrap(this.$refs.refSelectSearch as HTMLElement)
    }
  },
  mounted(){
    if(this.id){
      (this as any).fixId = 'bpa-select-' + this.id
    }
    else {
      (this as any).fixId = 'bpa-select-' + generateId()
    }
    const list: HTMLElement = this.$refs.refListbox as HTMLElement
    if(this.vcoIntercept){
      this.vcoIntercept.$emit('mountVcoItem', list)
    }
  },
  beforeDestroy(){
    if(this.listboxOpen) this.close()
  }
})
</script>