const assert = require('assert');

// assert.strictEqual(50,50);
// assert.strictEqual(50,70);

// function division(x, y) {
//     return x / y;
// }

// const expected = division(9,4);

// assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');

// function add(a,b) {
//     return a + b;
// }

// const expected = add(1,2);

// assert.ok(expected === 3, 'Um mais dois é igual a três');
// assert.strictEqual(expected, 3, 'Um mais dois é igual a tres');
// assert.notStrictEqual(expected, 4, 'Um mais dois é igual a tres (e não quatro)')

const customer = {
    firstName: 'Diego',
    age: 34,
    job: 'Programador'
};

let newKey = 'lastName';
const lastName = 'Vinicius';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.table(customer);

function newObject (obj, key, value) {
    const nomes = obj;
    let newKey = key;
    let newValue = value;
    nomes[newKey] = newValue
    return nomes
}

const nomes = {}
console.table(newObject(nomes, 'nome', 'Diego'))