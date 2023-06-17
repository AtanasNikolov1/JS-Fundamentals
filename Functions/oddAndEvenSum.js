function oddAndEvenSum(number){
    let numberAsText=number.toString();

    let oddSum = 0;
    let evenSum= 0;
    let numberAsTextLength = numberAsText.length;

    for (let i = 0; i < numberAsTextLength; i++) {
        let currentNum=Number(numberAsText[i]);
        if (currentNum%2===0) {
            evenSum+=currentNum;
        } else{
            oddSum+=currentNum;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}
console.log(oddAndEvenSum(3495892137259234));