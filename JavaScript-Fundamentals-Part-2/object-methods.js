//Objeto
const person = {
  name: "Gustavo",
  lastName: "Pereira",
  age: 20,
  job: "Software Engineer",
  driversLicense: true,
  getSummary: function() {
    const verifyDriversLicense = this.driversLicense ? `has a driver's license` : `has not a driver's license`

    return `${this.name} is a ${this.age}-year old ${this.job}, and he ${verifyDriversLicense}`
  }
};

console.log(person.getSummary())
console.log(person['getSummary']())