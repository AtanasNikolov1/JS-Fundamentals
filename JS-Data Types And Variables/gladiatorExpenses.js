function gladiatorExpenses(losses,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let lossCounter=0;
    let helmetFractures=0;
    let swordFractures=0;
    let shieldFractures=0;
    let armorFractures=0;

    for (let i = 0; i < losses; i++) {
        lossCounter++;

        if (lossCounter%2===0) {
            helmetFractures++;
        }

        if (lossCounter%3===0) {
            swordFractures++;
        }

        if (i%2===0 && i%3===0 && i!==0) {
            shieldFractures++;
        }
   
        if (shieldFractures!==0 && shieldFractures%2===0) {
            armorFractures++;
        }
    }

    let expenses=(helmetFractures*helmetPrice)+(swordFractures*swordPrice)+(shieldFractures*shieldPrice)+(armorFractures*armorPrice);
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,12.50,21.50,40,200)