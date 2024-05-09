<template>
<div style="display: flex;justify-content: space-around;">
  <el-card>
    <template #header>
      <div class="card-header">
        <span>系统信息</span>
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
        <el-tag  type="success" size="small">0.0.1</el-tag>
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
        <span>更新内容</span>
      </div>
    </template>
    <p>4. Tab菜单删除实现</p>
    <p>3. 初步实现了tabs的动态实现</p>
    <p>2. 增加不存在的路由跳转到404</p>
    <p>1. 路由添加外链配置</p>
  </el-card>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>计划内容</span>
      </div>
    </template>
    <p><del>1. 优化tabs的体验，增加删除等操作</del></p>
    <p>2. tabs右键菜单的实现</p>
    <p><del>3. 路由结构需要调整（解决控制台报没有componets项的问题）</del></p>
    <p>4. 默认首页Tab处理</p>
  </el-card>
</div>
</template>
<style>
.el-card{
  width: 380px;
  margin-top:20px;
}
</style>