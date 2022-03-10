module.exports = function (inventory) {
    let output = []
    if (inventory !== null && inventory !== undefined && inventory.length !== 0) {
        for (let index = 0; index < inventory.length; index++) {
            carDetails = inventory[index]
            if (carDetails !== undefined && carDetails.car_year) {
                output.push(carDetails.car_year)
            }
        }
    }
    if (output.length=== 0) {
        output = "Details not found"
    }
    return (output)
}