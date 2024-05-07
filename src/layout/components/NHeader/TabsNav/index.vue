<template>
  <div style="height: 30px; position: relative; z-index: 2;">
    <el-tabs
      v-model="activeMenu"
      type="card"
      closable
      @tab-click="clickTab"
      @tab-remove="removeTab"
      @contextmenu.prevent="rightClick"
    >
      <el-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      />
    </el-tabs>
    <ul
        v-show="contextMenuVisible"
        :style="{left:left+'px',top:top+'px'}"
        class="contextmenu"
      >
        <li @click="closeAll()">关闭所有</li>
        <li>关闭左边</li>
        <li>关闭右边</li>
        <li>关闭其他</li>
      </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { TabsPaneContext } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useLayoutStore } from '@/layout/stores/layoutStore'
const { isCollapse, tabs, activeMenu } = storeToRefs(useLayoutStore())
const contextMenuVisible = ref(false)
const left = ref(0)
const top = ref(0)
const router = useRouter()


const rightClick = (mouseEvent: MouseEvent) => {

  let targetId: string | undefined;
  const target = mouseEvent.target as Element; // 类型断言为Element
  if (target instanceof HTMLInputElement || target instanceof HTMLDivElement) {
    targetId = target.id;
    if (!!targetId) {
      contextMenuVisible.value = true;
      left.value = mouseEvent.clientX - (isCollapse.value ? 65: 250);
      top.value = mouseEvent.clientY - 60;
    } else {
      contextMenuVisible.value = false;
    }
  }
}

let tabIndex = 1
const editableTabsValue = ref('1')
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

const closeAll = () => {
  console.log("closeAll")
}

// const addTab = (targetName: string) => {
//   const newTabName = `${++tabIndex}`
//   editableTabs.value.push({
//     title: 'New Tab',
//     name: newTabName,
//     content: 'New Tab content',
//   })
//   editableTabsValue.value = newTabName
// }
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
  const tab = tabs.value.find(item=>item.name == pane.paneName)
  router.push(tab.path)
}

const handleClickOtherArea = (e) => {
  const target = e.target as Element
  if (target.className !== 'contextmenu') { // 只要点击的不是el-tag就可以关闭，因为el-tag是用span标签实现的
    contextMenuVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOtherArea)
})
 
onUnmounted(() => {
  window.removeEventListener('click', handleClickOtherArea);
})
</script>
<style scoped>
.el-tabs {
  --el-tabs-header-height: 30px;
}

.contextmenu {
  width: 100px;
  margin: 0;
  border: 1px solid #ccc;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
}
.contextmenu li {
  margin: 0;
  padding: 7px 16px;
}
.contextmenu li:hover {
  background: #f2f2f2;
  cursor: pointer;
}
</style>