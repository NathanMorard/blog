<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const searchQuery = ref('')
const authStore = useAuthStore()

const handleSearch = () => {
  // TODO: Implement search functionality
}
</script>

<template>
  <header class="bg-red border-b border-gray-100">
    <nav class="container mx-auto px-4 h-16 flex items-center justify-between">
      <router-link
        to="/"
        class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
        >
        Blog Voyage
      </router-link>

      <div class="flex items-center space-x-6">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher un article..."
            class="w-64 input-primary pl-10"
            @keyup.enter="handleSearch"
          />
          <svg
            class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <template v-if="authStore.isAuthenticated">
          <router-link
            to="/new-article"
            class="btn-primary flex items-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>Nouvel Article</span>
          </router-link>
          <router-link
            to="/profile"
            class="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <img
              :src="authStore.user?.avatar || 'https://via.placeholder.com/32'"
              alt="Profile"
              class="w-8 h-8 rounded-full"
            />
            <span>Mon Compte</span>
          </router-link>
        </template>
        <template v-else>
          <router-link
            to="/login"
            class="text-gray-600 hover:text-gray-900"
          >
            Connexion
          </router-link>
          <router-link
            to="/register"
            class="btn-primary"
          >
            Inscription
          </router-link>
        </template>
      </div>
    </nav>
  </header>
</template>
