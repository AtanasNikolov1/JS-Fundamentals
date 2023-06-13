function triangleArea(a,b,c){
    let semiPerimeter=(a+b+c)*(1/2);
    let result=semiPerimeter*(semiPerimeter-a)*(semiPerimeter-b)*(semiPerimeter-c);
    let area=Math.sqrt(result);
    console.log(area);
}
triangleArea(3,5.5,4)