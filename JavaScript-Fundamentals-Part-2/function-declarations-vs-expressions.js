console.log(age1)

// Function declaration
function calcAge1(BirthYear) {
  return 2023 - BirthYear
}

const age1 = calcAge1(2003)

// Function expression
const calcAge2 = function (BirthYear) {
  return 2023 - BirthYear
}

const age2 = calcAge2(2003)

console.log(calcAge2)
console.log(age1, age2)

/** 
 * Qual a diferença? 
 * 
 * R: A diferença é que uma function declaration pode ser executada antes mesmo de ser declarada.
 * 
 * Quando devo usar esses tipos de funções?
 * 
 * R: Isso é uma questão de gosto. Na pratica, não há diferença. 
 * 
 * */