import { BpaComponent } from './component'

/** Input Component */
export declare class BpaInput extends BpaComponent {

  /** Disable the button */
  disabled: boolean

  /** `id` and `for` attribute in <input> and <label> */
  id: string

  /** `name` attribute in <input>，辨識是否為同欄位 */
  name: string

  value: string | number

  readonly: boolean

  required: boolean

  type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" 

  /** 欄位內容是否有誤 */
  error: boolean

  placeholder: string
}
