<template>
  <div class="page">
    <div class="page-header">
      <bpa-button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <title>選單 Menu</title>
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </bpa-button>
      <bpa-breadcrumb :key="$route.path">
        <bpa-breadcrumb-item
          v-for="(pathItem, pathIndex) in path"
          :key="`pathIndex-${pathIndex}`"
          :title="`前往${pathItem.title}`"
          :to="pathItem.url"
        > {{ pathItem.title }}</bpa-breadcrumb-item>
      </bpa-breadcrumb>
    </div>
    <div class="page-main">
      <h2>下拉選單</h2>
      <article>
        <section>
          <h3>大小</h3>
          <bpa-dropdown
            v-model="value"
            :options="options"
            size="small"
            @click="onClick"
            listboxClass="abc"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            size="large"
            @click="onClick"
          />
        </section>
        <section>
          <h3>客製化文字</h3>
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            @click="onClick"
          />
        </section>
        <section>
          <h3>前綴插槽</h3>
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            size="small"
            @click="onClick"
           >
            <template v-slot:prefix>前綴插槽</template>
            <template v-slot:affix>後綴插槽</template>
          </bpa-dropdown>
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            @click="onClick"
           >
            <template v-slot:prefix>
              <img src="favicon.ico" alt=""/>
            </template>
          </bpa-dropdown>
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            size="large"
            @click="onClick"
           >
            <template v-slot:prefix>
              <img src="favicon.ico" alt=""/>
            </template>
          </bpa-dropdown>
        </section>
        <section>
          <h3>顏色</h3>
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="primary"
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="success"
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="warning"
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="danger"
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="primary-ghost"
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="success-ghost"
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="warning-ghost"
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="danger-ghost"
            @click="onClick"
          />
        </section>
        <section>
          <h3>停用</h3>
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            disabled
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="primary"
            disabled
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="success"
            disabled
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="warning"
            disabled
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="danger"
            disabled
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="primary-ghost"
            disabled
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="success-ghost"
            disabled
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="warning-ghost"
            disabled
            @click="onClick"
          />
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            theme="danger-ghost"
            disabled
            @click="onClick"
          />
        </section>
        <section>
          <h3>客製化展開寬度</h3>
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            optionWidth="100px"
            @click="onClick"
          />
        </section>
        <section>
          <h3>若下拉選單位於 position: fixed; 位置裡時</h3>
          <bpa-dropdown
            v-model="value"
            :options="options"
            placeholder="執行動作"
            fixed
            @click="onClick"
          />
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      value: '',
      options: [
        { type: 'link', url: '/', label: '<mark>內部連結</mark>', },
        { type: 'external-link', url: 'https://google.com', label: '外部連結' },
        { label: '功能按鈕', }
      ],
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  },
  methods: {
    onClick(item: any){
      console.log(item);
    }
  }
})
</script>

