<template>
  <article>
    <section>
      <h3>大小</h3>
      <pi-button size="small">小按鈕</pi-button>
      <pi-button>預設按鈕</pi-button>
      <pi-button size="large">大按鈕</pi-button>
    </section>
    <section>
      <h3>風格</h3>
      <pi-button theme="primary">主題色</pi-button>
      <pi-button theme="success">成功</pi-button>
      <pi-button theme="warning">注意</pi-button>
      <pi-button theme="danger">警告</pi-button>
      <pi-button theme="primary-ghost">主題色</pi-button>
      <pi-button theme="success-ghost">成功</pi-button>
      <pi-button theme="warning-ghost">注意</pi-button>
      <pi-button theme="danger-ghost">警告</pi-button>
    </section>
    <section>
      <h3>停用</h3>
      <pi-button disabled>預設按鈕</pi-button>
      <pi-button theme="primary" disabled>主題色</pi-button>
      <pi-button theme="success" disabled>成功</pi-button>
      <pi-button theme="warning" disabled>注意</pi-button>
      <pi-button theme="danger" disabled>警告</pi-button>
      <pi-button theme="primary-ghost" disabled>主題色</pi-button>
      <pi-button theme="success-ghost" disabled>成功</pi-button>
      <pi-button theme="warning-ghost" disabled>注意</pi-button>
      <pi-button theme="danger-ghost" disabled>警告</pi-button>
    </section>
    <section>
      <h3>載入中</h3>
      <pi-button :loading="true"></pi-button>
      <pi-button :loading="true">預設按鈕</pi-button>
      <pi-button theme="primary" :loading="true">主題色</pi-button>
      <pi-button theme="success" :loading="true">成功</pi-button>
      <pi-button theme="warning" :loading="true">注意</pi-button>
      <pi-button theme="danger" :loading="true">警告</pi-button>
      <pi-button theme="primary-ghost" :loading="true">主題色</pi-button>
      <pi-button theme="success-ghost" :loading="true">成功</pi-button>
      <pi-button theme="warning-ghost" :loading="true">注意</pi-button>
      <pi-button theme="danger-ghost" :loading="true">警告</pi-button>
    </section>
  </article>
</template>

<script lang="ts" setup>
//@ts-ignore
import { PiButton } from "/dist/piman-vue3.es";

</script>

<style lang="scss" scoped>
</style>