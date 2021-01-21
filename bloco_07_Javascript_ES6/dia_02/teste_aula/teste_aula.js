const person = {
  name: 'Diego',
  lastName: 'Vinicius'
};

// console.log(`Olá querido ${person.name}!`);
// console.log(`Olá querido ${person['lastName']}!`);
// console.log(`Olá querido ${person.name} ${person.lastName}!`);

 person.age = 35;
 person['sexo'] = 'Masculino'

// console.log(person);

// const object = {};

// for (let index = 0; index < 10; index += 1) {
//     object[index] = 'String'
// }

// console.log(object)

//Objects.keys() acessa todas as chaves dentro do objeto

console.log(`Existe sobrenome? ${Object.keys(person)}`) 

//Object.keys.person - Acessa todas as chaves e pergunta se existe dentro 
//do objeto a chave com nome 'lastName'

console.log(`Existe sobrenome? ${Object.keys(person).includes('lastName')}`) 

console.log(`Pessoa: ${Object.values(person)}`);
console.log(`Pessoa: ${Object.entries(person)}`)
