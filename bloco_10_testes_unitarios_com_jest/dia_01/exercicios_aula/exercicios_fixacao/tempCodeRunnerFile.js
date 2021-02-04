
function soma(valor1, valor2) {
    if(typeof valor1 !== 'number' || typeof valor2 !== 'number' ) throw new Error('Argumento deve ser um numero')
    return valor1 + valor2;
  }

  console.log(soma(4, "5"))