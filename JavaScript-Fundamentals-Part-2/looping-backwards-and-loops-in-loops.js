const personArray = [
  'Gustavo',
  'Pereira',
  2024 - 2003,
  'Software Engineer',
  ['Millena', 'Murilo', 'Isabela']
];

for(let i = personArray.length - 1; i>= 0; i--) {
  console.log(personArray[i]);
};

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------- Starting exercise ${exercise}`);

  for(let repetition = 1; repetition < 6; repetition++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${repetition}`)
  }
};
