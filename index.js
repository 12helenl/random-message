var button= $('button');
button.on('click', generate);

function generate(){
  var randomMessage = ["Hey Jude","Here Comes the Sun","Let it Be","While My Guitar Gently Weeps", "Michelle","Nowhere Man", "Yesterday","I Am the Walrus","Strawberry Fields Forever","Penny Lane","All You Need is Love","Black Bird","Help!","Ticket to Ride","A Hard Day's Night","Sgt. Pepper's Lonely Hearts Club Band","Eleanor Rigby", "Don't Let Me Down","Yellow Submarine","Can't Buy Me Love"];
  var randomNumber = Math.random()*19;
  var rounded = Math.floor(randomNumber);
  var randomMessage = randomMessage[rounded];
  var song = $('.song');
  song.text(randomMessage);
  console.log(randomMessage);
}
