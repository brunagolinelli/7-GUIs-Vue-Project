<template>
  <div class="bg-green-100 h-screen  items-center">
    <div class="py-4 ml-2">
      <router-link to="/" class="bg-blue-500 text-white rounded-md py-2 px-4">Voltar para Home</router-link>
    </div>
    <div class="container mx-auto my-8 text-center">
      <h1 class="text-4xl font-bold mb-4">Contador</h1>
      <p class="text-gray-600 mb-8">Adicione e subtraia números através dos botões</p>

      <div class="flex items-center justify-center">
        <button
          @click="subtractOne"
          class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mr-4 transition duration-300"
        >
          Subtrair
        </button>

        <span class="text-2xl font-bold">{{ count }}</span>

        <button
          @click="addOne"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ml-4 transition duration-300"
        >
          Adicionar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const addOne = () => {
  count.value++;
};

const subtractOne = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
</style>