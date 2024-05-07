<template>
  <el-menu-item :index="item.id"  v-if="!item.children || item.children.length === 0" @click="jumpPath(item)">
      <el-icon><component :is="item.icon" /></el-icon>
      <template #title><span>{{ item.title }}</span></template>
  </el-menu-item>
  <el-sub-menu v-else :index="item.id">
    <template #title>
      <el-icon><component :is="item.icon" /></el-icon>
      <span>{{ item.title }}</span>
    </template>
    <n-sub-menu-recursive v-for="(child, index) in item.children" :key="child.id" :item="child" />
  </el-sub-menu>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const jumpPath = (item) => {
  if(!item.path.startsWith('http')){
    router.push(item.path)
  } else {
    window.open(item.path)
  }
  
}
</script>