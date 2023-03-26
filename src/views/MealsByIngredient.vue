<template>
  <div class="p-8">
    <Meals :meals="ingredients"></Meals>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";

const route = useRoute();

// 存放基础基本的膳食
const ingredients = computed(() => store.state.mealsByIngredient);

// 根据 ingredient 获取 膳食
const getMealsByIngredients = () => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
};

onMounted(() => {
  getMealsByIngredients();
});
</script>
