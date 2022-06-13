import { ButtonType } from './button.d';
import { BpaComponent } from './component'

export type SelectOption = { label: string | number, value: string | number }

/** Select Component */
export declare class BpaSelect extends BpaComponent {

  /** Button type */
  theme: ButtonType

  /** Disable the button */
  disabled: boolean

  /** Id */
  prefixId: string

  /** 選項 */
  options: Array<SelectOption>

  /** placeholder */
  defaultLabel: string
}
