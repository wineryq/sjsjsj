<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleVDSOrder = () => {
  router.push('/vds')
}

const handlePhysicalOrder = () => {
  router.push('/physical')
}
</script>

<template>
  <div class="home">
    <header class="header">
      <div class="header-content">
        <img src="image/logo.png" alt="Minehost" class="logo-image">
        <h1>Minehost</h1>
        <p>Güçlü Hosting & VDS Çözümleri</p>
      </div>
    </header>

    <main class="main-content">
      <section class="hero">
        <h2>En İyi Hosting ve VDS Çözümleri</h2>
        <p>Güvenilir, hızlı ve uygun fiyatlı hosting hizmetleri</p>
      </section>

      <section class="services">
        <div class="service-card">
          <svg class="service-icon">
            <use href="image/icons.svg#vds-icon" />
          </svg>
          <h3>VDS Hosting</h3>
          <p>Özel sanal sunucu çözümleri</p>
          <button @click="handleVDSOrder">VDS Sipariş Ver</button>
        </div>

        <div class="service-card">
          <svg class="service-icon">
            <use href="image/icons.svg#server-icon" />
          </svg>
          <h3>Physical Server</h3>
          <p>Fiziksel sunucu çözümleri</p>
          <button @click="handlePhysicalOrder">Physical Server Sipariş Ver</button>
        </div>
      </section>
    </main>

    <footer class="footer">
      <img src="image/logo.png" alt="Minehost" class="logo-image">
      <p>&copy; 2024 Minehost. Tüm hakları saklıdır.</p>
    </footer>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 2rem;
  text-align: center;
}

.logo-image {
  width: 150px;
  height: auto;
  margin-bottom: 1rem;
}

.logo-white {
  color: white;
}

.header-content h1 {
  margin: 0;
  font-size: 2.5rem;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  border-radius: 8px;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.hero h2, .hero p {
  position: relative;
  z-index: 1;
}

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.service-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.service-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  color: #42b983;
}

.service-card button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  width: 100%;
}

.service-card button:hover {
  background-color: #3aa876;
}

.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}

.footer-logo {
  max-width: 150px;
  margin-bottom: 1rem;
}
</style> 