<template>
  <div class="page">
    <a href="#ak-container" title="jump to main content" id="ak-jump">jump to main content</a>
    <a href="#ak-header" title="menu group" id="ak-header" accesskey="U" name="ak-header">:::</a>
    <div class="page-header">
      <h1><nuxt-link to="/" title="Home page">Piman</nuxt-link></h1>
      <nav aria-label="Piman" class="menu">
        <bpa-dropdown
          v-model="menuValue"
          :options="menuOptions"
          placeholder="Menu"
        />
      </nav>
    </div>
    <div class="page-container">
      <article>
        <section class="hero">
          <img src="/images/piman.svg" alt="piman logo" loading="lazy">
          <h2>Piman</h2>
          <p>An open-source accessibility UI framework</p>
          <div style="margin-bottom: 7.5rem;">
            <nuxt-link class="bpa-btn bpa-btn--primary" to="https://piman.notion.site/How-to-Use-e14a8f80aa3d40859f16916bbd16aa9b" title="Getting Start">Getting Start</nuxt-link>
            <nuxt-link class="bpa-btn" to="https://github.com/ya-sai/piman" title="Github">Github</nuxt-link>
          </div>
          <bpa-button class="bpa-btn--circle" style="display: flex;margin: 0 auto 0.5rem; align-items: center; justify-content: center;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Scroll Down Icon</title>
              <path d="M7.48182 11.8312L1.54795 5.89727C1.26177 5.61108 1.26177 5.1471 1.54795 4.86095L2.24004 4.16886C2.52574 3.88316 2.98877 3.88261 3.27514 4.16763L8 8.87035L12.7248 4.16763C13.0112 3.88261 13.4742 3.88316 13.7599 4.16886L14.452 4.86095C14.7382 5.14713 14.7382 5.61111 14.452 5.89727L8.51817 11.8312C8.23198 12.1173 7.76801 12.1173 7.48182 11.8312Z" fill="#222222"/>
            </svg>
            <span class="visually-hidden">Scroll Down</span>
          </bpa-button>
          Scroll Down
        </section>
      </article>
    </div>
    <div class="page-footer">
      sss
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, useMeta, ref, watch, useFetch } from '@nuxtjs/composition-api'
export default defineComponent({
  layout: 'landingpage',
  setup(_, {root}) {

    const menuValue = ref('')
    const menuOptions = [
    { 
      type: 'link',
      url: '#about',
      label: 'Jump to about',
    },
  ]
    return {
      menuValue, menuOptions
    }
  },
})
</script>
