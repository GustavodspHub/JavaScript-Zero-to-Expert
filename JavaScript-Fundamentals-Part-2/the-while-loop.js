let repetition = 1;
while(repetition <= 10) {
  console.log(`While: Lifting weights repetition ${repetition}`);
  repetition++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log('Loop is about to end...');
}