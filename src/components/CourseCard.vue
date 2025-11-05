<template>
  <div class="course-card">
    <div class="course-image">
      <img :src="course.image" :alt="course.title" />
    </div>
    <div class="course-content">
      <h3 class="course-title">{{ course.title }}</h3>
      <p class="course-category">📁 {{ course.category }}</p>
      <div class="course-footer">
        <span class="course-price">${{ course.price }}</span>
        <button 
          @click="handleAddFavorite" 
          :disabled="!store.username || isAlreadyFavorited"
          :class="{ 'favorited': isAlreadyFavorited }"
          class="favorite-btn"
        >
          <span v-if="!store.username">🔒</span>
          <span v-else-if="isAlreadyFavorited">✅</span>
          <span v-else>❤️</span>
          {{ isAlreadyFavorited ? 'ถูกใจแล้ว' : 'เพิ่มในรายการโปรด' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO: import { useFavoriteStore } แล้วเขียนฟังก์ชันเพิ่มคอร์สลง store
import { useFavoriteStore } from '../stores/favorite'
import { computed } from 'vue'

// TODO: defineProps({ course: Object })
const props = defineProps({
  course: Object
})

const store = useFavoriteStore()

const isAlreadyFavorited = computed(() => {
  return store.favorites.some(fav => fav.id === props.course.id)
})

const handleAddFavorite = () => {
  if (!isAlreadyFavorited.value) {
    store.addFavorite(props.course)
  }
}
</script>

<style scoped>
.course-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.course-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
  transition: transform 0.3s ease;
}

.course-card:hover .course-image img {
  transform: scale(1.05);
}

.course-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.course-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 10px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8em;
}

.course-category {
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0 0 15px 0;
  text-transform: capitalize;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  gap: 10px;
}

.course-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.favorite-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.favorite-btn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.favorite-btn:disabled {
  background: linear-gradient(135deg, #9ca3af 0%, #6b7280 100%);
  cursor: not-allowed;
  opacity: 0.6;
}

.favorite-btn.favorited {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.favorite-btn:active:not(:disabled) {
  transform: scale(0.98);
}
</style>
