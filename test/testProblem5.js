const {inventory} = require('./inventory.js'); // Details of the inventory are located here.
const problem4 = require('../problem4.js');
const data = problem4(inventory)
const problem5 = require('../problem5.js');

console.log("Test Case- 1")
let result =problem5(data) 
console.log(result)

console.log("Test Case-2")
result =problem5(undefined) 
console.log(result)

console.log("Test Case-3")
result =problem5(true) 
console.log(result)

console.log("Test Case-4")
result =problem5(null)
console.log(result)

console.log("Test Case-5")
result =problem5("x")
console.log(result)

console.log("Test Case-6")
result =problem5(0)
console.log(result)
