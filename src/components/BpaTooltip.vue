<script lang="ts">
import Vue from 'vue'

interface Data { elTooltip: HTMLElement, closeTimeout: number|undefined }
interface Methods { open(): void, close(): void}
type Computed = unknown
interface Props { text: string|number }

export default Vue.extend<Data, Methods, Computed, Props>({
  name:"BpaTooltip",
  props:{
    text:{
      default:"",
      type: [String, Number]
    }
  },
  data(){
    return {
      elTooltip: document.createElement('div'),
      closeTimeout: undefined,
    }
  },
  render(h){
    if(this.$slots.default && this.$slots.default.length > 1) console.warn("[bpa-tooltip warn]: bpa-tooltip tag accepts only one child node.");
    const slot = this.$slots.default ? this.$slots.default[0] : h('span')
    return slot
  },
  created(){
    
    this.elTooltip.classList.add('bpa-tooltip')
    let container = document.createElement("div");
    container.classList.add('bpa-tooltip-container')
    container.innerText = this.text.toString()
    this.elTooltip.appendChild(container)
  },
  mounted(){
    this.$el.addEventListener('mouseover', this.open )
    this.$el.addEventListener('mouseleave', this.close )
    this.elTooltip.addEventListener('mouseover', this.open )
    this.elTooltip.addEventListener('mouseleave', this.close )

    document.addEventListener('focus',(e)=>{
      if(e.target === this.$el) this.open()
      else this.close()
    }, true)
  },
  methods:{
    open(){
      clearTimeout(this.closeTimeout)
      const coor = this.$el.getBoundingClientRect()
      document.body.appendChild(this.elTooltip)
      this.elTooltip.style.top = window.pageYOffset + coor.top + coor.height + 'px'
      //如果超出畫面左邊
      if(coor.left - ( this.elTooltip.offsetWidth / 2 ) < 0) {
        this.elTooltip.style.left = coor.left + 'px'
        this.elTooltip.classList.add('bpa-tooltip--lr')
      } 
      //如果超出畫面右邊
      else if(coor.left + ( this.elTooltip.offsetWidth / 2 ) > window.innerWidth){ 
        this.elTooltip.style.right = (window.innerWidth - coor.right) + 'px'
        this.elTooltip.style.left = 'inherit'
        this.elTooltip.classList.add('bpa-tooltip--rl')
      }
      else {
        this.elTooltip.style.left = coor.left - ( this.elTooltip.offsetWidth / 2 ) + ( coor.width / 2 ) + 'px'
      }
      this.$nextTick().then(()=>{
        this.elTooltip.classList.add('bpa-tooltip--show')
      })
    },
    close(){
      this.closeTimeout = setTimeout(() => {
        this.elTooltip.classList.remove('bpa-tooltip--show')
      }, 300);
      this.closeTimeout = setTimeout(() => {
        this.elTooltip.classList.remove('bpa-tooltip--lr')
        this.elTooltip.classList.remove('bpa-tooltip--rl')
        this.elTooltip.style.left = '';
        this.elTooltip.style.top = '';
        this.elTooltip.style.right= '';
      }, 700);
    },
  },
  destroyed(){
    if(document.body.contains(this.elTooltip)){
      document.body.removeChild(this.elTooltip)
    }
  }
})
</script>