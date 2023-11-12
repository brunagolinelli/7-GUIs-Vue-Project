<template>
  <div class="max-w-screen-lg   h-screen mx-auto mt-8 overflow-y-auto">
    <div class="ml-2 py-4">
      <router-link to="/" class="bg-blue-500 text-white rounded-md py-2 px-4"
        >Voltar para Home</router-link
      >
    </div>
    <h1 class="text-3xl font-semibold mb-4">Planilha</h1>
    <p class="text-gray-600 mb-8">Modifique fórmulas e utilize a planilha da melhor forma que conseguir.</p>

    <div class="max-h-screen">
      <table class="w-full max-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="border-b px-4 py-2"></th>
            <th v-for="c in cols" :key="c" class="border-b px-4 py-2 min-w-full">{{ c }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in cells[0].length" :key="i">
            <th class="border-b px-4 py-2">{{ i - 1 }}</th>
            <td v-for="(c, j) in cols" :key="c" class="border px-4 py-2 min-w-full">
              <Cell :r="i - 1" :c="j"></Cell>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Cell from './Cell.vue'
import { cells } from './index.js'

const cols = cells.map((_, i) => String.fromCharCode(65 + i))
</script>

<style>
body {
  margin: 0;
}

table {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}

th, td {
  text-align: left;
}

th, td {
  border: 1px solid #e2e8f0;
}

th, td {
  padding: 0.75rem;
}

th {
  background-color: #f7fafc;
  font-weight: bold;
}
</style>