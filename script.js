let length = 0
let width = 0
let radius = 0

function inputLength() {
  let promptLength = prompt("Masukkan Panjang");
  length = promptLength
  inputWidth()
}

function inputWidth() {
  let promptWidth = prompt("Masukkan Lebar");
  width = promptWidth
  rectangle()
}

function rectangle() {
  let keliling = 2 * (Number(length) + Number(width))
  document.write(`Luas ${length * width}`)
  document.write(`Keliling ${keliling}`)
}

function inputRadius() {
  let promptRadius = prompt("Masukkan Radius");
  radius = promptRadius
  circle()
}

function circle () {
  let luas = 2 * Math.PI * radius
  let keliling = Math.PI * radius * radius
  document.write(`Luas ${luas}`)
  document.write(`Keliling ${keliling}`)
}