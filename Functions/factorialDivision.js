function factorialDivision(numberOne,numberTwo){

    function factorial(num){
        if (num===0) {
            return 1;
        } else{
            return num*factorial(num-1);
        }
    }

    let firstNumberFactorial=factorial(numberOne);
    let secondNumberFactoial=factorial(numberTwo);
    let result=firstNumberFactorial/secondNumberFactoial;
    console.log(result.toFixed(2));
}
factorialDivision(5,2)