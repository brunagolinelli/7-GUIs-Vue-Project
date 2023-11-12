<template>
  <div class="flex flex-col justify-start h-screen space-y-4">
    <div class="ml-2 py-4 flex ">
      <router-link to="/" class="bg-blue-500 text-white rounded-md py-2 px-8 ml-8">
        Voltar para Home
      </router-link>
    </div>
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-2">Desenhando Círculos</h1>
      <p class="text-gray-600">
        Clique no canvas para desenhar um círculo. Clique em um círculo para
        selecioná-lo. Clique com o botão direito no canvas para ajustar o raio
        do círculo selecionado.
      </p>
    </div>

    <div class="canvas relative w-full h-full">
      <svg @click="onClick" class="w-full h-full">
        <circle
          v-for="circle in circles"
          :key="circle"
          :cx="circle.cx"
          :cy="circle.cy"
          :r="circle.r"
          :fill="circle === selected ? 'bg-gray-300' : 'bg-white'"
          @click="selectCircle(circle)"
          @contextmenu.prevent="adjustCircle(circle)"
        ></circle>
      </svg>
    </div>

    <div class="controls text-center mt-4">
      <h2 class="text-lg font-semibold mb-2">Controles</h2>
      <button @click="undo" :disabled="index <= 0" class="btn">Desfazer</button>
      <button @click="redo" :disabled="index >= history.length - 1" class="btn">
        Refazer
      </button>
    </div>

    <div
      v-if="adjusting"
      class="dialog fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-72 p-4 rounded-md shadow-md"
    >
      <h3 class="text-lg font-semibold mb-2">Ajustar Raio</h3>
      <p class="mb-4">
        Ajuste o raio do círculo em ({{ selected.cx }}, {{ selected.cy }})
      </p>
      <input
        type="range"
        v-model="selected.r"
        min="1"
        max="300"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, shallowReactive, toRaw } from "vue";

const history = shallowReactive([[]]);
const index = ref(0);
const circles = ref([]);
const selected = ref();
const adjusting = ref(false);

function onClick({ clientX: x, clientY: y }) {
  if (adjusting.value) {
    adjusting.value = false;
    selected.value = null;
    push();
    return;
  }

  circles.value.push({
    cx: x,
    cy: y,
    r: 50,
  });

  push();
}

function selectCircle(circle) {
  selected.value = circle;
}

function adjustCircle(circle) {
  selected.value = circle;
  adjusting.value = true;
}

function push() {
  history.length = ++index.value;
  history.push(clone(circles.value));
  console.log(toRaw(history));
}

function undo() {
  circles.value = clone(history[--index.value]);
}

function redo() {
  circles.value = clone(history[++index.value]);
}

function clone(circles) {
  return circles.map((c) => ({ ...c }));
}
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
}

canvas {
  stroke: rgb(219, 45, 161);
}

.btn {
  background-color: #7ae01b;
  color: #fff;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>