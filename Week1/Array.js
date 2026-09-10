const nums = [1, 2, 3, 4, 5];

console.log(nums.map(n => n * 2)) // [2,4,6,8,10]
console.log(nums.filter(n => n % 2 === 0)) // [2,4]
console.log(nums.reduce((sum, n) => sum + n, 0)) // 15
console.log(nums.forEach(n => console.log(n))) // undefined
console.log(nums.find(n => n > 3)) // 4
console.log(nums.includes(3)) // true