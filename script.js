// Parçacık animasyonu
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
    }
  }
  createParticles();
  
  // Bildirim fonksiyonu
  function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    notificationText.textContent = message;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 5000);
  }
  
  // Verileri yükleme ve kaydetme
  function loadData(file) {
    return fetch(`../data/${file}.json`)
      .then(res => res.json())
      .catch(() => (file === 'admin' ? { main: { password: CryptoJS.MD5('main123').toString(), permissions: ['all'] } } : []));
  }
  
  function saveData(file, data) {
    return fetch(`../data/${file}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data, null, 2)
    });
  }
  
  // Admin giriş
  let currentAdmin = null;
  
  function login() {
    const username = document.getElementById('admin-username').value.trim();
    const password = document.getElementById('admin-password').value.trim();
    const hashedPassword = CryptoJS.MD5(password).toString();
  
    loadData('admin').then(admins => {
      if (admins[username] && admins[username].password === hashedPassword) {
        currentAdmin = { username, permissions: admins[username].permissions };
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('panel-container').style.display = 'block';
        loadSupportRequests();
        loadUsers();
        loadAdmins();
        showNotification('Giriş başarılı!');
      } else {
        showNotification('Kullanıcı adı veya şifre yanlış.');
      }
    });
  }
  
  function logout() {
    currentAdmin = null;
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('panel-container').style.display = 'none';
    showNotification('Çıkış yapıldı.');
  }
  
  // Tab kontrolü
  function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
  }
  
  // Destek talepleri
  function loadSupportRequests() {
    loadData('support').then(requests => {
      supportRequests = requests;
      const container = document.getElementById('support-requests');
      container.innerHTML = '';
      requests.forEach((req, index) => {
        const div = document.createElement('div');
        div.classList.add('request');
        div.innerHTML = `
          <p>${req.email}: ${req.message}</p>
          ${currentAdmin.permissions.includes('all') || currentAdmin.permissions.includes('support') ? 
            `<button class="action-btn" onclick="resolveRequest(${index})">Çöz</button>` : ''}
        `;
        container.appendChild(div);
      });
    });
  }
  
  function resolveRequest(index) {
    supportRequests.splice(index, 1);
    saveData('support', supportRequests).then(() => {
      loadSupportRequests();
      showNotification('Talep çözüldü.');
    });
  }
  
  // Üye kontrolleri
  function loadUsers() {
    loadData('users').then(userData => {
      users = userData;
      const container = document.getElementById('user-list');
      container.innerHTML = '';
      Object.keys(users).forEach(email => {
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
          <p>${email}</p>
          ${currentAdmin.permissions.includes('all') || currentAdmin.permissions.includes('users') ? `
            <button class="action-btn" onclick="changeUserPassword('${email}')">Şifre Değiştir</button>
            <button class="action-btn" onclick="deleteUser('${email}')">Sil</button>` : ''}
        `;
        container.appendChild(div);
      });
    });
  }
  
  function addUser() {
    const email = document.getElementById('user-email').value.trim();
    const password = document.getElementById('user-password').value.trim();
    if (!email || !email.includes('@')) return showNotification('Geçerli bir e-posta girin.');
    if (users[email]) return showNotification('Bu e-posta zaten kayıtlı.');
    users[email] = { password: CryptoJS.MD5(password || 'default123').toString() };
    saveData('users', users).then(() => {
      loadUsers();
      showNotification('Üye eklendi.');
      document.getElementById('user-email').value = '';
      document.getElementById('user-password').value = '';
    });
  }
  
  function changeUserPassword(email) {
    const newPassword = prompt('Yeni şifreyi girin:');
    if (newPassword && newPassword.length >= 6) {
      users[email].password = CryptoJS.MD5(newPassword).toString();
      saveData('users', users).then(() => {
        loadUsers();
        showNotification('Şifre değiştirildi.');
      });
    } else {
      showNotification('Şifre en az 6 karakter olmalı.');
    }
  }
  
  function deleteUser(email) {
    if (confirm(`${email} kullanıcısını silmek istediğinize emin misiniz?`)) {
      delete users[email];
      saveData('users', users).then(() => {
        loadUsers();
        showNotification('Üye silindi.');
      });
    }
  }
  
  // Admin yönetimi
  function loadAdmins() {
    loadData('admin').then(adminData => {
      admins = adminData;
      const container = document.getElementById('admin-list');
      container.innerHTML = '';
      Object.keys(admins).forEach(username => {
        if (username !== 'main' && (currentAdmin.permissions.includes('all'))) {
          const div = document.createElement('div');
          div.classList.add('admin');
          div.innerHTML = `
            <p>${username} - İzinler: ${admins[username].permissions.join(', ')}</p>
            <button class="action-btn" onclick="deleteAdmin('${username}')">Sil</button>
          `;
          container.appendChild(div);
        }
      });
    });
  }
  
  function addAdmin() {
    const username = document.getElementById('new-admin-username').value.trim();
    const password = document.getElementById('new-admin-password').value.trim();
    const permissions = [document.getElementById('permissions').value];
    if (permissions[0] === 'both') permissions = ['support', 'users'];
  
    if (!username || !password || password.length < 6) {
      return showNotification('Geçerli bir kullanıcı adı ve şifre girin (min 6 karakter).');
    }
    if (admins[username]) return showNotification('Bu admin zaten mevcut.');
  
    admins[username] = { password: CryptoJS.MD5(password).toString(), permissions };
    saveData('admin', admins).then(() => {
      loadAdmins();
      showNotification('Admin eklendi.');
      document.getElementById('new-admin-username').value = '';
      document.getElementById('new-admin-password').value = '';
    });
  }
  
  function deleteAdmin(username) {
    if (confirm(`${username} adminini silmek istediğinize emin misiniz?`)) {
      delete admins[username];
      saveData('admin', admins).then(() => {
        loadAdmins();
        showNotification('Admin silindi.');
      });
    }
  }