<template>
  <el-container style="height: 100%;">
    <el-aside width="auto" style="border-right: 1px solid #dcdfe6;height: 100%;display: flex;flex-direction: column;">
      <div style="text-align: center;height: 60px;">
        <div v-if="!isCollapse" style="display: flex;flex-direction: column; justify-content: center;height: 60px;">
          <div>Nebula</div>
          <div style="font-size: 10px; color:blueviolet">Preview Edition</div>
        </div>
        <div v-if="isCollapse" style="display: flex;flex-direction: column; justify-content: center;height: 60px;">
          <div>NE</div>
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
    <el-container>
      <el-header style="font-size: 12px;height: 90px;">
        <div class="container">
          <div class="left">
            <div style="display: flex;flex-direction: column; justify-content: flex-end;height: 60px;">
              <el-icon :size="25" @click="isCollapse= !isCollapse" style="cursor: pointer;" color="#909399">
                <component :is="!isCollapse ? Fold : Expand" />
              </el-icon>
            </div>
          </div>
          <div class="middle">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1"><el-icon><location /></el-icon>系统管理</el-menu-item>
              <el-menu-item index="2">开发管理</el-menu-item>
              <!-- <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
                <el-sub-menu index="2-4">
                  <template #title>item four</template>
                  <el-menu-item index="2-4-1">item one</el-menu-item>
                  <el-menu-item index="2-4-2">item two</el-menu-item>
                  <el-menu-item index="2-4-3">item three</el-menu-item>
                </el-sub-menu>
              </el-sub-menu> -->
              <el-menu-item index="3">日志管理</el-menu-item>
            </el-menu>
          </div>
          <div class="right">
            <div>
              <el-dropdown>
                <el-icon style="margin-right: 8px; margin-top: 1px"><setting/></el-icon>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>View</el-dropdown-item>
                    <el-dropdown-item>Add</el-dropdown-item>
                    <el-dropdown-item>Delete</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <span>Tom</span>
              <!-- <el-button type="primary" size="small" @click="addTab(editableTabsValue)">新增tab</el-button> -->
            </div>
          </div>
        </div>
        <tabs-nav :is-collapse="isCollapse" />
      </el-header>
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
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import {
  Document,
  Location,
  Expand, 
  Fold
} from '@element-plus/icons-vue'
import TabsNav from './components/TabsNav'
const windowHeight = ref(window.innerHeight)
const windowWidth = ref(window.innerWidth)
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

function handleResize() {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 768) {
    isCollapse.value = true
  } else {
    isCollapse.value = false
  }
}
const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const sideMenuRef = ref(null);
onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化获取高度
});
 
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.container {
    display: flex;
    border-bottom: 1px solid #dcdfe6;
}
.left{
  width: 23px;
}

.left,
.right {
    flex: 0 0 auto; /* 定义为固定宽度，不参与flex-grow和flex-shrink */
}
.right{
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.middle {
    flex: 1 1 auto; /* 定义为自适应宽度，flex-grow为1，表示剩余空间按比例分配给它 */
    min-width: 0; /* 避免某些情况下内容过少时，元素不收缩的问题 */
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 250px;
    min-height: 400px;
  }
</style>
