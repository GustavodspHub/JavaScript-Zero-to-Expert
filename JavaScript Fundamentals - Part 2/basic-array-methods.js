'use strict'

const friends = ['Gustavo', 'Millena', 'Murilo'];

//Add elements
const newLength = friends.push('Isabela'); // O método push adiciona um valor na última posição de um array. Além disso, este método retorna o novo comprimento do array em que ele está sendo inserido.
friends.push('Gabriel');

console.log(friends);
console.log(newLength);

friends.unshift('Thales'); // O método unshift adiciona um valor na primeira posição de array, e também retorna o novo comprimento do array em que ele está sendo inserido.

//Remove elements

const popped = friends.pop(); // O método pop remove o último valor do array. Além disso, ele retorna o valor que está sendo removido do array.
friends.pop();

console.log(popped);

friends.shift(); // O método shift remote o primeiro valor do array, e também retorna o valor que está sendo removido do array.

console.log(friends);

console.log(friends.indexOf('Gustavo')); // O método indexOf retorna a posição do elemento que está sendo passado. Caso o elemento não exista, ele retorna -1.
console.log(friends.indexOf('Bill Gates'));

console.log(friends.includes('Gustavo')); // O método includes irá validar se o elemento que está sendo passado existe ou não no array. Se existir ele retorna "true", caso o contrário, ele retorna "false".
console.log(friends.includes('Bill Gates'));