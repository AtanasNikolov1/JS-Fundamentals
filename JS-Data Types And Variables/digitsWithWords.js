function digitsWithWords(digit){

    let numberDigit;
    switch (digit) {
        case "zero": numberDigit=0; break;
        case "one": numberDigit=1; break;
        case "two": numberDigit=2; break;
        case "three": numberDigit=3; break;
        case "four": numberDigit=4; break;
        case "five": numberDigit=5; break;
        case "six": numberDigit=6; break;
        case "seven": numberDigit=7; break;
        case "eight": numberDigit=8; break;
        case "nine": numberDigit=9; break;
    }
    console.log(numberDigit);
}
digitsWithWords('zero')