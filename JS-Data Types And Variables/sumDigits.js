function sumDigits(num){
    let numAsText=num.toString();
    let sum=0;
    for (let i = 0; i < numAsText.length; i++) {
        sum+=Number(numAsText[i]);
    }
    console.log(sum);
}
sumDigits(97561)