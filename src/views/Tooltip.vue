<template>
  <section>
    <h2>小提示</h2>
    <article>
      <section>
        <h3>基本</h3>
        <div class="flex-group">
          <div>
            <bpa-tooltip text="Although not strictly associated with the MVVM pattern, Vue’s design was partly inspired by it. As a convention, we often use the variable vm (short for ViewModel) to refer to our Vue instance.">
              <bpa-button>超過畫面靠左</bpa-button>
            </bpa-tooltip>
          </div>
          <div>
            <bpa-tooltip text="When you create a Vue instance, you pass in an options object. The majority of this guide describes how you can use these options to create your desired behavior. For reference, you can also browse the full list of options in the API reference.">
              <bpa-button>預設置中</bpa-button>
            </bpa-tooltip>
          </div>
          <div>
            <bpa-tooltip text="A Vue application consists of a root Vue instance created with new Vue, optionally organized into a tree of nested, reusable components. For example, a todo app’s component tree might look like this: Vue application consists of a root Vue instance created with new Vue, optionally organized into a tree of nested, reusable components. For example, a todo app’s component tree might look like this: Vue application consists of a root Vue instance created with new Vue, optionally organized into a tree of nested, reusable components. For example, a todo app’s component tree might look like this:">
              <bpa-button>超過畫面靠右</bpa-button>
            </bpa-tooltip>
          </div>
        </div>
      </section>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.flex-group {
  display: flex;
  justify-content: space-between;
}
</style>