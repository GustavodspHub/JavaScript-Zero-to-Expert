'use strict'

//Objeto
const person = {
  name: 'Gustavo',
  lastName: 'Pereira',
  age: 20,
  job: 'Software Engineer',
  friends: ['Millena', 'Murilo', 'Thales']
};

console.log(person)

console.log(person.name); //Dot Notation
console.log(person['lastName']); // Bracket Notation (Bracket Notation aceita expressões)

const nameKey = 'Name'; 
console.log(person['last' + nameKey]); // Bracket Notation (Bracket Notation aceita expressões)


const phrase = `${person.name} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`

console.log(phrase)