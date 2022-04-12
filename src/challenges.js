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

  let greaterNum = 0;
  let minorNum = 0;
  let repeated = 0;

  for (let index = 0; index < num.length; index += 1)
  {

    if (num[index] < minorNum)
    minorNum = (num[index])
  }

  greaterNum = minorNum

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

  return repeated;

}

highestCount([-1,-2,-2])


// -------------------------------------------------

// Desafio 7
function catAndMouse(xMouse, xCat1, xCat2) {

  let uCat1 = Math.abs(xMouse - xCat1);
  let uCat2 = Math.abs(xCat2 - xMouse);

  if (uCat2 < uCat1)
  {

      return 'cat2'
  }
  else if (uCat1 < uCat2)
  {

      return 'cat1'
  }
  else if (uCat1 === uCat2)
  {

      return 'os gatos trombam e o rato foge'
  }


}

// -------------------------------------------------

// Desafio 8
function fizzBuzz(num) {
  // seu código aqui

let array = []

for (let index = 0; index < num.length; index += 1)
{

  if ((num[index] % 3) == 0 && ((num[index] % 5) == 0))
  {

    array.push('fizzBuzz')
  }
  else if ((num[index] % 3) == 0)
  {

    array.push('fizz')
  } 
  else if ((num[index] % 5) == 0)
  {

    array.push('buzz')
  }
  else
  {

    array.push('bug!')
  }
}


return (array)
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
