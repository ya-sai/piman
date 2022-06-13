import { BpaComponent } from './component'

/** Checkbox Component */
export declare class BpaCheckbox extends BpaComponent {

  /** Disable the button */
  disabled: boolean

  /** `id` and `for` attribute in <input> and <label> */
  id: string

  /** `name` attribute in input:checkbox，辨識是否為同欄位 */
  name: string

  /** checkbox代表的值 */
  val: string | number

  /** 預設勾選與否 */
  checked: boolean

}
