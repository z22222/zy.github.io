<template>
  <div class="app_container">
    <div class="nav" v-if="route.name !== 'Login'">
      <Layout />
    </div>
    <router-view class="routerview" />
  </div>
</template>

<script lang="ts" setup>
import Layout from './components/Layout.vue';
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
watchEffect(() => {
  // let path = route.fullPath
  // console.log(route.meta.nav);
})
</script>

<style lang="less" scoped>
.app_container {
  display: flex;
  width: 100vw;
  height: 100vh;

  .nav {
    width: fit-content;
  }

  .routerview {
    flex: 1;
  }
}
</style>
