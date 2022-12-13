<template>
    <el-menu :default-active="route.meta.navmark as string" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
        @close="handleClose" @select="handleSelect">
        <el-menu-item index="/home">
            <el-icon>
                <location />
            </el-icon>
            <template #title>Home</template>
        </el-menu-item>
        <el-menu-item index="/about">
            <el-icon><icon-menu /></el-icon>
            <template #title>About</template>
        </el-menu-item>
    </el-menu>
    <div class="checkicon">
        <el-icon @click="isCollapse = !isCollapse">
            <Expand v-if="isCollapse" />
            <Fold v-else />
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import {
    Menu as IconMenu,
    Location,
    Expand,
    Fold
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const route = useRoute()
const router = useRouter()


const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
const handleSelect = (index: any) => {
    const userInfo = JSON.parse(localStorage.userInfo).userName
    router.push({ path: index == '/about' ? `${index}/${userInfo}` : index })
}
</script>

<style scoped lang="less">
.el-menu {
    height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}

.checkicon {
    position: fixed;
    bottom: 0px;
    left: 10px;
    cursor: pointer;
}
</style>