<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="请输入想要的膳食"
      @change="searchMealsByName"
    />

    <Meals :meals="meals"></Meals>
    <!-- <div v-if="meals.length == 0" class="text-center">There are no meal</div> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import store from "../store/index.js";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();

const meals = computed(() => store.state.mealsByName);

const keyword = ref("");
// 根据关键字 获取meal
function searchMealsByName() {
  if (keyword.value.trim()) {
    store.dispatch("searchMealsByName", keyword.value);
  } else {
    store.commit("SEARCHMEALSBYNAME", []);
  }
}
onMounted(() => {
  // 从路由获取 关键字
  keyword.value = route.params.name;
  keyword.value && searchMealsByName();
});
</script>

<style scoped></style>
