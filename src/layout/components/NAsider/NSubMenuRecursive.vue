<template>
  <el-menu-item :index="item.name"  v-if="!item.children || item.children.length === 0" @click="jumpPath(item)">
      <el-icon><component :is="item.icon" /></el-icon>
      <template #title><span>{{ item.title }}</span></template>
  </el-menu-item>
  <el-sub-menu v-else :index="item.name">
    <template #title>
      <el-icon><component :is="item.icon" /></el-icon>
      <span>{{ item.title }}</span>
    </template>
    <n-sub-menu-recursive v-for="(child, index) in item.children" :key="child.name" :item="child" />
  </el-sub-menu>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useLayoutStore } from '@/layout/stores/layoutStore'

const { addTab } = useLayoutStore()
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
    addTab(item.title, item.name, item.path)
  } else {
    window.open(item.path)
  }
  
}
</script>