<template>
  <article>
    <section>
      <h3>基本</h3>
      <pi-card>
        Cotnent
      </pi-card>
    </section>
    <section>
      <h3>內容無padding</h3>
      <pi-card nopadding>
        Cotnent
      </pi-card>
    </section>
    <section>
      <h3>客製化header</h3>
      <pi-card header="卡片標題">
        Cotnent
      </pi-card>
      <pi-card>
        <template v-slot:header>
          <mark>卡片標題</mark>
          <pi-button theme="primary" size="small">查看更多</pi-button>
        </template>
        Cotnent
      </pi-card>
    </section>
    <section>
      <h3>客製化header+陰影</h3>
      <pi-card shadow>
        <template v-slot:header>
          <mark>卡片標題</mark>
          <pi-button theme="primary" size="small">查看更多</pi-button>
        </template>
        Cotnent
        <template v-slot:footer>
          <pi-button theme="primary">Button</pi-button>
          <pi-button>Button</pi-button>
        </template>
      </pi-card>
    </section>
    <section>
      <h3>客製化header+陰影+footer</h3>
      <pi-card shadow>
        <template v-slot:header>
          <mark>卡片標題</mark>
          <pi-button theme="primary" size="small">查看更多</pi-button>
        </template>
        Cotnent
        <template v-slot:footer>
          <pi-button theme="primary">Button</pi-button>
          <pi-button>Button</pi-button>
        </template>
      </pi-card>
    </section>
    <section>
      <h3>客製化header+陰影+footer+客製化內容</h3>
      <pi-card shadow  nopadding>
        <template v-slot:header>
          <mark>卡片標題</mark>
          <pi-button theme="primary" size="small">查看更多</pi-button>
        </template>
        <pi-accordion>
          <pi-accordion-item>
            內容1
          </pi-accordion-item>
          <pi-accordion-item>
            內容2
          </pi-accordion-item>
        </pi-accordion>
        <template v-slot:footer>
          <pi-button theme="primary">Button</pi-button>
          <pi-button>Button</pi-button>
        </template>
      </pi-card>
    </section>
  </article>
</template>

<script lang="ts" setup>
//@ts-ignore
import { PiButton, PiCard, PiAccordion, PiAccordionItem } from "/dist/piman-vue3.es";

</script>

<style lang="scss" scoped>
</style>