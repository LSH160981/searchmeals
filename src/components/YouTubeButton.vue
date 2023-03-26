<template>
  <a
    :href="meal.href"
    target="_blank"
    class="px-3 py-2 rounded border-2 text-white bg-red-500 hover:bg-red-400 transition-colors"
  >
    <slot></slot>
  </a>
</template>

<script setup>
const meal = defineProps({
  href: String,
});
</script>
