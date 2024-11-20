<script setup>
defineProps(["title"]);
defineEmits(["enlarge-text"]);
</script>

<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button
      @click="$emit('enlarge-text')"
      class="border-2 border-red-600 bg-yellow-300 rounded-md m-2 p-1"
    >
      Enlarge text
    </button>
  </div>
</template>
