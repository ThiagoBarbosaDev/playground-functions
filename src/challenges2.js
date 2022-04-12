// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (number of phone) {
    if (number > 11 || number < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let counter = 0;
  let maxCounter = 0;

  for (let i = 0; i < phone.length; i++) {
    for (let j = 0; j < phone.length; j++) {
      if (phone[i] === phone[j]) {
        counter += 1;
      }
      if (counter > maxCounter) {
        maxCounter = counter;
      }
      if (maxCounter > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    counter = 0;
  }

  return (
    '(' +
    phone.slice(0, 2).join('') +
    ') ' +
    phone.slice(2, 7).join('') +
    '-' +
    phone.slice(7, 11).join('')
  );
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (
    (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) ||
    (lineB < lineC + lineA && lineB > Math.abs(lineC - lineA)) ||
    (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB))
  ) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
