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
    <p>2. 增加不存在的路由跳转到404</p>
    <p>1. 路由添加外链配置</p>
  </el-card>
</div>
</template>
<style>
.el-card{
  width: 380px;
  margin-top:20px;
}
</style>