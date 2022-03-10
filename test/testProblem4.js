const {inventory} = require('./inventory.js'); // Details of the inventory are located here.
const problem4 = require('../problem4.js');

console.log("Test Case- 1")
problem4(inventory) 
console.log("Test Case-2")
problem4(undefined) 
console.log("Test Case-3")
problem4(true) 
console.log("Test Case-4")
problem4(null)
console.log("Test Case-5")
problem4("x")
console.log("Test Case-6")
problem4(0)