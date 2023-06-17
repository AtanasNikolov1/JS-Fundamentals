function addAndSubstract(firstNumber,secondNumber,thirdNumber){
    
    function sum(firstNumber,secondNumber){
        return firstNumber+secondNumber;
    }
    let sumResult=sum(firstNumber,secondNumber);

    function subtract(sum,thirdNumber){
        return sum-thirdNumber;
    }
    
    return subtract(sumResult,thirdNumber);
}
console.log(addAndSubstract(23,6,10));
console.log(addAndSubstract(1,17,30));
console.log(addAndSubstract(42,58,100));

