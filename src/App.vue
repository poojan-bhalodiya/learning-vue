<script setup></script>

<template>
  <h1 class="text-3xl text-red-500 font-bold underline">Hello World</h1>
  <button @click="awesome = !awesome" class="border border-2 border-red-500">
    Toggle
  </button>

  <h1 v-if="!awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
  <div>
    <h1 v-show="ok">Hello!</h1>
  </div>
</template>

<style scoped></style>
