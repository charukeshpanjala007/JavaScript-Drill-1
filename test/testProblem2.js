const {inventory} = require('./inventory.js'); // Details of the inventory are located here.
const problem2 = require('../problem2.js');

console.log("Test Case- 1")
problem2(inventory) 
console.log("Test Case-2")
problem2(undefined) 
console.log("Test Case-3")
problem2(true) 
console.log("Test Case-4")
problem2(null)
console.log("Test Case-5")
problem2("x")
console.log("Test Case-6")
problem2(0)