<template>
  <div>
    <section>
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
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
    }
  },
  methods:{
  }
})
</script>
