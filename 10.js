function filterStudents(students) {
  const averages = students.map(student => {
    const sum = student.grades.reduce(
      (total, grade) => total + grade,
      0
    );

    const average = sum / student.grades.length;

    return { name: student.name, average: average };
  });

  const passed = averages.filter(student => student.average >= 4);

  const result = passed.map(student => student.name);

  return result;
}

const students = [
  { name: 'Аня', grades: [5, 4, 5] },
  { name: 'Иван', grades: [3, 4, 3] },
  { name: 'Оля', grades: [4, 4, 4] }
];

console.log(filterStudents(students)); 