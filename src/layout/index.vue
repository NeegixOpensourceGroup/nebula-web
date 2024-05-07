<template>
  <el-container>
    <n-asider />
    <el-main>
      <n-header />
      <el-main>
        <iframe v-if="$route.meta.externalUrl" :src="$route.meta.externalUrl" width="100%" :height="windowHeight-96" frameborder="0"></iframe>
        <el-scrollbar>
          <div v-if="!$route.meta.externalUrl" :style="`height:${windowHeight-90}px;`">
            <router-view ></router-view>
          </div>
        </el-scrollbar>
      </el-main>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

import NAsider from './components/NAsider/index.vue'
import NHeader from './components/NHeader/index.vue'
import { useLayoutStore } from './stores/layoutStore'

const {downCollapse, upCollapse, generatedMenu } = useLayoutStore()
const windowHeight = ref(window.innerHeight)
const windowWidth = ref(window.innerWidth)

function handleResize() {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 768) {
    downCollapse()
  } else {
    upCollapse()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化获取高度
  generatedMenu()
  //console.log(useRouter().getRoutes())
});
 
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

</script>

