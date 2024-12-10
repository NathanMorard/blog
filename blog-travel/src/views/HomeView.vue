<script setup>
import ArticleCard from '../components/ArticleCardComponents.vue'
import { ref } from 'vue'

// Mock data - à remplacer par les données de l'API
const articles = ref([
  {
    id: 1,
    title: 'Un weekend à Paris',
    excerpt: 'Découvrez les merveilles de la ville lumière le temps d\'un weekend...',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    author: 'Marie Dubois',
    date: '15 mars 2024'
  },
  // Autres articles...
])
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Articles Récents</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </main>
</template>
