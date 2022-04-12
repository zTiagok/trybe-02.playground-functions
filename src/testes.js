function catAndMouse(xCat1, xMouse, xCat2) {

    console.log('Posição Gato 1: ' + xCat1);
    console.log('  Posição Rato: ' + xMouse);
    console.log('Posição Gato 2: ' + xCat2);
  
    console.log('------------------');
  
    console.log('Unidades Gato 1: ' + (xMouse - xCat1) * 1);
    console.log('Unidades Gato 2: ' + (xCat2 - xMouse) * 1);
  
    // let uCat1 = (xMouse - xCat1);

    let uCat1 = Math.abs(xMouse - xCat1);
    let uCat2 = Math.abs(xCat2 - xMouse);
  
    console.log('------------------');
  
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

  console.log(catAndMouse(0,1,2))