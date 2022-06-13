import { BpaComponent } from './component'

/** Radio Component */
export declare class BpaRadio extends BpaComponent {

  /** Disable the button */
  disabled: boolean

  /** `id` and `for` attribute in <input> and <label> */
  id: string

  /** `name` attribute in input:radio，辨識是否為同欄位 */
  name: string

  /** radio代表的值 */
  val: string | number

  /** 預設勾選與否 */
  checked: boolean

}
