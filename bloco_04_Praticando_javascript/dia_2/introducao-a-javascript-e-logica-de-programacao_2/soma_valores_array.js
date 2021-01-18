//Criar um array com uma sequencia de numeros
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Iniciar a variavel soma com valor zero
let sum = 0;

//Percorrer o array e fazer a soma dos numeros
for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1){
    sum = sum + numbers[indexNumbers];
   
};

//Imprime resultado
console.log(`A soma dos valores do array number é ${sum}`);
