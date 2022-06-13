<template>
  <div
    role="navigation"
    :aria-label="t('breadcrumb.current_page')"
    class="bpa-breadcrumb"
  >
    <ol>
      <slot></slot>
    </ol>
  </div>
</template>

<script lang="ts">
import BpaI18n from '@/locale';
import Vue from 'vue'
export default Vue.extend({
  name: 'BpaBreadcrumb',
  mixins: [ BpaI18n ],
  provide() {
    return {
      bpaBreadcrumb: this
    };
  },
  mounted() {
    const items = this.$el.querySelectorAll('ol > li');
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page');
    }
  },
})
</script>