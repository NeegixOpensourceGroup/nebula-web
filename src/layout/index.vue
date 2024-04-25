<template>
  <el-container style="height: 100%;">
    <n-asider />
    <el-container>
      <n-header />
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
import { useLayoutStore } from './stores/layoutStore'
const layoutStore = useLayoutStore()

const windowHeight = ref(window.innerHeight)
const windowWidth = ref(window.innerWidth)

function handleResize() {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 768) {
    layoutStore.trueCollapse()
  } else {
    layoutStore.falseCollapse()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化获取高度
});
 
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

