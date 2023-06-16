function equalArrays(firstArr, secondArr) {

    let areEqual = false;
    let sum=0;

    for (let i = 0; i < firstArr.length; i++) {
        let arr1Number = Number(firstArr[i]);
        let arr2Number = Number(secondArr[i]);
        if (arr1Number !== arr2Number) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual=false;
            break;
        } else {
            areEqual = true;
            sum+=arr1Number;
        }
    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }


}
equalArrays(['1'], ['10'])