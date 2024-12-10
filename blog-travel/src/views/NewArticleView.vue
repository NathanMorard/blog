<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')
const content = ref('')
const image = ref('')
const error = ref('')

const handleSubmit = async () => {
  try {
    // TODO: Intégrer avec le backend
    router.push('/')
  } catch (e) {
    error.value = 'Erreur lors de la publication. Veuillez réessayer.'
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Nouvel Article</h1>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">
            Titre
          </label>
          <input
            id="title"
            v-model="title"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label for="image" class="block text-sm font-medium text-gray-700">
            URL de l'image
          </label>
          <input
            id="image"
            v-model="image"
            type="url"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label for="content" class="block text-sm font-medium text-gray-700">
            Contenu
          </label>
          <textarea
            id="content"
            v-model="content"
            rows="10"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Publier
          </button>
        </div>

        <div v-if="error" class="text-red-600 text-center">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>