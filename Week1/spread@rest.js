// SPREAD - expand into pieces
//const a = [1, 2], b = [3, 4];
//const merged = [...a, ...b]; // [1,2,3,4]
//const copy = [...a]; // real copy

//const user = { name: "Mek", age: 20 };
//const updated = { ...user, age: 21 };
// { name: "Mek", age: 21 }

// REST - gather the leftovers
//const sum = (...nums) =>
//nums.reduce((t, n) => t + n, 0);
//sum(1, 2, 3, 4); // 10

const [head, ...tail] = [1, 2, 3];
console.log(head)
// head = 1, tail = [2, 3]