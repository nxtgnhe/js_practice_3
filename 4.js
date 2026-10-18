/* Условие: дан массив объектов с именем и возрастом. Нужно оставить только тех, кому 18 лет и больше. */

// Вход:
const people = [
  { name: 'Анна', age: 17 },
  { name: 'Иван', age: 18 },
  { name: 'Оля', age: 22 }
];

function ageFilter (array) {
    return array
    .filter(user => user.age >= 18)
}

console.log(ageFilter(people))