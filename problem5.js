const findOlderThan200 = function(inventory){
    let output = []
    if(inventory!==null && inventory!==undefined && inventory.length!==0){
        for(let index=0; index<inventory.length; index++){
            const carDetails = inventory[index]
            if(carDetails.car_year<2000){
                output.push(carDetails)
            }
        }
    }
    if(output.length > 0 && output!==[]){
        console.log(output, `Number of cars older than 2000: ${output.length}`)
    }else{
        console.log("Details not found")
    }
}

module.exports = findOlderThan200