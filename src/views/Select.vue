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
      <h2>下拉選擇</h2>
      <article>
        <section>
          <h3>大小</h3>
          <bpa-select
            v-model="value"
            :options="options"
            size="small"
            id="custom"
            listboxClass="aaa"
          />
          <bpa-select
            v-model="value"
            :options="options"
          />
          <bpa-select
            v-model="value"
            :options="options"
            size="large"
          />
        </section>
        <section>
          <h3>客製化文字</h3>
          <bpa-select
            v-model="value"
            :options="options"
            placeholder="請點擊選擇"
          />
        </section>
        <section>
          <h3>不顯示清空按鈕</h3>
          <bpa-select
            v-model="value"
            :options="options"
            placeholder="請點擊選擇"
            disabledClear
          />
        </section>
        <section>
          <h3>前、後綴插槽</h3>
          <bpa-select
            v-model="value"
            :options="options"
            size="small"
          >
            <template v-slot:prefix>前綴插槽</template>
            <template v-slot:affix>後綴插槽</template>
          </bpa-select>
          <bpa-select
            v-model="value"
            :options="options"
          >
            <template v-slot:prefix>
              <img src="favicon.ico" alt=""/>
            </template>
            <template v-slot:affix>
              <img src="favicon.ico" alt=""/>
            </template>
          </bpa-select>
          <bpa-select
            v-model="value"
            :options="options"
            size="large"
          >
            <template v-slot:prefix>
              <img src="favicon.ico" alt=""/>
            </template>
            <template v-slot:affix>
              <img src="favicon.ico" alt=""/>
            </template>
          </bpa-select>
        </section>
        <section>
          <h3>顏色</h3>
          <bpa-select
            v-model="value"
            :options="options"
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="primary"
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="success"
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="warning"
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="danger"
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="primary-ghost"
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="success-ghost"
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="warning-ghost"
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="danger-ghost"
          />
        </section>
        <section>
          <h3>停用</h3>
          <bpa-select
            v-model="value"
            :options="options"
            disabled
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="primary"
            disabled
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="success"
            disabled
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="warning"
            disabled
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="danger"
            disabled
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="primary-ghost"
            disabled
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="success-ghost"
            disabled
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="warning-ghost"
            disabled
          />
          <bpa-select
            v-model="value"
            :options="options"
            theme="danger-ghost"
            disabled
          />
        </section>
        <section>
          <h3>客製化展開寬度</h3>
          <bpa-select
            v-model="value"
            :options="options"
            optionWidth="100px"
          />
        </section>
        <section>
          <h3>多選</h3>
          <bpa-select
            v-model="valueM"
            :options="options"
            multiple
          >
            <template v-slot:prefix>前綴插槽</template>
            <template v-slot:affix>後綴插槽</template>
          </bpa-select>
          <bpa-select
            v-model="valueM"
            :options="options"
            multiple="accordion"
          />
        </section>
        <section>
          <h3>簡易搜尋</h3>
          <bpa-select
            v-model="valueM"
            :options="options"
            multiple
            :toolbar="['search']"
          />
        </section>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Select',
  data() {
    return {
      options: [
        { label: 'label1', value: '1' },
        { label: 'label2', value: '2' },
        { label: 'label3', value: '3' },
        { 
          type: 'group',
          label: '第一群',
          options: [
            { label: 'label10', value: '10' },
            { label: 'label20', value: '20' },
            { label: 'label30', value: '30' }
          ]
        },
        { 
          type: 'group',
          label: '第二群',
          options: [
            { label: 'label11', value: '11' },
            { label: 'label21', value: '21' },
            { label: 'label31', value: '31' }
          ]
        },
        { label: 'label2', value: '42' },
        { label: 'label3', value: '43' },
      ],
      value: '',
      valueM: '',
      path: [
        { title: '🏠首頁', url: '/'},
        { title: '表單範例',  url: '/formvalidate'},
        { title: '現在頁面'},
      ]
    }
  },
  methods:{
  }
})
</script>
