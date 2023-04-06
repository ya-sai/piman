<script setup lang="ts">
import DemoButton from "@/views/DemoButton.vue";
import DemoCheckbox from "./views/DemoCheckbox.vue";
import DemoCard from "./views/DemoCard.vue";
import DemoTabs from "./views/DemoTabs.vue";
import DemoAccordion from "./views/DemoAccordion.vue";
import PiTabPanel from "./components/Tabs/PiTabPanel.vue";
import PiTabs from "./components/Tabs/PiTabs.vue";
import { ref } from "vue";
import DemoBreadcrumb from "./views/DemoBreadcrumb.vue";

const activeTab = ref('button')

</script>

<template>
  
  <pi-tabs v-model="activeTab">
    <pi-tab-panel name="button" label="按鈕"><DemoButton/></pi-tab-panel>
    <pi-tab-panel name="checkbox" label="核取方塊"><DemoCheckbox/></pi-tab-panel>
    <pi-tab-panel name="card" label="卡片"><DemoCard/></pi-tab-panel>
    <pi-tab-panel name="tabs" label="標籤"><DemoTabs/></pi-tab-panel>
    <pi-tab-panel name="accordion" label="手風琴"><DemoAccordion/></pi-tab-panel>
    <pi-tab-panel name="breadcrumb" label="頁面導覽(麵包屑)"><DemoBreadcrumb/></pi-tab-panel>
  </pi-tabs>
</template>

<style scoped>
</style>
