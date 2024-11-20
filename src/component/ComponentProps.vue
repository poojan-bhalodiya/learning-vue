<script setup>
import { reactive } from "vue";
const test = reactive({
  name: "Jay patel",
  area: "vejalpur",
});
</script>
<template>
  <p>{{ test }}</p>
  <form>
    <div>
      Name :
      <input type="Text" v-model="test.name" />
    </div>
    <div>
      Area :
      <input type="text" v-model="test.area" />
    </div>
    <div></div>
  </form>
</template>
