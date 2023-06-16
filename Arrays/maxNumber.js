function maxNumber(inputArr){

    let resultArr=[];
    let rotations=inputArr.length-1;
    let inputArrSize=inputArr.length;

    /*for (let i = 0; i < inputArr.length; i++) {
        let currentElement=inputArr[i];
        if (inputArr[i]>biggestNum) {
            biggestNum=currentElement;       
        } else{
            biggestNum=biggestNum;
        }
    }*/

    for (let i = 0; i < rotations; i++) {
        let biggestNum=0;
        for (let j = 0; j < inputArrSize; j++) {
            let currentElement=inputArr[j];
        if (inputArr[j]>biggestNum) {
            biggestNum=currentElement;       
        } else{
            biggestNum=biggestNum;
        }
        }
        resultArr.push(biggestNum)
        inputArr.shift()
    }
    console.log(resultArr);
}
maxNumber([1, 4, 3, 2] )