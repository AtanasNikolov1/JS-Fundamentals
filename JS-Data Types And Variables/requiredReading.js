function requiredReading(pagesNum,pagesRead,days){
    let totalTime=pagesNum/pagesRead;
    let requiredHours=totalTime/days;
    console.log(requiredHours);
}
requiredReading(432,15,4)