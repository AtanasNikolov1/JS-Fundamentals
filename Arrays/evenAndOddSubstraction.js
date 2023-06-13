function evenAndOddSubstraction(arr){
    let evenSum=0;
    let oddSum=0;
    for (let i = 0; i < arr.length; i++) {
        let number=Number(arr[i]);

        if (number%2===0) {
            evenSum+=number;
        } else{
            oddSum+=number;
        }
    }
    let result=evenSum-oddSum;
    console.log(result);
}
evenAndOddSubstraction([2,4,6,8,10])