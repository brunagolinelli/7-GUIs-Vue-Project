<template>
    <table>
      <thead>
        <tr>
          <th></th>
          <th ></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <td >
            <Cell :r="i - 1" :c="j"></Cell>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
<script>
import cell from './cell.vue'
import { cells } from './index.js'

const cols = cells.map((_, i) => String.fromCharCode(65 + i))
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