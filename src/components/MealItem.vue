<template>
  <div class="bg-white shadow rounded-xl flex flex-col justify-between">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        alt="picture error"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold text-center">{{ meal.strMeal }}</h3>
    </div>
    <div class="mb-1 flex items-center justify-around">
      <a
        :href="meal.strYoutube"
        target="_blank"
        class="px-3 py-2 rounded border-2 text-white bg-red-500 hover:bg-red-400 transition-colors"
      >
        YouTube
      </a>
      <router-link
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        class="px-3 py-2 rounded bg-zinc-200 hover:bg-purple-500 hover:text-white transition-colors"
      >
        View Detail
      </router-link>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    typt: Object,
  },
});
</script>

<style scoped></style>
