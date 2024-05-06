<template>
  <router-link :to="item.path" v-if="!item.children || item.children.length === 0">
    <el-menu-item :index="item.id">
      <el-icon><component is="apple" /></el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </router-link>
  <el-sub-menu v-else :index="item.id">
    <template #title>
      <el-icon><component is="Menu" /></el-icon>
      <span>{{ item.title }}</span>
    </template>
    <n-sub-menu-recursive v-for="(child, index) in item.children" :key="child.id" :item="child" />
  </el-sub-menu>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>