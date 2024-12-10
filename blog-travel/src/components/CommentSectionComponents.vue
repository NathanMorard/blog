<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

// const props = defineProps({
//   comments: {
//     type: Array,
//     required: true
//   }
// })

const authStore = useAuthStore()
const newComment = ref('')

const handleSubmit = () => {
  if (!newComment.value.trim()) return
  // TODO: Intégrer avec le backend
  newComment.value = ''
}
</script>

<template>
  <div class="mt-8">
    <h3 class="text-xl font-semibold mb-4">Commentaires</h3>

    <div v-if="authStore.isAuthenticated" class="mb-6">
      <form @submit.prevent="handleSubmit">
        <textarea
          v-model="newComment"
          rows="3"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ajouter un commentaire..."
        ></textarea>
        <button
          type="submit"
          class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Publier
        </button>
      </form>
    </div>

    <div class="space-y-4">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="bg-gray-50 p-4 rounded-lg"
      >
        <div class="flex justify-between items-start">
          <span class="font-medium">{{ comment.author }}</span>
          <span class="text-sm text-gray-500">{{ comment.date }}</span>
        </div>
        <p class="mt-2 text-gray-700">{{ comment.content }}</p>
      </div>
    </div>
  </div>
</template>
