<script setup>
import Counter from "./counter.vue";
import ComponentProps from "./ComponentProps.vue";
import EventListening from "./EventListening.vue";
import { ref } from "vue";

const currentTab = ref("Home");

const tabs = {
  Counter,
  ComponentProps,
  EventListening,
};
</script>

<template>
  <div class="">
    <button
      class="p-2 border-2 m-1 border-indigo-800 bg-sky-600 hover:bg-sky-400 text-slate-800"
      v-for="(tab, i) in tab"
      :key="i"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ i }}-{{ tab }}
    </button>
    <!-- <component :is="tabs[currentTab]" class="tab"></component> -->
  </div>
</template>
