const user = { id: 7, name: "Beam", role: "admin" };

// get name, but save it as n
const { name: n } = user;
console.log(n); // "Beam"
console.log(name); // ReferenceError

// rename more clearly
const { role: userRole } = user;
console.log(userRole); // "admin

const user = { name: "Beam" };

//Second Part for Defualt Value
// age does not exist in user
const { age = 18 } = user;
console.log(age); // 18

const user2 = { name: "Mint", age: 25 };
const { age: age2 = 18 } = user2;
console.log(age2); // 25
// default is used only when value is undefined