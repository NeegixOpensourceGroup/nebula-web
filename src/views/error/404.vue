<template>
  <div class="error-page">
    <div class="error-container">
      <h1 class="error-code">404</h1>
      <p class="error-message">Oops! 页面不见了...</p>
      <router-link to="/" class="back-home">返回首页</router-link>
      <div class="sad-emoji">😢</div>
      <transition name="bounce">
        <div v-if="showBounce" class="bounce"></div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showBounce = ref(false);

onMounted(() => {
  setTimeout(() => {
    showBounce.value = true;
  }, 1000);
});
</script>

<style scoped>
.error-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
}

.error-container {
  text-align: center;
}

.error-code {
  font-size: 10rem;
  color: #6c757d;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.error-message {
  font-size: 1.5rem;
  color: #343a40;
  margin-bottom: 1.5rem;
}

.back-home {
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.back-home:hover {
  background-color: #0056b3;
}

.sad-emoji {
  font-size: 5rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.bounce-enter-active,
.bounce-leave-active {
  transition: transform 0.5s;
}

.bounce-enter,
.bounce-leave-to {
  transform: translateY(-10px);
}
</style>