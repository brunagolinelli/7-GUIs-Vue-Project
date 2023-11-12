import { markRaw, reactive } from 'vue';

const COLS = 5;
const ROWS = 20;

// Use constantes diretamente
export const cells = markRaw(reactive(Array(COLS).fill().map(() => Array(ROWS).fill(''))));

export function evalCell(exp) {
  if (!exp.startsWith('=')) {
    return exp
  }

  exp = exp.slice(1).replace(/\b([A-Z])(\d{1,2})\b/g, (_, c, r) => `get(${c.charCodeAt(0) - 65},${r})`)

  try {
    return new Function('get', `return ${exp}`)(getCellValue)
  } catch (e) {
    // Mensagem de erro mais informativa
    return `#ERROR: ${e.message}`
  }
}

function getCellValue(c, r) {
  const val = evalCell(cells[c][r])
  const num = Number(val)
  return Number.isFinite(num) ? num : val
}
