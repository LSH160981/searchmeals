<template>
  <div class="flex justify-center gap-2 mt-5">
    <router-link
      :to="{ name: 'byLetter', params: { letter: letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
  <Meals :meals="mealByLetter"></Meals>
</template>

<script setup>
import { onMounted, watch, ref, computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const route = useRoute();
const route_letter = ref(""); // 记录路由参数
const mealByLetter = computed(() => store.state.mealsByLetter || []);

// 上面的路由是自己跳转到自己，我们要检测变化的路由参数
watch(route, (newValue, oldValue) => {
  route_letter.value = route.params.letter;
  getMealByLetter();
});
// 根据letter 获取 meal
function getMealByLetter() {
  store.dispatch("searchMealsByLetter", route_letter.value);
}

onMounted(() => {
  route_letter.value = route.params.letter;
});
</script>
