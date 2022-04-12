// Desafio 1
function compareTrue(aItem, bItem) {
  // seu código aqui

  if (aItem === true && bItem === true)
  {

    return true;
  }
  
    return false;
}

// -------------------------------------------------

// Desafio 2
function calcArea(base, height) {
  // seu código aqui

  return (base * height) / 2;
}

// -------------------------------------------------

// Desafio 3
function splitSentence(string) {
  // seu código aqui

  return string.split(' ')

}



// -------------------------------------------------

// Desafio 4
function concatName() {

}



// -------------------------------------------------

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  let winPoints = wins * 3;
  let tiePoints = ties;

  return winPoints + tiePoints



}

console.log(footballPoints(14, 8));

// -------------------------------------------------

// Desafio 6
function highestCount() {
  // seu código aqui
}

// -------------------------------------------------

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// -------------------------------------------------

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// -------------------------------------------------

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// -------------------------------------------------

// Desafio 10
function techList() {
  // seu código aqui
}

// -------------------------------------------------

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
