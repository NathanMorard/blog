<script setup lang="ts">
import Header from './components/HeaderComponents.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <router-view />
  </div>
</template>
