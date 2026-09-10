// starter - a reusable delay helper
const delay = (ms, value) =>
new Promise(resolve =>
setTimeout(() => resolve(value), ms));

// example
delay(0, "Red")
.then(v => console.log(v))
.catch(err => {
console.log("broken", err.message)
});

delay(1000, "Green")
.then(v => console.log(v))
.catch(err => {
console.log("broken", err.message)
});

delay(2000, "Yellow")
.then(v => console.log(v))
.catch(err => {
console.log("broken", err.message)
});

//Promise all fucntion
Promise.all ([
    delay(0, "Red"),
    delay(1000, "Green"),
    delay(2000, "Yellow")
])
.then(v => console.log(v));