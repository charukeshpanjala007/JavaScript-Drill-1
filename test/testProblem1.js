const {inventory} = require('./inventory.js'); // Details of the inventory are located here.
const problem1 = require('../problem1.js');

console.log("Test Case- 1")
problem1(inventory, 20) 
console.log("Test Case-2")
problem1(inventory, 10) 
console.log("Test Case-3")
problem1(inventory, 0) 
console.log("Test Case-4")
problem1(null, null)
console.log("Test Case-5")
problem1("x", 0)
console.log("Test Case-6")
problem1(inventory, 50)