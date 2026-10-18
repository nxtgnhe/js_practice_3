// Вход:
const people = [
  { name: 'Анна', age: 17 },
  { name: 'Иван', age: 22 },
  { name: 'Оля', age: 30 }
];

// Выход:
const result = people.filter(user => user.age >= 18).map(user => user.name.toUpperCase())
console.log(result)