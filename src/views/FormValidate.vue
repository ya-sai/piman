<template>
  <div>
    <section>
      <h2>表單驗證範例</h2>
      <article>
        <section>
          <bpa-form
            :model="exampleForm"
            ref="refExampleForm"
            :rules="exampleRules"
          >
            <bpa-form-item
              label="姓名"
              required
              prop="name"
              labelFor="testModelId1"
              @validate="onValidate"
            >
              <bpa-input
                v-model="exampleForm.name"
                id="testModelId1"
              />
            </bpa-form-item>
            <fieldset class="bpa-fieldset">
              <legend>工作經歷</legend>
              <div class="bpa-fieldset-container">
                <bpa-form-item
                  label="公司"
                  prop="company"
                  labelFor="testModelId2"
                >
                  <bpa-input
                    v-model="exampleForm.company"
                    id="testModelId2"
                  />
                </bpa-form-item>
                <bpa-form-item
                  prop="position"
                  label="職務類別"
                  required
                >
                  <bpa-radio id="aaa" name="testname" value="1" v-model="exampleForm.position">正值</bpa-radio>
                  <bpa-radio id="bbb" name="testname" disabled value="2" v-model="exampleForm.position">兼職</bpa-radio>
                  <bpa-radio id="ccc" name="testname" value="3" v-model="exampleForm.position">義工</bpa-radio>
                </bpa-form-item>
              </div>
            </fieldset>
            <bpa-form-item
              prop="trip2"
              label="員工旅遊2"
              labelFor="bpa-select-trip2-btn"
              required
            >
              <bpa-select
                :options=options
                id="trip2"
                v-model="exampleForm.trip2"
                placeholder="請選擇員工旅遊2選項"
              />
            </bpa-form-item>
            <bpa-form-item
              prop="trip"
              label="員工旅遊"
              labelFor="bpa-select-trip-btn"
              required
            >
              <bpa-select
                :options=options
                id="trip"
                v-model="exampleForm.trip"
                placeholder="請選擇員工旅遊選項"
              />
            </bpa-form-item>
            <bpa-form-item
              prop="address"
              label="戶籍地"
              labelFor="bpa-select-address1-btn bpa-select-address2-btn bpa-select-address3-btn"
            >
              <div class="flex-group">
                <bpa-select
                  :options=optAddress
                  id="address1"
                  v-model="exampleForm.address[0]"
                />
                <bpa-select
                  :options=optAddress
                  id="address2"
                  v-model="exampleForm.address[1]"
                />
                <bpa-select
                  :options=optAddress
                  id="address3"
                  v-model="exampleForm.address[2]"
                />
              </div>
             
            </bpa-form-item>
            <bpa-form-item
              prop="hobbies"
              label="興趣"
              required
            >
              <bpa-checkbox id="hobby_explore" name="hobbies" v-model="exampleForm.hobbies" value="explore">探險</bpa-checkbox>
              <bpa-checkbox id="hobby_walk" name="hobbies" v-model="exampleForm.hobbies" value="walk" disabled>散步</bpa-checkbox>
              <bpa-checkbox id="hobby_eat" name="hobbies" v-model="exampleForm.hobbies" value="eat">吃饅頭</bpa-checkbox>
              <bpa-checkbox id="hobby_flower" name="hobbies" v-model="exampleForm.hobbies" value="flower" disabled>賞花</bpa-checkbox>
            </bpa-form-item>
            <bpa-form-item
              prop="private"
              label="是否願意公開個資"
            >
              <bpa-switch
                labelText="是否願意公開個資"
                id="switch"
                v-model="exampleForm.private"
              ></bpa-switch>
            </bpa-form-item>
            <bpa-button theme="primary" @click="onSubmit('elForm')">
              送出
            </bpa-button>
            <bpa-button theme="primary-ghost">
              重填
            </bpa-button>
          </bpa-form>
        </section>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name:"FormValidate",
  data() {
    return {
      errPrivate: '',
      exampleForm: {
        name: "千尋",
        company: "油湯屋",
        position: "",
        trip: "",
        trip2: "",
        address: ["ja", "chiba", ""],
        hobbies: [],
        private: false
      },
      exampleRules: {
        name: [
          { required: true, message: '姓名為必填' },
          { min: 3, max: 5, message: '姓名至少3~5個字', trigger: 'change' }
        ],
        trip:[
          { required: true, message: '選擇旅遊地點', trigger: 'change' },
        ],
        hobbies:[
          { len: 2, message:"請選擇兩個興趣", type:'array', trigger: 'change'}
        ],
      },
      options: [
        { label: '國外旅遊', value: 'international' },
        { label: '國內旅遊', value: 'domestic' }
      ],
      optAddress:[
        { label: '日本', value: 'ja' },
        { label: '千葉', value: 'chiba' },
        { label: '成田', value: 'narita' },
      ],

    }
  },
  methods:{
    onSubmit(){
      console.log(this.exampleForm);
      (this.$refs.refExampleForm as Vue & {validate: any}).validate().then((rsp: any)=>{
        console.log(rsp);
        this.errPrivate = "總之不給過"
      }).catch((err: any)=>{
        console.log(err);

      })
    },
    onValidate(rsp: {valid: boolean, message: string, prop: string}){
      console.log(rsp);
    }
  }
})
</script>

<style lang="scss" scoped>
.flex-group {
  display: flex;
  flex-direction: row;
}
</style>