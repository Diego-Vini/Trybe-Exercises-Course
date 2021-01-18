//Criar um array com uma sequencia de numeros
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Iniciar a variavel soma com valor zero
let soma = 0;


//Percorrer o array e fazer a soma dos numeros

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1 ){
     soma = soma + numbers[indexNumbers]
}

//Declarar a variavel que receberá os valores da soma dividido pela quantidade de numeros
let mediaNumbers = soma / numbers.length

//Imprime resultado
console.log(mediaNumbers) 