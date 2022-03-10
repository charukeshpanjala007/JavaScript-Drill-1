module.exports = function (inventory) {
    let output = []
    if (inventory !== null && inventory !== undefined && inventory.length !== 0) {
        for (let index = 0; index < inventory.length; index++) {
            carDetails = inventory[index]
            if (carDetails !== undefined && carDetails.car_make) {
                if(carDetails.car_make ==="Audi" || carDetails.car_make==="BMW"){
                    output.push(carDetails)
                }
            }
        }
        output = JSON.stringify(output)
    }

    if (output.length === 0 || output === "[]") {
        output = "Details not found"
    }
    return (output)
}