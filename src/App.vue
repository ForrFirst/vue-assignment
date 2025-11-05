<template>
  <nav>
    <RouterLink to="/">🏠 Courses </RouterLink>
    <!-- TODO: สร้าง <RouterLink /> สำหรับหน้า Summary -->
    <RouterLink to="/summary">📋 Summary</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
nav {
  background: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

a {
  margin: 0 15px;
  padding: 10px 25px;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: inline-block;
}

a:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

a.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

main {
  min-height: calc(100vh - 80px);
}
</style>
