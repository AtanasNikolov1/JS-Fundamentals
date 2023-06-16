function mergeArrays(firstArr,secondArr){
    let result =[];
    for (let i = 0; i < firstArr.length; i++) {
        let evenElement=0;;
        let oddElement="";
        if (i%2===0) {
            evenElement=Number(firstArr[i])+Number(secondArr[i]);
            result.push(evenElement);
        } else{
            oddElement=firstArr[i]+secondArr[i]; 
            result.push(oddElement);
        }
    }
    console.log(result.join(" - "));
}
mergeArrays(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44'])