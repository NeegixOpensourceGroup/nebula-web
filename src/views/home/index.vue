<template>
<div style="display: flex;justify-content: space-around;">
  <el-card>
    <template #header>
      <div class="card-header">
        <span>系统依赖清单</span>
      </div>
    </template>
    <el-descriptions
      :column="1"
      border
    >
    <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            <el-text class="mx-1" type="success">nebula-web</el-text>
          </div>
        </template>
        <el-tag  type="success" size="small">0.0.4</el-tag>→<el-tag  type="success" size="small">0.0.5</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            vue
          </div>
        </template>
        <el-tag size="small">^3.4.21</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            vite
          </div>
        </template>
        <el-tag size="small">^5.2.0</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            vue-router
          </div>
        </template>
        <el-tag size="small">^4.3.0</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            element-plus
          </div>
        </template>
        <el-tag size="small">^2.6.2</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            pinia
          </div>
        </template>
        <el-tag size="small">^2.1.7</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            @element-plus/icons-vue
          </div>
        </template>
        <el-tag size="small">^2.3.1</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>功能计划和实现清单</span>
      </div>
    </template>
    <p><del>15. 开发启动后自动打开浏览器</del></p>
    <p>14. 第三方图标</p>
    <p>13. 增加更新内容弹窗提示</p>
    <p>12. Mock数据模拟</p>
    <p><del>11. 增加github和gitee仓库连接</del></p>
    <p>10. Header区域功能设计与定义</p>
    <p><del>9. Header菜单与左侧菜单联动</del></p>
    <p><del>8. 默认首页Tab处理</del></p>
    <p><del>7. 路由结构需要调整（解决控制台报没有componets项的问题）</del></p>
    <p><del>6. tabs右键菜单的实现</del></p>
    <p><del>5. 优化tabs的体验，增加删除等操作</del></p>
    <p><del>4. Tab菜单删除实现</del></p>
    <p><del>3. 初步实现了tabs的动态实现</del></p>
    <p><del>2. 增加不存在的路由跳转到404</del></p>
    <p><del>1. 路由添加外链配置</del></p>
  </el-card>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>BUG问题和处理清单</span>
      </div>
    </template>
    <p><del>4. 当只有一个tag时不允许删除</del></p>
    <p><del>3. 地址栏直接访问路由，Tabs未有处理</del></p>
    <p><del>2. 地址栏直接访问路由，菜单未有选中处理</del></p>
    <p><del>1. 删除非激活Tab菜单控制台报错</del></p>
  </el-card>
</div>
</template>
<style>
.el-card{
  width: 380px;
  margin-top:20px;
}
</style>