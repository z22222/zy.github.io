<template>
  <div class="about">
    <div>{{ name }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue';
import { getUserList } from '@/http/api.js'
const route = useRoute()
const name = computed(() => {
  return route.path + '-' + route.params.userInfo
})
const getUserlist_1 = async () => {
  let data = await getUserList()
  console.log(data);
}
getUserlist_1()
</script>