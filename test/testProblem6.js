const {inventory} = require('./inventory.js'); // Details of the inventory are located here.
const problem6 = require('../problem6.js');

console.log("Test Case- 1")
result =problem6(inventory) 
console.log(result)

console.log("Test Case-2")
result =problem6(undefined) 
console.log(result)

console.log("Test Case-3")
result =problem6(true) 
console.log(result)

console.log("Test Case-4")
result =problem6(null)
console.log(result)

console.log("Test Case-5")
result = problem6("x")
console.log(result)

console.log("Test Case-6")
result =problem6(0)
console.log(result)
