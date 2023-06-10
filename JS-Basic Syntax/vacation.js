function vacation(count,type,day){

    let price=0;
    if (type==="Students") {
        switch (day) {
            case "Friday": price=8.45; break;
            case "Saturday": price=9.80; break;
            case "Sunday": price=10.46; break;
        }
    } else if(type==="Business"){
        switch (day) {
            case "Friday": price=10.90; break;
            case "Saturday": price=15.60; break;
            case "Sunday": price=16; break;
        }
    } else if(type==="Regular"){
        switch (day) {
            case "Friday": price=15; break;
            case "Saturday": price=20; break;
            case "Sunday": price=22.50; break;
        }
    }

    let sum=count*price;
    let discount=0;
    let finalPrice=0;
    if (type==="Students" && count>=30) {
        discount=sum*0.15;
        finalPrice=sum-discount;
    } else if(type==="Business" && count>=100){
        discount=10*price;
        finalPrice=sum-discount;
    } else if(type==="Regular" && count>=10 && count<=20){
        discount=sum*0.05;
        finalPrice=sum-discount;
    } else{
        finalPrice=sum;
    }

    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}
vacation(40,"Regular","Saturday")