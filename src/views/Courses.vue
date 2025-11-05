<template>
  <div class="page-container">
    <div class="header-card">
      <h2>📚 รายการสินค้า</h2>
      <!-- TODO: แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <div class="favorite-badge">
        <span class="heart-icon">❤️</span>
        <span>ถูกใจแล้ว <strong>{{ store.favorites.length }}</strong> รายการ</span>
      </div>
    </div>

    <div class="form-card">
      <div class="form-section">
        <label class="form-label">👤 ชื่อผู้ใช้:</label>
        <!-- TODO: v-model username -->
        <input 
          v-model="store.username" 
          placeholder="กรอกชื่อของคุณเพื่อเริ่มเลือกสินค้า" 
          @input="handleUsernameChange"
          class="form-input"
        />
        <p v-if="!store.username" class="form-hint">⚠️ กรุณากรอกชื่อเพื่อเปิดใช้งานปุ่มเลือกสินค้า</p>
      </div>
    </div>

    <div class="course-list">
      <!-- TODO: Render CourseCard -->
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
// TODO: import axios
import axios from "axios";
// TODO: import { useFavoriteStore } จาก "../stores/favorite"
import { useFavoriteStore } from "../stores/favorite";

const courses = ref([]);
// TODO: ดึงข้อมูลจาก API ด้วย axios.get() แล้วเก็บใน courses
// TODO: ใช้ store เพื่อเข้าถึง username และ favorites
const store = useFavoriteStore();

const handleUsernameChange = () => {
  store.setUsername(store.username);
};

onMounted(async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    courses.value = response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
});
</script>

<style scoped>
.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.header-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.header-card h2 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 15px;
}

.favorite-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.heart-icon {
  font-size: 1.3rem;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.form-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.form-section {
  text-align: left;
}

.form-label {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
}

.form-input {
  width: 100%;
  padding: 15px 20px;
  font-size: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.3s ease;
  outline: none;
}

.form-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-hint {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #f59e0b;
  display: flex;
  align-items: center;
  gap: 5px;
}

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .course-list {
    grid-template-columns: 1fr;
  }
}
</style>
