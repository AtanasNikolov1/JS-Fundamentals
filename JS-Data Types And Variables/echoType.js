function echoType(parameter){
    if (typeof(parameter)==="string"||typeof(parameter)==="number") {
        console.log(typeof(parameter));
        console.log(parameter);
    } else {
        console.log(typeof(parameter));
        console.log("Parameter is not suitable for printing");
    }
}
echoType(null)