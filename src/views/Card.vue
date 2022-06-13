<template>
  <div>
    <section>
      <h2>卡片</h2>
      <article>
        <section>
          <h3>基本</h3>
          <bpa-card>
            Cotnent
          </bpa-card>
        </section>
        <section>
          <h3>內容無padding</h3>
          <bpa-card nopadding>
            Cotnent
          </bpa-card>
        </section>
        <section>
          <h3>客製化header</h3>
          <bpa-card header="卡片標題">
            Cotnent
          </bpa-card>
          <bpa-card>
            <template v-slot:header>
              <mark>卡片標題</mark>
              <bpa-button theme="primary" size="small">查看更多</bpa-button>
            </template>
            Cotnent
          </bpa-card>
        </section>
        <section>
          <h3>客製化header+陰影</h3>
          <bpa-card shadow>
            <template v-slot:header>
              <mark>卡片標題</mark>
              <bpa-button theme="primary" size="small">查看更多</bpa-button>
            </template>
            Cotnent
            <template v-slot:footer>
              <bpa-button theme="primary">Button</bpa-button>
              <bpa-button>Button</bpa-button>
            </template>
          </bpa-card>
        </section>
        <section>
          <h3>客製化header+陰影+footer</h3>
          <bpa-card shadow>
            <template v-slot:header>
              <mark>卡片標題</mark>
              <bpa-button theme="primary" size="small">查看更多</bpa-button>
            </template>
            Cotnent
            <template v-slot:footer>
              <bpa-button theme="primary">Button</bpa-button>
              <bpa-button>Button</bpa-button>
            </template>
          </bpa-card>
        </section>
        <section>
          <h3>客製化header+陰影+footer+客製化內容</h3>
          <bpa-card shadow  nopadding>
            <template v-slot:header>
              <mark>卡片標題</mark>
              <bpa-button theme="primary" size="small">查看更多</bpa-button>
            </template>
            <bpa-accordion>
              <bpa-accordion-item>
                內容1
              </bpa-accordion-item>
              <bpa-accordion-item>
                內容2
              </bpa-accordion-item>
            </bpa-accordion>
            <template v-slot:footer>
              <bpa-button theme="primary">Button</bpa-button>
              <bpa-button>Button</bpa-button>
            </template>
          </bpa-card>
        </section>
      </article>
    </section>
  </div>
</template>