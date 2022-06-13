import Vue from 'vue'
import { BpaComponent } from './component'

/** Message Component */
export declare class BpaMsgComponent extends BpaComponent {

}

export interface BpaMsg {
  (msg: string): BpaMsgComponent
  (options: MsgOption): BpaMsgComponent
  
  primary(msg: string): BpaMsgComponent
  primary(options: MsgOption): BpaMsgComponent
  
  success(msg: string): BpaMsgComponent
  success(options: MsgOption): BpaMsgComponent
  
  warning(msg: string): BpaMsgComponent
  warning(options: MsgOption): BpaMsgComponent
  
  danger(msg: string): BpaMsgComponent
  danger(options: MsgOption): BpaMsgComponent
}

export interface MsgOption {
  visible?: boolean;
  closed?: boolean;
  prefix?: string;
  dangerHTML?: boolean;
  msg: string;
  theme?: "primary"|"success"|"warning"|"danger";
  duration?: number;
  timer?: number;
  onClose?: null | any;
  vOffset?: number;
}

declare module 'vue/types/vue' {
  interface Vue {
  /** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
    $msg: BpaMsg
  }
}
