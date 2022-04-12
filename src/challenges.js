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
function concatName(stringName) {

  let lastName = stringName[stringName.length - 1]
  let firstName = stringName[0]


  return (lastName + ", " + firstName)
  

}

concatName(['Captain1', 'my', 'captain'])

// -------------------------------------------------

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  let winPoints = wins * 3;
  let tiePoints = ties;

  return winPoints + tiePoints;



}

// -------------------------------------------------

// Desafio 6
function highestCount(num) {
  // seu código aqui

  let greaterNum = -99;
  let repeated = 0;

  // for (let index = 0; index < num.length; index += 1)
  // {

  //   if (num[index] < 0)
    
  // }

  for (let index = 0; index < num.length; index += 1)
  {

    if (num[index] > greaterNum)
    {

      greaterNum = num[index];
    }

    
  }

  for (let index = 0; index < num.length; index += 1)
  {

    if (greaterNum === num[index])
    {

      repeated += 1;
    }
  }

  return (repeated)

}

highestCount([-1,-2,-2])


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
