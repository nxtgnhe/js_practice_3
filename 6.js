function formatDates(datesArray) {
  return datesArray.map(date => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  });
}

const dates = [
  new Date("2025-03-15"),
  new Date("2025-12-01")
];

const result = formatDates(dates);

console.log(result);