<template>
  <div class="flex flex-col p-8">
    <Meals :meals="randomMeals"></Meals>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import Meals from "../components/Meals.vue";
import store from "../store";

const randomMeals = computed(() => store.state.randomMeals_10 || []);

onMounted(() => {
  if (randomMeals.value.length >= 20) return;
  store.dispatch("getRandomMealsFor_10");
});
</script>

<style scoped></style>
