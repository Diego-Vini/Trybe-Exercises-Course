//Criar um array com uma sequencia de numeros
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Inicia a variavel que vai receber o valor do array
let verifyNumber = 1000

for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1){
    if (numbers[indexNumber] < verifyNumber){
        verifyNumber = numbers[indexNumber];
    };
};

console.log(`O menor numero contido no array é ${verifyNumber}`);