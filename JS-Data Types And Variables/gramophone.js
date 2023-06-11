function gramophone(bandName,albumName,songName){
    let rotationTime=2.5;
    let duration=(albumName.length*bandName.length)*songName.length/2;
    let rotations=duration/rotationTime;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
gramophone('Rammstein', 'Sehnsucht','Engel')