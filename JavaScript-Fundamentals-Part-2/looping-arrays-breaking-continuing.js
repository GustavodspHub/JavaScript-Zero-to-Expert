const personArray = [
  'Gustavo',
  'Pereira',
  2024 - 2003,
  'Software Engineer',
  ['Millena', 'Murilo', 'Isabela']
];

const types = []

for(let i = 0; i < personArray.length; i++) {
  console.log(personArray[i])

  types.push(typeof personArray[i])
}

console.log(types)

const year = [2001, 2003, 2005, 2007]
const ages = []

for(let i = 0; i < year.length; i++) {
  ages.push(2024 - year[i])
}

console.log(ages)

console.log('------- ONLY STRINGS ------')
for(let i = 0; i < personArray.length; i++) {
  if (typeof personArray[i] !== 'string') continue;

  console.log(personArray[i], typeof personArray[i]);
};

console.log('------- BREAK WITH NUMBER ------')
for(let i = 0; i < personArray.length; i++) {
  if (typeof personArray[i] == 'number') break;

  console.log(personArray[i], typeof personArray[i]);
};