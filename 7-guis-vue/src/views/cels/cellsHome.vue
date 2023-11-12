<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="col in cols" :key="col">{{ col }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in cells" :key="rowIndex">
        <th>{{ rowIndex }}</th>
        <td v-for="(cell, colIndex) in row" :key="colIndex">
          <cells :r="rowIndex" :c="colIndex"></cells>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { cells } from './index.js'

export default {
  components: {
    cells,
  },

  data() {
    return {
      cols: cells.map((_, i) => String.fromCharCode(65 + i)),
      cells
    };
  },
};
</script>

<style>
body {
  margin: 0;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

th {
  background-color: #eee;
}

tr:first-of-type th {
  width: 100px;
}

tr:first-of-type th:first-of-type {
  width: 25px;
}

td {
  border: 1px solid #ccc;
  height: 1.5em;
  overflow: hidden;
}
</style>