import { BpaComponent } from './component'

/** Form Item Component */
export declare class BpaFormItem extends BpaComponent {
  /** A key of `model` of the enclosing `el-form` component */
  prop: string

  /** Label */
  label: string

  /** Whether the field is required or not, will be determined by validation rules if omitted */
  required: boolean

  /** Validation rules of form */
  rules: object

  /** Field error message, set its value and the field will validate error and show this message immediately */
  hint: string

  /** Whether to show the error message */
  error: boolean

  /**
 * Validate the whole form
 */
  validate (): Promise<boolean>
  
  /**
   * To focus the focusable HTML Element inside.
   */
  triggerFocus(): void
}