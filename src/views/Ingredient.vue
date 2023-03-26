<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-5">ingredient</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full mb-3"
      placeholder="请输入想要的膳食"
    />
    <RouterLink
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
    >
      <div class="bg-white rounded p-3 mb-3 shadow">
        <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </div>
    </RouterLink>
    <div v-if="computedIngredients.length == 0" class="text-center mt-5">
      There are no meal
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from "vue";
import store from "../store";

// 存放基础基本的膳食
const ingredients = computed(() => {
  // computedIngredients.value = store.state.mealsByAllIngredient;
  return store.state.mealsByAllIngredient;
});

// 通过 keyword ingredient 检索 ingredients
const keyword = ref("");
// 这是一个 检索 keyword 后 存储对应数据的
const computedIngredients = ref([]);

watch(keyword, () => {
  if (keyword.value.length == 0) {
    computedIngredients.value = [];
    return;
  }
  computedIngredients.value = ingredients.value.filter((item) => {
    return item.strIngredient
      .toLowerCase()
      .includes(keyword.value.trim().toLowerCase());
  });
});

onMounted(() => {
  // 根据 Ingredients 获取 所有 的膳食
  store.dispatch("getMealsByAllIngredients");
});
</script>
