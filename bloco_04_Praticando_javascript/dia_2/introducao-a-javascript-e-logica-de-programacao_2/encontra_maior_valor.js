//Criar um array com uma sequencia de numeros
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Inicia a variavel que vai receber o valor do array
verifyNumber = 0

//Cria uma estruturad de repetição que percorre o array
for (let indexNumber = 0; indexNumber < numbers.length; indexNumber += 1){
    //Inicia uma estrutura de comparação 
    if (numbers[indexNumber] > verifyNumber){
        verifyNumber = numbers[indexNumber]
    }
}
//Imprime o resultado
console.log(`O maior numero dentro do array é ${verifyNumber}`)