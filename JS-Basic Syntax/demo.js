function thePyramidOfKIngDjoser(width,increment){
    
    let blocksCounter=0;
    let stone=0;
    let marble=0;
    let gold=0;
    let lapiz=0;

    for (let i = width; i > 0 ; i-=2) {
        blocksCounter++;
        //stone calculation
        if (i>2) {
            stone+=(i-2)*(i-2);
        }

        //marble calculation
        if (i>2 && blocksCounter%5!==0) {
            marble+=(4*i)-4;
        }

        //lapiz calculation
        if(blocksCounter%5===0){
            lapiz+=(4*i)-4;
        }

        //gold calculation
        if (i===1 || i===2) {
            gold=i*i;
        }
    }
    let height=blocksCounter*increment;
    let stoneAmount=stone*increment;
    let goldAmount=gold*increment;
    let lapizAmount=lapiz*increment;
    let marbleAmount=marble*increment;

    
    console.log(`Stone required: ${Math.ceil(stoneAmount)}`);
    console.log(`Marble required: ${Math.ceil(marbleAmount)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapizAmount)}`);
    console.log(`Gold required: ${Math.ceil(goldAmount)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKIngDjoser(11,1)