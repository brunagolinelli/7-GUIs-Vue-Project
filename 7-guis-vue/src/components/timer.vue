<template>
  <div class="elapsed-container p-8 bg-green-100 min-h-screen  items-center">
    <div class="mb-8">
      <router-link to="/" class="bg-blue-500 text-white rounded-md py-2 px-4"
        >Voltar para Home</router-link
      >
    </div>
    <h1 class="text-3xl font-bold mb-4">Contador</h1>
    <p class="text-gray-700 mb-4">Mova a barra para alterar o temporizador</p>

    <label class="block text-lg mb-2">Elapsed Time:</label>
    <div class="flex items-center mb-4">
      <div class="w-full bg-gray-300 h-8 rounded">
        <div
          class="elapsed-bar bg-red-500 h-full"
          :style="{ width: progressRate * 100 + '%' }"
        ></div>
      </div>
      <span class="ml-2">{{ (elapsed / 1000).toFixed(1) }}s</span>
    </div>

    <div class="mb-4">
      <label class="block text-lg mb-2">Duration:</label>
      <input
        type="range"
        v-model="duration"
        min="1"
        max="30000"
        class="w-full"
      />
      <span>{{ (duration / 1000).toFixed(1) }}s</span>
    </div>

    <button @click="reset" class="bg-blue-500 text-white px-4 py-2 rounded">
      Reset
    </button>
  </div>
</template>

<script setup>
import { ref, onUnmounted, computed } from "vue";
const duration = ref(15 * 1000);
const elapsed = ref(0);

let lastTime;
let handle;

const update = () => {
  elapsed.value = performance.now() - lastTime;
  if (elapsed.value >= duration.value) {
    cancelAnimationFrame(handle);
  } else {
    handle = requestAnimationFrame(update);
  }
};

const reset = () => {
  elapsed.value = 0;
  lastTime = performance.now();
  update();
};

const progressRate = computed(() =>
  Math.min(elapsed.value / duration.value, 1)
);

reset();

onUnmounted(() => {
  cancelAnimationFrame(handle);
});
</script>