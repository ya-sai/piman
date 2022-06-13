import Vue from "vue";
import { ComponentOptions } from "vue/types/umd";

export default class PopupService {
  
  public addChild( child: Vue, toggleTarget: Element ){
    console.log('add');
    
  }
}

export interface PopComponentOptionsVue extends ComponentOptions<Vue> {
  vcoIntercept: boolean
}

const PopParent: PopComponentOptionsVue  = {
  vcoIntercept: true,
  
}