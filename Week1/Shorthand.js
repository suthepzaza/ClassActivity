const name = "Fah";
const age = 19;

// old way
const student1 = {
name: name,
age: age
};
console.log("Hi " + student1.name + student1.age)

// shorthand when names match
const student2 = { name, age };
// method shorthand
const student3 = {
name,
age,
greet() {
return `Hi ${this.name} ${this.age}`;
}
};
console.log(student3.greet()); // "Hi Fah"