// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(input) {
  // seu código aqui
  return input.slice(-1) + ', ' + input.slice(0, 1);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins*3 + ties*1
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let sortedArray = array.sort((a, b) => b - a)
  let counter = 0
  for (number of array) {
    if (number === sortedArray[0]) {counter++}
  }
  return counter
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
