function rounding(number,precision){
    
    if (precision>15) {
        console.log(parseFloat(number.toFixed(15)));
    } else {
        console.log(parseFloat(number.toFixed(precision)));
    }

}
rounding(10.5,3)