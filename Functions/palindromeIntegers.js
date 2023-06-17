function palindromeIntegers(array){
    
    for (let i = 0; i < array.length; i++) {
         
        let numberAsString = array[i].toString();
        let reversedNUmber = numberAsString.split('').reverse().join('');
        
        if (numberAsString===reversedNUmber) {
            console.log(true);
        } else{
            console.log(false);
        }
    }
}
console.log(palindromeIntegers([123,323,421,121]));