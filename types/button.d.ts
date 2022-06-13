import { BpaComponent } from './component'

/** Button type */
export type ButtonType = 'button' | 'primary' | 'success' | 'warning' | 'danger' | 'primary-ghost' | 'success-ghost' | 'warning-ghost' | 'danger-ghost'


/** Button Component */
export declare class BpaButton extends BpaComponent {

  /** Button type */
  type: ButtonType

  /** Determine whether it's loading */
  loading: boolean

  /** Disable the button */
  disabled: boolean
}
