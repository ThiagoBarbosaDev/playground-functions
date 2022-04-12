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
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let sortedArray = array.sort((a, b) => b - a);
  let counter = 0;
  for (number of array) {
    if (number === sortedArray[0]) {
      counter++;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat1Distance > cat2Distance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  newArray = [];
  for (element of array) {
    if (element % 3 === 0 && element % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (element % 3 !== 0 && element % 5 !== 0) {
      newArray.push('bug!');
    } else if (element % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('buzz');
    }
  }
  return newArray;
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
