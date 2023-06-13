function thePyramidOfKIngDjoser(width,increment){

    let blocksCounter=0;
    let stone=0;
    let marble=0;
    let lapiz=0;
    let gold=0;
    let lapizStepscounter=0;

    for (let i = width; i > 0; i-=2) {
        //Height calculation
        blocksCounter+=1;
        lapizStepscounter+=1;
        //Stone calculation
        if (i>2) {
            stone+=((i-2)*(i-2))*increment;
        }
        //Marble calculation
        if (i>2 && lapizStepscounter%5!==0) {
            marble+=((4*i)-4)*increment;
        }


        //Lapiz calculation
        if (lapizStepscounter%5===0) {
            lapiz+=(4*i)-4;
        }   

        //gold calculation
        if (i===1 || i==2) {
            gold=i*i;
        }
    }

    let finalGold=gold*increment;
    let finalLapiz=(lapiz)*increment;
    let height=blocksCounter*increment;
    
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(finalLapiz)}`);
    console.log(`Gold required: ${Math.ceil(finalGold)}`);//ready
    console.log(`Final pyramid height: ${Math.floor(height)}`);//ready

}
thePyramidOfKIngDjoser(23,0.5)