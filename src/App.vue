<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import mainTabBar from './components/content/mainTabBar/mainTabBar.vue'
export default {
  name: "App",
  components: {
    mainTabBar
  },
};
</script>

    MainTabBar
<style>
@import "assets/css/base.css";
</style>
