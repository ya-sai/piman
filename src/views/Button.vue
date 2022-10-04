<template>
  <div>
    <section>
      <h2>按鈕</h2>
      <article>
        <section>
          <h3>大小</h3>
          <bpa-button size="small">小按鈕</bpa-button>
          <bpa-button>預設按鈕</bpa-button>
          <bpa-button size="large">大按鈕</bpa-button>
        </section>
        <section>
          <h3>風格</h3>
          <bpa-button theme="primary">主題色</bpa-button>
          <bpa-button theme="success">成功</bpa-button>
          <bpa-button theme="warning">注意</bpa-button>
          <bpa-button theme="danger">警告</bpa-button>
          <bpa-button theme="primary-ghost">主題色</bpa-button>
          <bpa-button theme="success-ghost">成功</bpa-button>
          <bpa-button theme="warning-ghost">注意</bpa-button>
          <bpa-button theme="danger-ghost">警告</bpa-button>
        </section>
        <section>
          <h3>搭配 icon</h3>
          <bpa-button theme="primary">
            <span aria-hidden="true">😃</span>如果 icon 是純裝飾，在螢幕報讀時隱藏
          </bpa-button>
        </section>
        <section>
          <h3>停用</h3>
          <bpa-button disabled>預設按鈕</bpa-button>
          <bpa-button theme="primary" disabled>主題色</bpa-button>
          <bpa-button theme="success" disabled>成功</bpa-button>
          <bpa-button theme="warning" disabled>注意</bpa-button>
          <bpa-button theme="danger" disabled>警告</bpa-button>
          <bpa-button theme="primary-ghost" disabled>主題色</bpa-button>
          <bpa-button theme="success-ghost" disabled>成功</bpa-button>
          <bpa-button theme="warning-ghost" disabled>注意</bpa-button>
          <bpa-button theme="danger-ghost" disabled>警告</bpa-button>
        </section>
        <section>
          <h3>載入中</h3>
          <bpa-button :loading="true"></bpa-button>
          <bpa-button :loading="true">預設按鈕</bpa-button>
          <bpa-button theme="primary" :loading="true">主題色</bpa-button>
          <bpa-button theme="success" :loading="true">成功</bpa-button>
          <bpa-button theme="warning" :loading="true">注意</bpa-button>
          <bpa-button theme="danger" :loading="true">警告</bpa-button>
          <bpa-button theme="primary-ghost" :loading="true">主題色</bpa-button>
          <bpa-button theme="success-ghost" :loading="true">成功</bpa-button>
          <bpa-button theme="warning-ghost" :loading="true">注意</bpa-button>
          <bpa-button theme="danger-ghost" :loading="true">警告</bpa-button>
        </section>
      </article>
    </section>
  </div>
</template>