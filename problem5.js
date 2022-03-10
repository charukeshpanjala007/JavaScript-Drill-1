module.exports = function (data) {
    let output= 0
    if (data === "Details not found"){
        output = "No Cars found"
    }else if (data!=undefined && data!=null && data.length !== 0) {
        for (let index = 0; index < data.length; index++) {
            carYear = data[index]
            if(carYear > 2000){
                output += 1
            }
        }
    }
    if (output===0){
        output = "No Cars found"
    }
    return output
}

