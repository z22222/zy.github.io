<template>
  <div class="about">
    <div>{{ name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';
const route = useRoute()
const name = computed(() => {
  return route.path + '-' + route.params.userInfo
})
</script>