/* Напиши функцию `analyzeBookSales(booksArray)` для расчета следующего показателя:

- **Самая дорогая книга** и ее название. */

const books = [
  { title: "1984", category: "dystopia", price: 350 },
  { title: "Brave New World", category: "dystopia", price: 400 },
  { title: "The Great Gatsby", category: "classic", price: 300 },
  { title: "Dune", category: "sci-fi", price: 450 },
  { title: "Fahrenheit 451", category: "dystopia", price: 380 },
  { title: "To Kill a Mockingbird", category: "classic", price: 320 },
  { title: "Foundation", category: "sci-fi", price: 420 },
];

function analyzeBookSales(booksArray) {
  let mostExpensiveBook = {
    title: "",
    price: 0
  };

  for (const book of booksArray) {
    if (book.price > mostExpensiveBook.price) {
      mostExpensiveBook = {
        title: book.title,
        price: book.price
      };
    }
  }

  return mostExpensiveBook;
}

console.log(analyzeBookSales(books))