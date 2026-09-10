const scores = [10, 20, 30];
// array destructuring uses position
const [first, second] = scores;
console.log(first); // 10
console.log(second); // 20
// skip the second value

const [a, , c] = scores;
console.log(a); // 10
console.log(c); // 30