 function rightPlace(firstWord,letter,secondWord){
    let result=firstWord.replace('_',letter);
    if (result===secondWord) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
 }
 rightPlace('Str_ng', 'i','String')