<template>
  <div class="max-w-[800px] mx-auto p-8">
    <!-- <pre>{{ meal }}</pre> -->
    <h2 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h2>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong>Category</strong> : {{ meal.strCategory }}</div>
      <div><strong>strArea</strong> : {{ meal.strArea }}</div>
      <div><strong>strTags</strong> : {{ meal.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <!-- 食材 与 食材的数量 -->
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <!-- 原材料 -->
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}.{{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <!-- 步骤 -->
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}.{{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <!-- 两按钮 -->
    <div class="mt-4">
      <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="ml-3 px-3 py-2 rounded border-2 border-purple-700 text-black hover:bg-indigo-400 transition-colors"
      >
        View Original Source
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../api/axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  let id = route.params.id;
  axiosClient.get(`/lookup.php?i=${id}`).then(({ data }) => {
    //   console.log(data.meals);
    meal.value = data.meals[0] || {};
  });
});
</script>
