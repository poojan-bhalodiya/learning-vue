<script setup>
import { reactive, ref, computed } from "vue";

const author = reactive({
  name: "John Doe",
  books: ["vue2 advanced Guide", "vue3 advanced guide", "vue4 complex guide"],
});

const publishedBooksMessage = computed(() => {
  if (author.books.length > 0) {
    return author.books;
  } else {
    return "No Boos written";
  }
});

// Vue ref
const firstname = ref("Jay");
const lastname = ref("Patel");

const fullname = computed({
  get() {
    return firstname.value + " " + lastname.value;
  },

  set(newValue) {
    [firstname.value, lastname.value] = newValue.split(" ");
  },
});

// Ref Example
const refcount = ref(0);
console.log(refcount);

function refincript() {
  refcount.value++;
}
</script>

<template>
  <div>
    <p class="p-2 m-2 justify-center text-center">Computed Example</p>
    <div class="p-2 m-2 border-2 border-sky-900">
      <p class="p-2 text-rose-600 border border-green-600">
        Published Books Message
      </p>
      <span class="text-sky-700 m-2 p-2">{{ publishedBooksMessage }}</span>
    </div>
    <!-- fullname ref -->
    <div class="p-4 m-6 border-2 border-green-900">
      <p class="text-blue-600 border border-green-600 p-2">
        Full Name ref example
      </p>
      <span class="p-2 text-pink-700">{{ fullname }}</span>
    </div>
  </div>
  <div>
    <p class="p-2 m-2 justify-center text-center">Ref Example</p>
    <div class="border-2 rounded-2xl border-green-500 m-3 p-3">
      <div class="">{{ refcount }}</div>
      <div>
        <button
          @click="refincript"
          class="rounded-md border-red-500 border-2 p-1 m-2"
        >
          RefCount
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
