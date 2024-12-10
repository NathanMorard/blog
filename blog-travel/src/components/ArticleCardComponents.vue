<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <router-link
    :to="{ name: 'article-detail', params: { id: article.id }}"
    class="card group"
  >
    <div class="relative overflow-hidden rounded-t-xl aspect-video">
      <img 
        :src="article.image" 
        :alt="article.title" 
        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div class="p-6">
      <h2 class="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
        {{ article.title }}
      </h2>
      <p class="mt-2 text-gray-600 line-clamp-2">{{ article.excerpt }}</p>
      <div class="mt-4 flex items-center justify-between text-sm">
        <span class="text-gray-500 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>{{ article.author }}</span>
        </span>
        <span class="text-gray-500 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{{ article.date }}</span>
        </span>
      </div>
    </div>
  </router-link>
</template>