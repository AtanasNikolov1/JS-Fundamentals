function chessBoard(size){
 console.log('<div class="chessboard">');
 let board="";
 for (let i = 0; i < size; i++) {
    console.log('  <div>');
    for (let j = 0; j < size; j++) {
        let row="";
        if ((i+j)%2===0) {
            row='    <span class="black"></span>';
        } else{
            row ='    <span class="white"></span>';
        }
        console.log(row);
    }
    console.log('  </div>');
 }
 console.log('</div>');
}
chessBoard(3)