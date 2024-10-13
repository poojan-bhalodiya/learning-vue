<script setup>
import { reactive, computed } from "vue";

const author = reactive({
  name: "John Doe",
  books: ["vue2 advanced Guide", "vue3 advanced guide", "vue4 complex guide"],
});

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
</script>

<template>
  <h1 class="text-3xl text-red-500 font-bold underline p-2">Hello World</h1>
  <p class="p-2 text-rose-600 border border-green-600">
    Published Books Message
  </p>
  <span class="text-sky-700 m-2 p-2">{{ publishedBooksMessage }}</span>
</template>

<style scoped></style>
