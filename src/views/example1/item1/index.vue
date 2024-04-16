<template>
  <div class="parent">
  <div class="child">
    这是一段文本，它应该根据父级div的宽度自动换行。
  </div>
</div>
</template>
<style>
.parent {
  width: 100%; /* 父级div占据全部可用宽度 */
  border: 1px solid #ccc; /* 为了清楚地看到父级div的边界 */
}

.child {
  border: 1px solid #000; /* 为了清楚地看到子级div的边界 */
  /* 不设置宽度，子级div将自动与父级div的宽度保持一致 */
  word-wrap: break-word; /* 确保长单词或URL在需要时断开 */
  overflow-wrap: break-word; /* 确保兼容性 */
}
</style>