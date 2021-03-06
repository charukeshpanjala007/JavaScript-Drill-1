const sortInfo= function (inventory) {
    let output = []
    if (inventory !== null && inventory !== undefined && inventory.length !== 0) {
        for (let index = 0; index < inventory.length; index++) {
            carDetails = inventory[index]
            if (carDetails !== undefined && carDetails.car_make && carDetails.car_model) {
                output.push(carDetails.car_model)
            }
        }
        output = output.sort()
    }
    if (output.length=== 0) {
        output = "Details not found"
    }
    console.log(output)
}

module.exports = sortInfo