let person = {
    age : 17,
    name : "John",
}
//função pura
function remainingYearsTomajorty(person) {
    return 18 - person.age;
}
//função impura gerando efeito colateral
function increaseAge(person) {
    person.age = person.age + 1;
}
//chamada da função impura
  increaseAge(person);
let remainingYears = remainingYearsTomajorty(person);
console.log(remainingYears);