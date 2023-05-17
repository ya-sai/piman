import { VueConstructor } from "vue/types/umd";
import '@/assets/scss/style.scss';
import { Locale } from '@/locale/types';
import { use } from "../locale";

// 1. 引入新增的原件
import BpaTree from "./BpaTree";
import BpaBreadcrumb from "./BpaBreadcrumb.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BpaBreadcrumbItem from "./BpaBreadcrumbItem.vue";
import BpaButton from "./BpaButton.vue";
import BpaCard from "./BpaCard.vue";
import BpaCheckbox from "./BpaCheckbox.vue";
import BpaAccordion from "./BpaAccordion.vue";
import BpaAccordionItem from "./BpaAccordionItem.vue";
import BpaDialog from "./BpaDialog.vue";
import BpaDropdown from "./BpaDropdown.vue";
import BpaForm from "./BpaForm.vue";
import BpaFormItem from "./BpaFormItem.vue";
import BpaInput from "./BpaInput.vue";
import BpaMsg from "./BpaMsg";
import BpaPagination from "./BpaPagination.vue";
import BpaPopover from "./BpaPopover.vue";
import BpaRadio from "./BpaRadio.vue";
import BpaSelect from "./BpaSelect.vue";
import BpaSwitch from "./BpaSwitch.vue";
import BpaTabPanel from "./BpaTabPanel.vue";
import BpaTabs from "./BpaTabs.vue";
import BpaTooltip from "./BpaTooltip.vue";

const Components: {[key: string]: any} = {
  /** 
   * 2. 將元件放入此物件中
   * This key name will become the html tag of the component.
   * eg. BpaBlah --> <BpaBlah> or <bpa-blah>
   */
  // 
  BpaTree,
  BpaBreadcrumb,
  BpaBreadcrumbItem,
  BpaButton,
  BpaCard,
  BpaCheckbox,
  BpaAccordion,
  BpaAccordionItem,
  BpaDialog,
  BpaDropdown,
  BpaForm,
  BpaFormItem,
  BpaInput,
  BpaMsg,
  BpaPagination,
  BpaPopover,
  BpaRadio,
  BpaSelect,
  BpaSwitch,
  BpaTabPanel,
  BpaTabs,
  BpaTooltip
}

const install = function (Vue: VueConstructor, opt?:{ locale?: Locale}): void{
  if(opt){
    if(opt.locale) use(opt.locale)
  }
  
  Object.keys(Components).map(key=>{
    Vue.component(key, Components[key])
  })

  // 3. 註冊全域方法
  Vue.prototype.$msg = BpaMsg;
}

export default{
  install,
  Msg: BpaMsg,
  i18n: {
    use
  },
}