<template>
  <el-container :style="`height: ${windowHeight}px;`">
    <el-aside width="{isCollapse ? '65px' : '185px'}" style="border-right: 1px solid #dcdfe6;">
      <div style="text-align: center;">
        <div v-if="!isCollapse" style="display: flex;flex-direction: column; justify-content: center;height: 60px;">
          <div>Nebula</div>
          <div style="font-size: 10px; color:blueviolet">Preview Edition</div>
        </div>
        <div v-if="isCollapse" style="display: flex;flex-direction: column; justify-content: center;height: 60px;">
          <div>NE</div>
        </div>
      </div>
      <el-scrollbar :style="`height: ${windowHeight -  (!isCollapse?90:105)}px`">
        <el-menu
          default-active="1"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          :style="`min-height: ${windowHeight - (!isCollapse? 90 : 105)}px;border-right:0px`"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
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
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
      <div :style="`font-size: 10px;color: #909399;height: ${!isCollapse ? '30' : '45'}px; vertical-align: middle;background-color: #fff;position: fixed; bottom: 0px; text-align: center; width: ${isCollapse ? '63px' : '187px'};`">
          Copyright © {{ new Date().getFullYear() }} By Nebula
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
              <el-menu-item index="1">Processing Center</el-menu-item>
              <el-sub-menu index="2">
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
              </el-sub-menu>
              <el-menu-item index="3" disabled>Info</el-menu-item>
              <el-menu-item index="4">Orders</el-menu-item>
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
              <el-button type="primary" size="small" @click="addTab(editableTabsValue)"> 新增tab</el-button>
            </div>
          </div>
        </div>
        <div style="height: 30px; position: relative; z-index: 2;">
          <!-- <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item
              ><a href="/">promotion management</a></el-breadcrumb-item
            >
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb> -->
          <el-tabs
            v-model="editableTabsValue"
            type="card"
            closable
            @tab-click="clickTab"
            @tab-remove="removeTab"
          >
            <el-tab-pane
              v-for="item in editableTabs"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            />
          </el-tabs>
        </div>
      </el-header>
      <el-main>
        <el-scrollbar>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table> -->
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import {
  Document,
  Location,
  Expand, 
  Fold
} from '@element-plus/icons-vue'
import { TabsPaneContext } from 'element-plus';
const windowHeight = ref(window.innerHeight)
const windowWidth = ref(window.innerWidth)
const isCollapse = ref(false)
const router = useRouter()
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
onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // 初始化获取高度
});
 
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))


let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
])

const addTab = (targetName: string) => {
  const newTabName = `${++tabIndex}`
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
  })
  editableTabsValue.value = newTabName
}
const removeTab = (targetName: string) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}

const clickTab = (pane: TabsPaneContext, ev: Event) => {
  console.log(pane.paneName)
  const path = pane.paneName === '1' ? '/' : `/item${pane.paneName}1`
  router.push(path)
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
.el-tabs {
  --el-tabs-header-height: 30px;
}
</style>
