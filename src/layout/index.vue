<template>
  <el-container style="height: 100%;">
    <asider :is-collapse="isCollapse" />
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
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1"><el-icon><location /></el-icon>系统管理</el-menu-item>
              <el-menu-item index="2">开发管理</el-menu-item>
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
import {
  Setting,
  Location,
  Expand, 
  Fold
} from '@element-plus/icons-vue'
import TabsNav from './components/TabsNav/index.vue'
import Asider from './components/Asider/index.vue'
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
const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

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
</style>
