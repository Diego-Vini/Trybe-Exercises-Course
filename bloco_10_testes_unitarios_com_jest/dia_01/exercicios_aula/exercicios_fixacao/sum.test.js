const sum = require('./sum');
const { describe, test, expect } = require('@jest/globals');

describe('Exercicios soma primeira parte', () => {
    test('Soma os valores 4 e 5 e retorna 9', () => {
        expect(sum(4,5)).toBe(9);

    })

    test('Verificar se retorna uma função', () => {
        expect(typeof sum).toBe('function')
   })
    
});