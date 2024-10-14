//Test 1

function addAndSubstract(inputArr){
    
    let resultArr=[];
    for (let i = 0; i < inputArr.length; i++) {
        let resultNum=0;
        if (inputArr[i]%2===0) {
            resultNum=inputArr[i]+i;
            resultArr.push(resultNum);
        } else{
            resultNum=inputArr[i]-i;
            resultArr.push(resultNum);
        }
    }

    let inpuArrSum=0;
    for (let i = 0; i < inputArr.length; i++) {
        inpuArrSum+=inputArr[i];
    }

    let resultArrSum=0;
    for (let i = 0; i < resultArr.length; i++) {
        resultArrSum+=resultArr[i];
    }

    console.log(`[ ${resultArr.join(", ")} ]`);
    console.log(inpuArrSum);
    console.log(resultArrSum);
}
addAndSubstract([-5, 11, 3, 0, 2])
