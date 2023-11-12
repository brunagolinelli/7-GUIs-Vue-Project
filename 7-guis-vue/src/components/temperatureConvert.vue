<template>
  <div class="bg-green-100 min-h-screen">
    <div class="mb-8">
      <router-link to="/" class="bg-blue-500 text-white rounded-md py-2 px-4"
        >Voltar para Home</router-link
      >
    </div>
    <div class="container mx-auto my-8  text-center">
      <h1 class="text-4xl font-bold mb-2">Conversor de temperatura</h1>
      <p class="text-gray-600 mb-4">
        Converta a temperatura de Celsius para Fahrenheit
      </p>
      <div class="flex flex-row items-center mb-4 mx-20 py-2 px-20">
        <div class="mb-4 py-2 pl-20 ml-20">
          <label for="celsius" class="block text-sm font-medium text-gray-700"
            >Celsius</label
          >
          <input
            id="celsius"
            type="number"
            :value="c"
            @input="setC"
            class="border border-solid border-gray-500 rounded-md"
          />
        </div>

        <span class="mx-8 px-10">=</span>

        <div class="mb-4 py-2 pr-20 mr-20">
          <label
            for="fahrenheit"
            class="block text-sm font-medium text-gray-700"
            >Fahrenheit</label
          >
          <input
            id="fahrenheit"
            type="number"
            :value="f"
            @input="setF"
            class="border border-solid border-gray-500 rounded-md"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const c = ref(0);
const f = ref(32);

function setC(e, v = +e.target.value) {
  c.value = v;
  f.value = v * (9 / 5) + 32;
}

function setF(e, v = +e.target.value) {
  f.value = v;
  c.value = (v - 32) * (5 / 9);
}
</script>