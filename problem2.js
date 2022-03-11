const findLastCarInfo =  function (inventory) {
    let output = ""
    if (inventory !== null && inventory !== undefined && inventory.length !== 0)  {
        const carDetails = inventory[inventory.length - 1]
        if(carDetails!== undefined && carDetails.car_make && carDetails.car_model){
            output = `Last car is a ${carDetails.car_make} ${carDetails.car_model}`
        }
    }
    if (output === "") {
        output = "Details not found"
    }
    console.log(output)
}

module.exports = findLastCarInfo