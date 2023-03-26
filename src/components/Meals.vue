<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-if="meals.length == 0" class="text-center">There are no meal</div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
