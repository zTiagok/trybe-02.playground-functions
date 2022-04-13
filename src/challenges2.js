// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui

  
  if (phoneNumber.length < 11 || phoneNumber.length > 11)
  {

    return 'Array com tamanho incorreto.'
  } 
  
  for (let index = 0; index < phoneNumber.length; index += 1)
  {

    if (phoneNumber[index] < 0)
    {

      return 'não é possível gerar um número de telefone com esses valores'
    }
    else if (phoneNumber[index] > 9)
    {

      return 'não é possível gerar um número de telefone com esses valores'
    }
    
    let repeatableNumber = 0;

    for (let index2 = 0; index2 < phoneNumber.length; index2 += 1)
    {

      if (phoneNumber[index] == phoneNumber[index2])
      {

        repeatableNumber += 1;

        if (repeatableNumber >= 3)
        {

          return 'não é possível gerar um número de telefone com esses valores'
        }

      }
        
    }
  }


  return ("(" + phoneNumber[0] + phoneNumber[1] + ") " + phoneNumber[2] + phoneNumber[3] + phoneNumber [4] + phoneNumber[5] + phoneNumber[6] + "-" 
  + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10])

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui

  let average = Math.abs((lineA + lineB + lineC) / 3)


  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB))
  {

    return false;
  }
  else
  {

    return true;
  }
}

// Desafio 13
function hydrate(liquor) {
  // seu código aqui
  let filter = /\d+/g;
  let correction = liquor.match(filter)
  let sum = 0;


  for (let index = 0; index < correction.length; index += 1)
  {

   correction[index] = parseInt(correction[index])

   sum += correction[index]
  }


  if (sum == 1)
  {

    return sum + " copo de água"
  }
  else
  {

    return sum + " copos de água"
  }
}

console.log(hydrate('1 cachaça, 2 cervejas'))

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
