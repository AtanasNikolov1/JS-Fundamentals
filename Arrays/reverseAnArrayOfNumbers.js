function reverseAnArrayOfNumbers(n,inputArr){
    let reverseArr=[];
    for (let i = n; i > 0; i--) {
        reverseArr.push(inputArr[i-1]);
    }
    console.log(reverseArr.join(" "));
}
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])