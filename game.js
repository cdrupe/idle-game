var score = 1; 

var title = new Title('Welcome to the Game'); 
var button = new Button('Hello', btnPress);   
var hidden = new Button('Welcome', btnPress);
var gone = new Button('To', btnPress);
var gone1 = new Button('The', btnPress)
hidden.hide();
gone.hide()
gone1.hide()
var scr = new Text(score);                  

setInterval(btnPress, 10000); 
 
function btnPress() {
  score++;         
  scr.edit(score); 


  if(score > 19) {
    hidden.show();
  }
  if(score > 24) {
   hidden.hide(500);
  }
  if(score > 24) {
    gone.show(500);
  }
  if(score > 29) {
    gone.hide(500);
  }
   if(score > 29) {
     gone1.show(500);
   }

}




