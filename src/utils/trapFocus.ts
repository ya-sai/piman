
export default class FocusTrap {
  /** 可 focus 的所有元素組 */
  private _focusList: Array<HTMLElement[]> = [];
  /** 用於暫存查出的可 focus 元素 */
  private _tempFocusList: HTMLElement[] = [];
  /** 目標元素前後的跳板清單 */
  private _platformList: HTMLDivElement[] = []
  /** 提供的目標元素 */
  private _targets: HTMLElement[];

  /**
   * 將 targets 內可 focus 的 HTML 元素找出，並將 focus 目標限制在這些元素之中
   * @param targets target element array to trap
   * @param firstFocus the first element to focus on
   */
  constructor(targets: HTMLElement[], firstFocus?: HTMLElement){
    if(!targets) console.error(`[FocusTrap Fail]: FocusTrap需要一個參數作為目標，請提供製作focus範圍的目標元素`);
    
    this._targets = targets
    //取得能focus的元素清單focus list
    for (let i = 0; i < this._targets.length; i++) {
      const t = this._targets[i];
      if(this._isFocusable(t)) this._tempFocusList.push(t)
      if(t.childNodes.length > 0) this._findAllFocus(t.childNodes)
      if(this._tempFocusList.length > 0) this._focusList.push(this._tempFocusList)
      this._tempFocusList = []
    }


    if(this._focusList.length === 0) console.warn(`[FocusTrap Warn]: 目標元素內沒有可focus的元素，您提供的目標元素為：`, targets);
    else{
      //抓好focus list後才能加入focus跳板
      for (let i = 0; i < this._targets.length; i++) {
        const t = this._targets[i];
        const platforms = this._wrapPlatform(t, i)
        this._platformList = this._platformList.concat(platforms)
        
      }
      try {
        if(firstFocus) firstFocus.focus()
        else this._focusList[0][0].focus()
      } catch (error) {
        console.warn(`[FocusTrap Warn]: 發生下列錯誤，可能影響程式執行：`, (error as any).message);
      }
    }
  }

  /**
   * 在 target 前後放置跳板，使 focus 聚焦到跳板時會自動引導 focus 到 _focusList 中下一組元素
   * @param target 目標 HTML 元素
   * @param idx 元素於 _focusList 的索引值
   * @returns 放置在 target 前、後的跳板元素陣列
   */
  private _wrapPlatform = (target: Element, idx: number): [HTMLDivElement, HTMLDivElement] => {
    const l = this._focusList.length

    const preDiv = document.createElement('div');
    preDiv.style.position = 'fixed'
    const preNode = target.parentNode!.insertBefore( preDiv, target );
    preNode.tabIndex = 0;
    preNode.addEventListener('focus', () => {
      if(idx -1 < 0) this._focusList[l-1][this._focusList[l-1].length-1].focus()
      else this._focusList[idx-1][this._focusList[idx-1].length-1].focus()
    })
    
    const postDiv = document.createElement('div');
    postDiv.style.position = 'fixed'
    const postNode = target.parentNode!.insertBefore( postDiv, target.nextSibling );
    postNode.tabIndex = 0;
    postNode.addEventListener('focus', () => {
      if(idx+1 >= l) this._focusList[0][0].focus()
      else this._focusList[l-1][0].focus()
    })

    return [preNode, postNode]
  }

  /**
   * 清除 focus 範圍限制
   */
  dismiss(): void{
    this._platformList.forEach(p => { p.parentNode!.removeChild(p) })
  }

  /**
   * 在 targets 裡遞迴找出所有可 focus 的元素並存在 _tempFocusList 。
   * @param targets 元素陣列 ChildNode
   */
  private _findAllFocus = (targets: NodeListOf<ChildNode>) => {
    for (let i = 0; i < targets.length; i++) {
      const el = targets[i];
      if(this._isFocusable(el)) this._tempFocusList.push(el as HTMLElement)

      if(el.childNodes.length > 0) this._findAllFocus(el.childNodes)
    }
  }

  /**
   * 檢查 HTML 元素是否可被 focus
   * @param el 元素
   * @returns true - 可 focus; false - 不可 focus
   */
  private _isFocusable(el: any): boolean{
    if ( 
      el.tabIndex < 0 || 
      el.disabled || 
      (el.style && (el.style.visibility === 'hidden' || el.style.display === 'none'))
    ) { return false; }
  
    if (el.tabIndex >= 0) { return true }
  
    switch (el.nodeName) {
      case 'A':
        return !!el.href && el.rel != 'ignore';
      case 'INPUT':
        return el.type != 'hidden';
      case 'BUTTON':
      case 'SELECT':
      case 'TEXTAREA':
        return true;
      default:
        return false;
    }
  }
}

export function findAllFocus(targets: NodeListOf<ChildNode>): HTMLElement[] {
  const list: HTMLElement[] = []
  find(targets)

  return list
  
  function find(nodes: NodeListOf<ChildNode>){
    for (let i = 0; i < nodes.length; i++) {
      const el = nodes[i];
      if(_isFocusable(el)) list.push(el as HTMLElement)
  
      if(el.childNodes.length > 0) find(el.childNodes)
    }
  }

  function _isFocusable(el: any): boolean{
    if ( 
      el.tabIndex < 0 || 
      el.disabled || 
      (el.style && (el.style.visibility === 'hidden' || el.style.display === 'none'))
    ) { return false; }
  
    if (el.tabIndex >= 0) { return true }
  
    switch (el.nodeName) {
      case 'A':
        return !!el.href && el.rel != 'ignore';
      case 'INPUT':
        return el.type != 'hidden';
      case 'BUTTON':
      case 'SELECT':
      case 'TEXTAREA':
        return true;
      default:
        return false;
    }
  }
}
