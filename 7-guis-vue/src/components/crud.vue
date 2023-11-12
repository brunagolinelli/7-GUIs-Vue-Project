<template>
  <div class=" p-8 bg-blue-200 min-h-screen">
    <div class="mb-8">
      <router-link to="/" class="bg-blue-500 text-white rounded-md py-2 px-4"
        >Voltar para Home</router-link
      >
    </div>
    <h1 class="text-3xl font-bold mb-4">Lista de Nomes</h1>
    <p class="text-gray-700 mb-4">Crie, Dele e Atualize nomes</p>

    <div class="mb-4">
      <input v-model="prefix" placeholder="Filtrar por prefixo" class="p-2 border rounded" />
    </div>

    <div class="flex mb-4">
      <select size="5" v-model="selected" class="w-1/3 p-2 border rounded mr-4">
        <option v-for="name in filteredNames" :key="name">{{ name }}</option>
      </select>

      <div class="w-2/3">
        <label class="block mb-2">Nome: <input v-model="first" class="p-2 border rounded" /></label>
        <label class="block mb-2">Sobrenome: <input v-model="last" class="p-2 border rounded" /></label>
      </div>
    </div>

    <div class="buttons">
      <button @click="create" class="bg-green-500 text-white px-4 py-2 rounded">Criar</button>
      <button @click="update" class="bg-yellow-500 text-white px-4 py-2 rounded">Atualizar</button>
      <button @click="del" class="bg-red-500 text-white px-4 py-2 rounded">Deletar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'

const names = reactive(['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'])
const selected = ref('')
const prefix = ref('')
const first = ref('')
const last = ref('')

const filteredNames = computed(() =>
  names.filter((n) =>
    n.toLowerCase().startsWith(prefix.value.toLowerCase())
  )
)

watch(selected, (name) => {
  ;[last.value, first.value] = name.split(', ')
})

function create() {
  if (hasValidInput()) {
    const fullName = `${last.value}, ${first.value}`
    if (!names.includes(fullName)) {
      names.push(fullName)
      first.value = last.value = ''
      showSuccessMessage('Nome criado com sucesso!')
    }
  }
}

function update() {
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${last.value}, ${first.value}`
    showSuccessMessage('Nome atualizado com sucesso!')
  }
}

function del() {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    selected.value = first.value = last.value = ''
    showSuccessMessage('Nome deletado com sucesso!')
  }
}

function hasValidInput() {
  return first.value.trim() && last.value.trim()
}

function showSuccessMessage(message) {
  alert(message)
}
</script>

<style>
* {
  font-size: inherit;
}

input, select {
  display: block;
  margin-bottom: 10px;
}

select {
  width: 100%;
}

.buttons {
  margin-top: 10px;
}

button {
  margin-right: 5px;
}
</style>