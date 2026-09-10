const students = [
{ name: "Anna", score: 82 },
{ name: "Boon", score: 95 },
{ name: "Chai", score: 58 }
];

const grade = list => {return list .filter(students => students.score >= 60)
    .map(students => students.name);
};
console.log(grade(students))