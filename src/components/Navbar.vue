<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <!-- 头部左边 -->
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center px-5 h-full"
    >
      Home
    </router-link>
    <!-- 头部右边 的那三个 -->
    <div class="flex item-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredient' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        Meals Ingredients
      </router-link>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>
