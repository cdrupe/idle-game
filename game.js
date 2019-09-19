var score = 1; 

var title = new Title('Welcome to the Game'); // Create a title element
var button = new Button('hello', btnPress);   // Create a button element
var hidden = new Button('Boo!');
hidden.hide();
var scr = new Text(score);                    // Create a text element

let button1 = new Button('Hello', btnPress1); 
button1.hide()

if(score > 10) {
  button1.show();               
}



setInterval(btnPress, 2000000); 
 

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score > 15) {
    hidden.hide(500);
  }
}




