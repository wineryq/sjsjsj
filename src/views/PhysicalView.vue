<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface PhysicalPlan {
  name: string
  price: number
  cpu: string
  ram: string
  disk: string
  bandwidth: string
  location: string
}

const plans = ref<PhysicalPlan[]>([
  {
    name: 'Başlangıç',
    price: 299.99,
    cpu: '4 Core',
    ram: '8 GB',
    disk: '256 GB SSD',
    bandwidth: '5 TB',
    location: 'İstanbul'
  },
  {
    name: 'Profesyonel',
    price: 599.99,
    cpu: '8 Core',
    ram: '16 GB',
    disk: '512 GB SSD',
    bandwidth: '10 TB',
    location: 'İstanbul'
  },
  {
    name: 'Kurumsal',
    price: 999.99,
    cpu: '16 Core',
    ram: '32 GB',
    disk: '1 TB SSD',
    bandwidth: '20 TB',
    location: 'İstanbul'
  }
])

const selectedPlan = ref<PhysicalPlan | null>(null)

const handleOrder = (plan: PhysicalPlan) => {
  selectedPlan.value = plan
  // Burada sipariş işlemleri yapılabilir
  alert(`${plan.name} planı seçildi. Fiyat: ${plan.price} TL`)
}
</script>

<template>
  <div class="physical">
    <header class="header">
      <div class="header-content">
        <img src="image/logo.png" alt="Minehost" class="logo-image">
        <h1>Physical Server</h1>
        <p>Fiziksel Sunucu Çözümleri</p>
      </div>
    </header>

    <main class="main-content">
      <section class="plans">
        <div v-for="plan in plans" :key="plan.name" class="plan-card">
          <svg class="plan-icon">
            <use href="image/icons.svg#server-icon" />
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
            <li>
              <svg class="feature-icon">
                <use href="image/icons.svg#location-icon" />
              </svg>
              Konum: {{ plan.location }}
            </li>
          </ul>
          <button @click="handleOrder(plan)">Sipariş Ver</button>
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
.physical {
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