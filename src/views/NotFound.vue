<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <h2>Sayfa Bulunamadı</h2>
      <p>Aradığınız sayfa bulunamadı veya taşınmış olabilir.</p>
      <button @click="router.push('/')">Ana Sayfaya Dön</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem;
}

.not-found-content {
  max-width: 600px;
}

h1 {
  font-size: 8rem;
  margin: 0;
  color: #42b983;
}

h2 {
  font-size: 2rem;
  margin: 1rem 0;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3aa876;
}
</style> 