<template>
  <transition @after-leave="handleAfterLeave" name="fade">
    <div
      v-show="visible"
      role="alert"
      :id="id"
      :class="[
        'bpa-msg',
        theme ? `bpa-msg--${ theme }` : ''
      ]"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="bpa-msg-wrap">
        <div>
          <div v-if="dangerHTML == false" class="prefix">{{ prefix }}</div>
          <div v-else  v-html="prefix" class="prefix"></div>
          <a
            href="javascript:;"
            accesskey="M"
            class="accesskey"
            @focus="clearTimer"
            @blur="startTimer"
            :title="t('msg.area')"
          >
            :::
          </a>
        </div>
        <div class="msg-content">{{ msg }}</div>
        <button
          @click="close"
          @focus="clearTimer"
          @blur="startTimer"
          class="close-msg"
        >✖<span class="visually-hidden">{{ t('msg.close') }}</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import BpaI18n from '../locale';
import { defaultMsgOpt } from "./BpaMsg";
export default {
  name: 'BpaMsg',
  mixins:[ BpaI18n ],
  data() {
    return defaultMsgOpt
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    handleAfterLeave() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },

    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
  mounted() {
    this.visible = true
    this.startTimer()
  }
}
</script>