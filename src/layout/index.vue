<template>
  <el-container style="height: 100%;">
    <n-asider :is-collapse="isCollapse" />
    <el-container>
      <n-header :value="isCollapse" @update="isCollapseHandler" />
      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

import NAsider from './components/NAsider/index.vue'
import NHeader from './components/NHeader/index.vue'
const windowHeight = ref(window.innerHeight)
const windowWidth = ref(window.innerWidth)
const isCollapse = ref(false)

function handleResize() {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 768) {
    isCollapse.value = true
  } else {
    isCollapse.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化获取高度
});
 
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const isCollapseHandler = (val: boolean) => {
  isCollapse.value = val
}
</script>

