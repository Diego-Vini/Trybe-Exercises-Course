const sum = require('./sum');
const { describe, test, expect } = require('@jest/globals');

describe('Exercicios soma primeira parte', () => {
    test('Soma os valores 4 e 5 e retorna 9', () => {
        expect(sum(4,5)).toBe(9);

    })

    test('Verificar se retorna uma função', () => {
        expect(typeof sum).toBe('function')
   })

   test('Verificar se a soma de 0 com 0 retorn 0', () => {
       expect(sum(0, 0)).toBe(0)
   })
   
   test('verifica entrada de strings', () => {
    expect(() => { sum(4, '5') })
      .toThrow(/parameters must be numbers/);
  })

  test('verifica se a mensagem de erro é: parameters must be numbers', () => {
    expect(() => { sum(4, '5') }).toThrowError(/parameters must be numbers/);
  })
});