import Vue from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import BpaMsg from './BpaMsg.vue';
import { MsgOption } from "../../types/msg";

const MsgConstructor = Vue.extend(BpaMsg)

let instance: any;
const instances: any[] = [];
let seed = 1;

export const defaultMsgOpt: MsgOption = {
  visible: false,
  prefix: '',
  dangerHTML: false,
  msg: '',
  theme: 'primary',
  duration: 2000,
  timer: undefined,
  closed: false,
  onClose: null,
  vOffset: 20
}

const Msg = function (options: MsgOption | string) {
  if(!options) console.error(`[BpaMsg Error] Msg 方法需要1個參數（字串或物件）`);
  
  if (typeof options === 'string') {
    options = {
      ...defaultMsgOpt,
      msg: options
    };
  }

  const userOnClose = options.onClose;
  const id = 'bpa-msg_' + seed++;

  options.onClose = function() {
    Msg.close(id, userOnClose);
  };
  
  instance = new MsgConstructor({
    data: options
  });
  instance.id = id
  
  instance.$mount();
  document.body.appendChild(instance.$el);

  //方塊離邊緣的距離
  let verticalOffset = 20;
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  instance.vOffset = verticalOffset;

  if(instance.id != null) {
    (document as any).getElementById(instance.id).style.top = instance.vOffset+'px'
  }

  instances.push(instance);
  
  return instance
};

['success', 'warning', 'primary', 'danger' ].forEach(type => {
  (Msg as {[key: string]: any})[type] = (options: MsgOption | string) => {
    let opt: MsgOption;
    if (typeof options === 'string') {
      opt = {
        ...defaultMsgOpt,
        msg: options
      };
    }else { opt = { ...defaultMsgOpt, ...options} }
    opt.theme = type as ('success'|'warning'|'primary'|'danger' )
    return Msg(opt);
  };
});

Msg.close = function(id: string, userOnClose: any) {
  const len = instances.length;
  let index = -1;
  let removedHeight;
  for (let i = 0; i < len; i++) {
    if (id === instances[i].id) {
      removedHeight = instances[i].$el.offsetHeight;
      index = i;
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) return;
  for (let i = index; i < len - 1 ; i++) {
    const dom = instances[i].$el;
    dom.style['top'] =
      parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
  }
};


export default Msg