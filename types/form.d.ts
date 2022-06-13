import { BpaComponent } from './component'

export type FormItemLabelPosition = 'left' | 'right' | 'top'

/** Form Component */
export interface ValidateCallback {
  /**
   * The callback to tell the validation result
   *
   * @param valid Whether the form is valid
   * @param error fields that fail validation
   */
  (valid: boolean, error: object): void
}

/** Form Component */
export declare class BpaForm extends BpaComponent {
  /** Data of form component */
  model: object

  /** Validation rules of form */
  rules: object

  /** Position of label */
  labelPosition: FormItemLabelPosition

  /**
   * Validate the whole form
   */
  validate (): Promise<{ valid: boolean; error: {message: string; field: string}[] | null }>
}