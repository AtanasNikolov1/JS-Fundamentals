function integerAndFloat(firstNum,secondNum,thirdNum){
    let sum=firstNum+secondNum+thirdNum;
    let isInteger= sum%1===0;
    
    if (isInteger) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
integerAndFloat(100.1, 200, 303)