module.exports = function (inventory, value) {
    let output = ""
    if(inventory!== null && inventory.length!== 0 && inventory!== undefined && value !== null && value != undefined){
        for (let index = 0; index < inventory.length; index++) {
            if (inventory[index].id === value) {
                const carDetails = (inventory[index]);
                output = (`Car ${value} is a ${carDetails.car_year} ${carDetails.car_make} ${carDetails.car_model}`)
                break;
    
            }
        }
    }
    if(output===""){
        output = "Details not found"
    }
    console.log(output)
};