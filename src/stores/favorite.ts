// TODO1: สร้าง store ชื่อ useFavoriteStore
import { defineStore } from 'pinia'
import { ref } from 'vue'
// state:
export const useFavoriteStore = defineStore('favorite', () => {
    const username = ref('')
    const favorites = ref([])
//   username (string)
//   favorites (array)
// actions:
//   setUsername(name) → เก็บชื่อผู้ใช้
//   addFavorite(course) → เพิ่มคอร์สใน favorites
const setUsername = (name: string) => {
    username.value = name
  }
  const addFavorite = (course: any) => {
    favorites.value.push(course)
  }
  return {
    username,
    favorites,
    setUsername,
    addFavorite
  }
})
