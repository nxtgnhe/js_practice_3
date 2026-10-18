function groupSumBy(items, groupKey, valueKey) {
  const result = {};

  for (const item of items) {
    const group = item[groupKey];
    const value = item[valueKey];

    if (result[group] !== undefined) {
      result[group] += value;
    } else {
      result[group] = value;
    }
  }

  return result;
}

const items = [
  { dept: 'it', amount: 100 },
  { dept: 'sales', amount: 40 },
  { dept: 'it', amount: 60 },
  { dept: 'hr', amount: 20 }
];

const result = groupSumBy(items, 'dept', 'amount');

console.log(result);
// { it: 160, sales: 40, hr: 20 }