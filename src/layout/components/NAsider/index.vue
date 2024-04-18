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
          ref="sideMenu"
          default-active="1"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          class="el-menu-vertical-demo"
          :style="`border-right:0px;`"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>日志管理</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <router-link to="/"><el-menu-item index="1-1">item one</el-menu-item></router-link>
              <router-link to="/item21"><el-menu-item index="1-2">item two</el-menu-item></router-link>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>系统管理</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>开发管理</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>基础管理</template>
          </el-menu-item>
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
import {
  Location,
  Menu as IconMenu
} from '@element-plus/icons-vue'
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  },
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
</style>