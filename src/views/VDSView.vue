<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface VDSPlan {
  name: string
  price: number
  cpu: string
  ram: string
  disk: string
  bandwidth: string
}

const plans = ref<VDSPlan[]>([
  {
    name: 'Başlangıç',
    price: 49.99,
    cpu: '2 Core',
    ram: '2 GB',
    disk: '20 GB SSD',
    bandwidth: '1 TB'
  },
  {
    name: 'Profesyonel',
    price: 99.99,
    cpu: '4 Core',
    ram: '4 GB',
    disk: '40 GB SSD',
    bandwidth: '2 TB'
  },
  {
    name: 'Kurumsal',
    price: 199.99,
    cpu: '8 Core',
    ram: '8 GB',
    disk: '80 GB SSD',
    bandwidth: '5 TB'
  }
])

const selectedPlan = ref<VDSPlan | null>(null)

const handleOrder = (plan: VDSPlan) => {
  selectedPlan.value = plan
  // Burada sipariş işlemleri yapılabilir
  alert(`${plan.name} planı seçildi. Fiyat: ${plan.price} TL`)
}

const goToHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="vds">
    <header class="header">
      <div class="header-content">
        <img src="image/logo.png" alt="Minehost" class="logo-image" @click="goToHome">
        <h1>VDS Hosting</h1>
        <p>Özel Sanal Sunucu Çözümleri</p>
      </div>
    </header>

    <main class="main-content">
      <section class="plans">
        <div v-for="plan in plans" :key="plan.name" class="plan-card">
          <svg class="plan-icon">
            <use href="image/icons.svg#vds-icon" />
          </svg>
          <h3>{{ plan.name }}</h3>
          <div class="price">{{ plan.price }} TL<span>/ay</span></div>
          <ul class="features">
            <li>
              <svg class="feature-icon">
                <use href="image/icons.svg#cpu-icon" />
              </svg>
              {{ plan.cpu }}
            </li>
            <li>
              <svg class="feature-icon">
                <use href="image/icons.svg#ram-icon" />
              </svg>
              {{ plan.ram }}
            </li>
            <li>
              <svg class="feature-icon">
                <use href="image/icons.svg#disk-icon" />
              </svg>
              {{ plan.disk }}
            </li>
            <li>
              <svg class="feature-icon">
                <use href="image/icons.svg#bandwidth-icon" />
              </svg>
              {{ plan.bandwidth }}
            </li>
          </ul>
          <button @click="handleOrder(plan)">Sipariş Ver</button>
        </div>
      </section>
    </main>

    <footer class="footer">
      <img src="image/logo.png" alt="Minehost" class="logo-image" @click="goToHome">
      <p>&copy; 2024 Minehost. Tüm hakları saklıdır.</p>
    </footer>
  </div>
</template>

<style scoped>
.vds {
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
  cursor: pointer;
  transition: transform 0.3s;
}

.logo-image:hover {
  transform: scale(1.05);
}

.logo-white {
  color: white;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.plan-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s;
}

.plan-card:hover {
  transform: translateY(-5px);
}

.plan-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  color: #42b983;
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #42b983;
  margin: 1rem 0;
}

.price span {
  font-size: 1rem;
  color: #666;
}

.features {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.feature-icon {
  width: 24px;
  height: 24px;
  color: #42b983;
}

.features li:last-child {
  border-bottom: none;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3aa876;
}

.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: auto;
}
</style> 