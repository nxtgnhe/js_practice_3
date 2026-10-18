/* Напиши функцию `analyzeBookSales(booksArray)` для расчета следующего показателя:

- **Количество проданных книг** по каждой категории. */ 

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
  const categoryCount = {};

  for (const book of booksArray) {
    if (categoryCount[book.category]) {
      categoryCount[book.category]++;
    } else {
      categoryCount[book.category] = 1;
    }
  }

  return categoryCount;
}

console.log(analyzeBookSales(books));