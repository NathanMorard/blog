<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import CommentSection from '../components/CommentSectionComponents.vue'

const route = useRoute()
const article = ref(null)

onMounted(async () => {
  // TODO: Intégrer avec le backend
  article.value = {
    id: Number(route.params.id),
    title: 'Un weekend à Paris',
    content: 'Contenu détaillé de l\'article...',
    excerpt: 'Découvrez les merveilles de la ville lumière le temps d\'un weekend...',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    author: 'Marie Dubois',
    date: '15 mars 2024',
    comments: [
      {
        id: 1,
        content: 'Super article ! J\'ai hâte d\'y aller.',
        author: 'Jean Martin',
        date: '16 mars 2024'
      }
    ]
  }
})
</script>

<template>
  <div v-if="article" class="container mx-auto px-4 py-8">
    <article class="max-w-4xl mx-auto">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-96 object-cover rounded-lg mb-8"
      />

      <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>

      <div class="flex items-center text-gray-600 mb-8">
        <span>Par {{ article.author }}</span>
        <span class="mx-2">•</span>
        <span>{{ article.date }}</span>
      </div>

      <div class="prose max-w-none mb-12">
        {{ article.content }}
      </div>

      <CommentSection :comments="article.comments" />
    </article>
  </div>
  <div v-else class="container mx-auto px-4 py-8 text-center">
    Chargement...
  </div>
</template>
