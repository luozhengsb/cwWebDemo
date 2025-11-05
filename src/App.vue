<template>
  <div class="app-container">
    <h1>DEMO</h1>
    
    <img
      src="@/assets/imgs/logo.png"
      alt="Test Image"
    />
    <HelloWorld msg="网站部署测试111" />

    <p>by 群鸟</p>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

h1 {
  color: #2c3e50;
  font-size: 2rem;
}

p {
  color: #666;
  margin: 1rem 0;
}

img {
  width: 200px;
  height: auto;
  margin-top: 1rem;
}
</style>