function login(input){
    let username=input[0];
    let password="";
    for (let i = username.length-1; i >= 0; i--) {
        password+=username[i];
    }
    
    let loggedIn=false;

    for (let i = 1; i < 4; i++) {
        if (input[i]===password) {
            console.log(`User ${username} logged in.`);
            loggedIn=true;
        } else{
            console.log(`Incorrect password. Try again.`);
            if (i===3) {
                break;
            }
        }
    }

    if (loggedIn===false) {
       if (input[4]===password) {
        console.log(`User ${username} logged in.`);
       } else {
        console.log(`User ${username} blocked!`);
       }
    }
}
login(['Acer','login','go','let me in','recA'])