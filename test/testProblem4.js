const {inventory} = require('./inventory.js'); // Details of the inventory are located here.
const problem4 = require('../problem4.js');

console.log("Test Case- 1")
result =problem4(inventory) 
console.log(result)

console.log("Test Case-2")
result =problem4(undefined) 
console.log(result)

console.log("Test Case-3")
result =problem4(true) 
console.log(result)

console.log("Test Case-4")
result =problem4(null)
console.log(result)

console.log("Test Case-5")
result =problem4("x")
console.log(result)

console.log("Test Case-6")
result =problem4(0)
console.log(result)
