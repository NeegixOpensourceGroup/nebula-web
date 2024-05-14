<template>
    <el-aside width="auto" style="border-right: 1px solid #dcdfe6;height: 100%;display: flex;flex-direction: column;">
      <div style="text-align: center;height: 60px;">
        <div v-if="!isCollapse" style="display: flex;flex-direction: column; justify-content: center;height: 60px;">
          <div>
            <img src="/logo.svg" alt="logo" style="width: 30px;height: 30px;">
            <div style="font-size: 12px; color:blueviolet">Nebula Preview Edition</div>
          </div>
        </div>
        <div v-if="isCollapse" style="display: flex;flex-direction: column; justify-content: center;height: 60px;">
          <div><img src="/logo.svg" alt="logo" style="width: 40px;height: 40px;"></div>
        </div>
      </div>
      <el-scrollbar style="flex: 1;">
        <el-menu
          :router="$route.path.startsWith('http')"
          :default-active="$route.name"
          ref="sideMenu"
          default-active="1"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          class="el-menu-vertical"
          style="border-right:0px"
        >
        <n-sub-menu-recursive v-for="(item, index) in siderMenu" :key="item.id" :item="item" />
          <!-- <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>日志管理</span>
            </template>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu> -->
        </el-menu>
      </el-scrollbar>
      <div :style="`display:flex; display: -webkit-flex;-webkit-justify-content: center;box-sizing: border-box;justify-content: center;height: ${!isCollapse ? '30' : '45'}px;position: relative;`">
        <span :style="`font-size: 10px;color: #909399;height: ${!isCollapse ? '30' : '45'}px; vertical-align: middle;position: absolute; bottom: 0px; text-align: center;`">
            Copyright © {{ new Date().getFullYear() }} By NOSG
        </span>
      </div>
    </el-aside>
</template>
<script lang="ts" setup>
import NSubMenuRecursive from './NSubMenuRecursive.vue'
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '@/layout/stores/layoutStore'
const { isCollapse, siderMenu } = storeToRefs(useLayoutStore())

const handleOpen = (key: string, keyPath: string[]) => {
  //console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  //console.log(key, keyPath)
}
</script>
<style>
.el-menu-vertical:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
</style>