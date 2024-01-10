'use strict'

function logger() { // Função criada
  console.log('My name is Gustavo') // Código que a função irá executar. Neste caso, a função apenas irá printar "My name is Gustavo" no console
}

logger() // Chamando / executando a função
logger() // Chamando / executando a função
logger() // Chamando / executando a função

function fruitProcessor(apples, oranges) { // Função criada
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`; // Código que a função irá executar. Neste caso, a função está atribuindo uma frase à uma variável
  return juice; // Retorno da função
}

const appleJuice = fruitProcessor(5, 0); // Chamando / executando a função
console.log(appleJuice) // Printando no console o retorno da função

const appleOrangeJuice = fruitProcessor(2, 4); // Chamando / executando a função
console.log(appleJuice) // Printando no console o retorno da função

const num = Number('23'); // Exemplo de uma função nativa do javascript que retorna um number