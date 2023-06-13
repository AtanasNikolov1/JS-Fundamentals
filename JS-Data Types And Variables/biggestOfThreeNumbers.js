function biggestNumber(firstNum,secondNum,thirdNum){
    let biggestNum=0;

    if (firstNum>=secondNum) {
        biggestNum=firstNum;
    } else{
        biggestNum=secondNum;
    }

    if (biggestNum>=thirdNum) {
        biggestNum=biggestNum;
    } else {
        biggestNum=thirdNum;
    }

    console.log(biggestNum);
}
biggestNumber(2,2,2)