<template>
  <div class="home">
    x:{{x}}
    y:{{y}}
    <!-- 在线编辑器 -->
  </div>
</template>

<script lang="ts" setup>
import { useMouse } from '@/hooks/useMouse.js';
const { x, y } = useMouse()
</script>
<style lang="less" scoped>
.box {
  display: block;
  margin-top: 20px;
  width: 80%;
  height: 40vh;
  font-size: 18px;
}
</style>
