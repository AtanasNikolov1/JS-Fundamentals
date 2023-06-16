function repeatString(text,n){
    let result="";
    for (let i = 0; i < n; i++) {
        result+=text;
    }
    return result;
}

console.log(repeatString("abc", 3 ));