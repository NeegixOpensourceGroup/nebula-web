<template>
  <el-header class="n-header">
    <div class="container">
      <div class="left">
        <div class="n-collapse">
          <el-icon :size="25" @click="toggleCollapse" style="cursor: pointer;" color="#909399">
            <component :is="!isCollapse ? Fold : Expand" />
          </el-icon>
        </div>
      </div>
      <div class="middle">
        <el-menu
          :default-active="headerMenu[0].name"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item v-for="(item, index) in headerMenu" :key="item.name" :index="item.name"  @click="findSiderMenu(item.name)"><el-icon><component :is="item.icon" /></el-icon>{{ item.title }}</el-menu-item>
          <!-- <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2"><el-icon><location /></el-icon>系统管理</el-menu-item>
          <el-menu-item index="3" @click="findSiderMenu('layout')">开发管理</el-menu-item>
          <el-menu-item index="4">日志管理</el-menu-item> -->
        </el-menu>
      </div>
      <div class="right">
        <div>
          <!-- <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"><setting/></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span> -->
          <a href="https://github.com/NeegixOpensourceGroup/nebula-web" target="_blank" class="git-link">
            Github
          </a>
          <a href="https://gitee.com/neegix-opensource-group/nebula-web" target="_blank" class="git-link">
            Gitee
          </a>
          <!-- <el-button type="primary" size="small" @click="addTab(editableTabsValue)">新增tab</el-button> -->
        </div>
        
      </div>
    </div>
    <tabs-nav />
  </el-header>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import {
  Setting,
  Location,
  Expand, 
  Fold
} from '@element-plus/icons-vue'
import TabsNav from './TabsNav/index.vue'
import { useLayoutStore } from '@/layout/stores/layoutStore'

// 可以在组件中的任意位置访问 `store` 变量 ✨
const layoutStore = useLayoutStore()
const { isCollapse, headerMenu } = storeToRefs(layoutStore)
const { toggleCollapse, findSiderMenu } = layoutStore

const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
  //console.log(key, keyPath)
}
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

.n-header{
  font-size: 12px;
  height: 90px;
  width: 100%;
}

.n-collapse{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 60px;
}
.git-link {
    text-decoration: none;
    color: #333;
    display: inline-block;
    margin-right: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .git-link:hover {
    background-color: #f5f5f5;
  }

  .icon {
    margin-right: 5px;
    font-size: 16px;
    vertical-align: middle;
  }
</style>