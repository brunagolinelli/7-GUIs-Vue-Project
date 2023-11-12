<template>
  <div class="cell" :title="cells[c][r]" @click="editing = true">
    <input
      v-if="editing"
      :value="cells[c][r]"
      @change="update"
      @blur="update"
      @vue:mounted="({ el }) => el.focus()"
      class="w-full p-2"
    >
    <span v-else>{{ evalCell(cells[c][r]) }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { cells, evalCell } from './index.js'

const props = defineProps({
  c: Number,
  r: Number
})

const editing = ref(false)

function update(e) {
  editing.value = false
  cells[props.c][props.r] = e.target.value.trim()
}
</script>

<style>
.cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 3em; 
}

.cell,
.cell input {
  line-height: 1.5;
  font-size: 15px;
}

.cell span {
  padding: 0 6px;
}

.cell input {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

@media only screen and (max-width: 600px) {
  .cell {
    min-height: 2em;
  }

  .cell input {
    font-size: 14px;
  }
}
</style>