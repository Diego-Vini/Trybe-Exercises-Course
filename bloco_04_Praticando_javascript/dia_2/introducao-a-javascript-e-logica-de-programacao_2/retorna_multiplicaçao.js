//Criar um array com uma sequencia de numeros
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Inicia a variavel que vai receber o valor do array
let resultMultiplication = 0;

//Estrutura de repetição que calcula a multiplicação
for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1){
    resultMultiplication = 2 * numbers[indexNumber];
    console.log('2 x', numbers[indexNumber], '=', resultMultiplication)
};
