<template>
  <div class="cell" :title="cells[c][r]" @dblclick="startEditing">
    <input
      v-if="editing"
      v-model="cells[c][r]"
      @keyup.enter="finishEditing"
      @blur="finishEditing"
      @vue:mounted="focusInput"
    />
    <span v-else>{{ evalCellValue(cells[c][r]) }}</span>
  </div>
</template>

<script>
import { ref, defineProps } from 'vue'
import { cells, evalCell } from './index.js'

export default {
  props: {
    c: Number,
    r: Number
  },

  setup(props) {
    const editing = ref(false)

    function startEditing() {
      editing.value = true
    }

    function finishEditing() {
      editing.value = false
      cells[props.c][props.r] = cells[props.c][props.r].trim()
    }

    function focusInput({ el }) {
      el.focus()
    }

    function evalCellValue(value) {
      return evalCell(value)
    }

    return {
      editing,
      evalCellValue,
      startEditing,
      finishEditing,
      focusInput
    }
  }
}
</script>

<style>
.cell,
.cell input {
  height: 1.5em;
  line-height: 1.5;
  font-size: 15px;
}

.cell span {
  padding: 0 6px;
}

.cell input {
  width: 100%;
  box-sizing: border-box;
}
</style>