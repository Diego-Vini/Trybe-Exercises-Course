const longestWord = inputText => {
    let biggestWord = inputText.split(' ')
    let maxLength = 0
    let bigger = ''
    for (let word of biggestWord){
        if(word.length > maxLength){
            maxLength = word.length
            bigger = word
        }
    }
    return(bigger)
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

// outra maneira

// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))