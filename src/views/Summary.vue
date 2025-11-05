<template>
  <div class="page-container">
    <div class="summary-card">
      <h2>📋 สรุปข้อมูล</h2>
      <!-- TODO: ดึง username และ favorites.length จาก store -->
      
      <div v-if="!store.username && store.favorites.length === 0" class="no-data">
        <div class="empty-icon">📭</div>
        <p class="empty-text">ยังไม่มีข้อมูลการเลือกคอร์ส</p>
        <p class="empty-hint">กรุณากรอกชื่อและเลือกคอร์สที่คุณถูกใจ</p>
      </div>
      
      <div v-else class="data-section">
        <div class="info-card">
          <div class="info-icon">👤</div>
          <div class="info-content">
            <p class="info-label">ชื่อผู้ใช้</p>
            <p class="info-value">{{ store.username || 'ไม่ระบุ' }}</p>
          </div>
        </div>
        
        <div class="info-card">
          <div class="info-icon">❤️</div>
          <div class="info-content">
            <p class="info-label">จำนวนคอร์สที่ถูกใจ</p>
            <p class="info-value">{{ store.favorites.length }} คอร์ส</p>
          </div>
        </div>
        
        <div v-if="store.favorites.length > 0" class="favorite-list">
          <h3>📚 รายการคอร์สที่ถูกใจ</h3>
          <div class="favorite-item" v-for="(fav, index) in store.favorites" :key="index">
            <span class="favorite-number">{{ index + 1 }}.</span>
            <span class="favorite-title">{{ fav.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO: import { useFavoriteStore }
import { useFavoriteStore } from '../stores/favorite'

const store = useFavoriteStore()
</script>

<style scoped>
.page-container {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.summary-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 30px;
  text-align: center;
}

.no-data {
  text-align: center;
  padding: 40px 20px;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.empty-text {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 10px;
  font-weight: 500;
}

.empty-hint {
  color: #9ca3af;
  font-size: 0.95rem;
}

.data-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-2px);
}

.info-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.info-content {
  flex: 1;
  text-align: left;
}

.info-label {
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 5px;
}

.info-value {
  font-size: 1.5rem;
  font-weight: 600;
}

.favorite-list {
  margin-top: 20px;
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
}

.favorite-list h3 {
  font-size: 1.25rem;
  color: #1f2937;
  margin-bottom: 15px;
  text-align: center;
}

.favorite-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  margin-bottom: 8px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.favorite-item:hover {
  transform: translateX(5px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.favorite-number {
  font-weight: 600;
  color: #667eea;
  min-width: 25px;
}

.favorite-title {
  color: #374151;
  font-size: 0.95rem;
  line-height: 1.4;
}
</style>
