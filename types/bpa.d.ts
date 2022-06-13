import Vue from 'vue'
import { BpaComponent } from './component'
import { BpaI18n } from './i18n'

import { BpaTree } from './tree'
import { BpaBreadcrumb } from './breadcrumb'
import { BpaBreadcrumbItem } from './breadcrumb-item'
import { BpaButton } from './button'
import { BpaCard } from './card'
import { BpaCheckbox } from './checkbox'
import { BpaAccordion } from './accordion'
import { BpaAccordionItem } from './accordion-item'
import { BpaDialog } from './dialog'
import { BpaDropdown } from './dropdown'
import { BpaForm } from './form'
import { BpaFormItem } from './form-item'
import { BpaInput } from './input'
import { BpaMsg } from './msg'
import { BpaPagination } from './pagination'
import { BpaPopover } from './popover'
import { BpaRadio } from './radio'
import { BpaSelect } from './select'
import { BpaSwitch } from './switch'
import { BpaTabPanel } from './tab-panel'
import { BpaTabs } from './tabs'
import { BpaTooltip } from './tooltip'


/**
 * Install all components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(bpa11y)` to install.
 */
export function install (vue: typeof Vue, options: any): void

/** Msg Function */
export const Msg: BpaMsg

/** i18n Function */
export const i18n: BpaI18n

/** bpa11y component common definition */
export type Component = BpaComponent

/** Tree Component */
export class Tree extends BpaTree {}

/** Breadcrumb Component */
export class Breadcrumb extends BpaBreadcrumb {}

/** BreadcrumbItem Component */
export class BreadcrumbItem extends BpaBreadcrumbItem {}

/** Button Component */
export class Button extends BpaButton {}

/** Card Component */
export class Card extends BpaCard {}

/** Checkbox Component */
export class Checkbox extends BpaCheckbox {}

/** Accordion Component */
export class Accordion extends BpaAccordion{}

/** AccordionItem Component */
export class AccordionItem extends BpaAccordionItem {}

/** Dialog Component */
export class Dialog extends BpaDialog {}

/** Dropdown Component */
export class Dropdown extends BpaDropdown {}

/** Form Component */
export class Form extends BpaForm {}

/** FormItem Component */
export class FormItem extends BpaFormItem {}

/** Input Component */
export class Input extends BpaInput {}

/** Pagination Component */
export class Pagination extends BpaPagination {}

/** Popover Component */
export class Popover extends BpaPopover {}

/** Radio Component */
export class Radio extends BpaRadio {}

/** Select Component */
export class Select extends BpaSelect {}

/** Switch Component */
export class Switch extends BpaSwitch {}

/** TabPanel Component */
export class TabPanel extends BpaTabPanel {}

/** Tabs Component */
export class Tabs extends BpaTabs {}

/** Tooltip Component */
export class Tooltip extends BpaTooltip {}