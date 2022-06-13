<template>
  <li class="bpa-breadcrumb__item">
    <router-link
      v-if="to"
      :to="to"
      :title="title"
    >
      <slot></slot>
    </router-link>
  </li>
</template>
<script>
  export default {
    name: 'BpaBreadcrumbItem',
    props: {
      to: {},
      title: {
        type: String,
        required: true
      },
    },
  };
</script>