const {inventory} = require('./inventory.js'); // Details of the inventory are located here.
const problem5 = require('../problem5.js');

console.log("Test Case- 1")
problem5(inventory) 

console.log("Test Case-2")
problem5(undefined) 

console.log("Test Case-3")
problem5(true) 

console.log("Test Case-4")
problem5(null)

console.log("Test Case-5")
problem5("x")

console.log("Test Case-6")
problem5(0)
