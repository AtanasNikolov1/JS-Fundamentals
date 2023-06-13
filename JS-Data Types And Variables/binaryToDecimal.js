function binaryToDecimal(binaryNumber){

    let binaryAsText=binaryNumber.toString();
    let decimalNumber=0;
    let size=binaryAsText.length;
    
    for (let i = 0; i < binaryAsText.length; i++) {
        decimalNumber+=Number(binaryAsText[i])*Math.pow(2,size-i-1)
    }
    console.log(decimalNumber);
    
}   
binaryToDecimal(11110000)