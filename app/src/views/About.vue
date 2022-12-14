<template>
  <div class="about">
    <div>{{ name }}</div>
    <el-table v-loading="state.isLoading" :data="state.tableData" stripe border max-height="250"
      style="width: 620px;margin-top:20px">
      <el-table-column v-for="item in tableColumn" :prop="item.prop" :fixed="item.fixed" :label="item.label"
        :width="item.width" :align="item.align" />
    </el-table>

  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed, reactive, onMounted } from 'vue';
import { getUserList } from '@/http/api.js'
const route = useRoute()
const name = computed(() => {
  return route.path + '-' + route.params.userInfo
})
interface stateType {
  tableData: tableDatatype[],
  isLoading: boolean
}
interface tableDatatype {
  tableData: number,
  user_name: string,
  password: string,
  submission_date: string,
}
const state: stateType = reactive({
  tableData: [],
  isLoading: true,
});
const tableColumn = [
  {
    prop: "user_id", //数据源
    label: "user_id",
    width: "80",
    fixed: 'left',
    align: 'center'
  },
  {
    prop: "user_name",
    label: "user_name",
    width: "180",
  },
  {
    prop: "submission_date",
    label: "submission_date",
    width: "220"
  },
  {
    prop: "password",
    label: "password",
    width: "180",
  },
]

const getUserlist_1 = async () => {
  let { data: { data } } = await getUserList()
  state.tableData = data.userList
  setTimeout(() => {
    state.isLoading = false
  }, 1000);
}
onMounted(() => {
  getUserlist_1()
})
</script>

<style lang="less" scoped>

</style>