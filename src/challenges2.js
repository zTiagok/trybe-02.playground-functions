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
function triangleCheck() {
  // seu código aqui
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
