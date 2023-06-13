function primeNumberChecker(number){
    //Declare 'flag' and initialize it to false
    let flag=false;

    //Since we know that 1 is neither prime nor composite -> flag=true
    if(number===1){
        flag=true;
    } else if(number>1){
        //Iterate from 2 to number/2
        for (let i = 2; i < number/2; i++) {
            //Check if 'i' divides 'number without leaving the remainder
            if (number%i===0) {
                //If yes,then set a flag to true and exit the loop
                flag=true;
                break;
            }
        }
    }

    //If the flag is found true, it means a divisor was found during the iteration
    if (flag===true) {
        console.log("false");
    } else {
        //Otherwise, no divisor was found
        console.log("true");
    }
}
primeNumberChecker(7)