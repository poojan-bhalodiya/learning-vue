<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <div>
    {{ count }}
  </div>
  <div>
    <button @click="increment()">➕➕</button>
  </div>
  <div></div>
</template>
