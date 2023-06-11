function amazingNumbers(num){
    let numAsText=num.toString();
    let sum=0;

    for (let i = 0; i < numAsText.length; i++) {
        sum+=Number(numAsText[i]);
    }
    
    let result=sum.toString().includes("9");
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}
amazingNumbers(999) 