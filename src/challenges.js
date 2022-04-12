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
function encode(string) {
  // seu código aqui
  let l33t = '';
  for (letter of string) {
    if (letter === 'a') {
      l33t += 1;
    } else if (letter === 'e') {
      l33t += 2;
    } else if (letter === 'i') {
      l33t += 3;
    } else if (letter === 'o') {
      l33t += 4;
    } else if (letter === 'u') {
      l33t += 5;
    } else {
      l33t += letter;
    }
  }
  return l33t;
}

function decode(string) {
  // seu código aqui
  let l33t = '';
  for (letter of string) {
    if (letter === '1') {
      l33t += 'a';
    } else if (letter === '2') {
      l33t += 'e';
    } else if (letter === '3') {
      l33t += 'i';
    } else if (letter === '4') {
      l33t += 'o';
    } else if (letter === '5') {
      l33t += 'u';
    } else {
      l33t += letter;
    }
  }
  return l33t;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let list = [];
  if (tech[0] === undefined) {
    return 'Vazio!';
  }
  let sortedTech = tech.sort();

  for (elemento of sortedTech) {
    list.push({ tech: elemento, name: name });
  }
  return list;
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
