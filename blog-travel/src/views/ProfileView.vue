<script setup>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center space-x-4 mb-6">
        <img
          :src="authStore.user?.avatar || 'https://via.placeholder.com/100'"
          alt="Profile"
          class="w-20 h-20 rounded-full"
        />
        <div>
          <h1 class="text-2xl font-bold">{{ authStore.user?.username }}</h1>
          <p class="text-gray-600">{{ authStore.user?.email }}</p>
        </div>
      </div>

      <div class="border-t pt-6">
        <button
          @click="handleLogout"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  </div>
</template>