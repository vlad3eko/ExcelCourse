const CODES = {
  A: 65,
  Z: 90,
}
// function toCell(row, col) {
//   return `
//   <div class="cell" data-col="${col}" data-row="${row}" contenteditable></div>
//   `
// }

function toCell(row) {
  return function (_, col) {
    return `
       <div 
       class="cell" 
       data-col="${col}" 
       data-type="cell"
       data-id="${row}:${col}" 
       contenteditable
       ></div>
      `
  }
}
function toColumn(col, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `
}

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
       ${index ? index : ''}
       ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 200) {
  const colsCount = CODES.Z - CODES.A + 1

  const cols = new Array(colsCount).fill('').map(toChar).map(toColumn).join('')
  const rows = []

  rows.push(createRow(null, cols))

  for (let row = 0; row < rowsCount; row++) {
    const cell = new Array(colsCount)
      .fill('')
      // .map((_, col) => toCell(row, col))
      .map(toCell(row))
      .join('')
    rows.push(createRow(row + 1, cell))
  }
  return rows.join('')
}
