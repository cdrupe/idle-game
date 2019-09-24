var steps = 1; 
var rocks = 1;
var sticks = 1;

var stepsforward = new Button('Take Steps', btnPress); 
var stepsback = new Button('Take Steps Back', btnPressback)
var r0cks = new Button('Take Rocks', btnPress2);
r0cks.hide()
var st1cks = new Button('Take Sticks', btnPress3)
st1cks.hide()

var scr = new Text(steps);                  
var rck = new Text('Rocks', rocks);
rck.hide()
var stk = new Text('Sticks', sticks);
stk.hide()

setInterval(btnPress, 10000); 
setInterval(btnPress2, 10500);
 
function btnPress() {
  steps++;         
  scr.edit(steps);  

if (steps > 20) {
  r0cks.show();
  rck.show();
  }
  if (steps > 20) {
    st1cks.show();
    stk.show();
    }
}
function btnPressback() {
  steps--;
  scr.edit(steps);
}


function btnPress2() {
  rocks++;
  rck.edit(rocks);
}

function btnPress3() {
  sticks++;
  stk.edit(sticks);
}




