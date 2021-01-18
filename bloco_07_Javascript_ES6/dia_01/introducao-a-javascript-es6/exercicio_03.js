const fatorial = inputFatorial => {
    let calcFatorial = 1;
    for (let i = inputFatorial; i != 0; i -= 1 ){
        calcFatorial = calcFatorial * i;
    }
    console.log(calcFatorial);
}

fatorial(4);

//Opcional 1

// const factorial = number => {
//     let result = 1

//     for (let i = 2; i <= number; i += 1) {
//         result *= i
//     }

//     return result
// }

// console.log(factorial(4))

// Opcional 2

// const factorial = number => number > 1 ? number * factorial(number - 1) : 1

// console.log(factorial(5))
