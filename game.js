var score = 1; 

var title = new Title(''); 
var button = new Button('Hello Johny', btnPress);         
var scr = new Text(score);                     

let button1 = new Button('Hello', btnPress1); 
button1.hide()

if(score > 10) {
  button1.show();               
}



setInterval(btnPress, 2000000); 
 

function btnPress() {
  score++;         
  scr.edit(score); 
}

function btnPress1() {
  score++;         
  scr.edit(score); 
}


