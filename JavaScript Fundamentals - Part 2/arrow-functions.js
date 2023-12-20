const calcAge3 = birthYear => 2023 - birthYear
const age3 = calcAge3(2003)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age

  return `${firstName} retires in ${retirement} year`
}

console.log(yearsUntilRetirement(2003, 'Gustavo'))
console.log(yearsUntilRetirement(2004, 'Millena'))