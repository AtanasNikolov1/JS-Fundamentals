function loadingBar(number){
    let percentcounter=number/10;
    let dotsCounter=10-percentcounter;

    if (percentcounter===10) {
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else{
        console.log(`${number}% [${'%'.repeat(percentcounter)}${'.'.repeat(dotsCounter)}]`);
        console.log("Still loading...");
    }
}
loadingBar(30)