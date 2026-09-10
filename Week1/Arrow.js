// classic function expression
const double = function (n) {
return n * 2;
};
console.log(double)

// arrow function
const double2 = (n) => {
return n * 2;
};
console.log(double2)

// implicit return (one expression)
const double3 = n => n * 2;
console.log(double3)

// multiple params need parentheses
const area = (w, h) => w * h;
console.log(area)