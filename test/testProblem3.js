const {inventory} = require('./inventory.js'); // Details of the inventory are located here.
const problem3 = require('../problem3.js');

console.log("Test Case- 1")
problem3(inventory) 
console.log("Test Case-2")
problem3(undefined) 
console.log("Test Case-3")
problem3(true) 
console.log("Test Case-4")
problem3(null)
console.log("Test Case-5")
problem3("x")
console.log("Test Case-6")
problem3(0)