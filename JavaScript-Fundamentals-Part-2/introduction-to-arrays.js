'use strict'

const friends = ['Gustavo', 'Millena', 'Murilo']; // Array
console.log(friends);

const years = new Array(2003, 2004, 2014);

//As posições de um array são baseadas com o inicio em 0, ou seja, o primeiro valor está na posição 0, o segundo valor está na posição 1, e assim por diante.
console.log(friends[0]); 
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length); // Length é uma propriedade que está dentro de todo array. Ele retorna o total de valores dentro do array
console.log(friends.length - 1);

friends[2] = 'Isabela';
console.log(friends);

const firstName = 'Gustavo';
const gustavo = [firstName, 'Pereira', 2024 - 2003, 'Software Engineer', friends];

console.log(gustavo);
console.log(gustavo.length);