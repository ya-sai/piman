import { onMounted, onUnmounted } from "vue";

export default function (element: HTMLElement, cb: Function) {
  const clickOutside = (e: any) => {
    const target = e.target as HTMLElement;
    if (target && !element.contains(target)) {
      cb()
    }
  };

  onMounted(() => {
    window.addEventListener("click", clickOutside);
  });

  onUnmounted(() => {
    window.removeEventListener("click", clickOutside);
  });

}