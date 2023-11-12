<template>
  <div class="bg-blue-100 min-h-screen flex flex-col items-center justify-center">
    <div class="mb-8">
      <router-link to="/" class="bg-blue-500 text-white rounded-md py-2 px-4"
        >Voltar para Home</router-link
      >
    </div>
    <h1 class="text-4xl font-bold mb-2">Agende seu voo</h1>
    <p class="text-gray-600 mb-4">Agende as datas de ida e volta do seu voo</p>

    <select v-model="flightType" class="border border-solid border-blue-500 p-2 rounded-md mb-4">
      <option value="one-way flight">Voo só de ida</option>
      <option value="return flight">Voo de ida e volta</option>
    </select>

    <input type="date" v-model="departureDate" class="border border-solid border-blue-500 p-2 rounded-md mb-4">
    <input type="date" v-model="returnDate" :disabled="!isReturn" class="border border-solid border-blue-500 p-2 rounded-md mb-4">

    <button :disabled="!canBook" @click="openDialog" class="bg-blue-500 text-white py-2 px-4 rounded-md mb-4">Reservar</button>

    <p class="text-red-500">{{ canBook ? '' : 'A data de retorno deve ser após a data de ida.' }}</p>

    <!-- Diálogo -->
    <div v-if="dialogVisible" class="fixed inset-0 flex items-center justify-center">
      <div class="bg-white p-8 rounded-md shadow-md">
        <p>{{ dialogMessage }}</p>
        <button @click="closeDialog" class="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const flightType = ref("one-way flight");
const departureDate = ref(dateToString(new Date()));
const returnDate = ref(departureDate.value);
const dialogVisible = ref(false);
const dialogMessage = ref("");

const isReturn = computed(() => flightType.value === "return flight");

const canBook = computed(
  () =>
    !isReturn.value ||
    stringToDate(returnDate.value) > stringToDate(departureDate.value)
);

function book() {
  dialogMessage.value =
    isReturn.value
      ? `Você reservou um voo de ida e volta saindo em ${departureDate.value} e retornando em ${returnDate.value}.`
      : `Você reservou um voo só de ida saindo em ${departureDate.value}.`;
  dialogVisible.value = true;
}

function openDialog() {
  if (canBook.value) {
    book();
  } else {
    dialogMessage.value = 'A data de retorno deve ser após a data de ida.';
    dialogVisible.value = true;
  }
}

function closeDialog() {
  dialogVisible.value = false;
}

function stringToDate(str) {
  const [y, m, d] = str.split("-");
  return new Date(+y, m - 1, +d);
}

function dateToString(date) {
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate())
  );
}

function pad(n, s = String(n)) {
  return s.length < 2 ? `0${s}` : s;
}
</script>

<style scoped>
  input[disabled] {
    color: #999;
  }
</style>