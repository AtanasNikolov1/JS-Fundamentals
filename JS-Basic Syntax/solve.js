function solve(n){
    let count=1;
    let sum=0;
    for (let i = 1; count<=n; i++) {
        if (i%2===1) {
            console.log(i);
            sum+=i;
            count++;
        } 
    }
    console.log(`Sum: ${sum}`);
}
solve(5)