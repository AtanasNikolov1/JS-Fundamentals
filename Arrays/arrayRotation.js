function arrayRotation(inputArr,rotations){

    for (let i = 0; i < rotations; i++) {
        let currentElement=inputArr.shift();
        inputArr.push(currentElement);
    }
    console.log(inputArr.join(" "));
}
arrayRotation([32, 21, 61, 1], 4 )