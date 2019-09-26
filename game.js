var stry = new Title('You finally make it to the drive way with the package in your bag.'); 

var walk = new Button('Hop out of the truck', walk1); 
var drive = new Button('Drive away', drive1)
var go = new Button('Continue', go)
go.hide()
var go2 = new Button('Continue', go2)
go2.hide()
var enter = new Button('enter', enter)
enter.hide()
var keepwalking = new Button()
keepwalking.hide()

function walk1() {
   stry.edit('You begin to walk through the woods')
 walk.hide()
 drive.hide()
 go.show()
}

function drive1() {
  stry.edit('You drive away. You never deliver the package and get fired from your job.')
  drive.hide()
  walk.hide()
}
function go() {
  stry.edit('As you walk the only thing you can here is your breathing.')
  go.hide()
  go2.show()
}
function go2(){
stry.edit('As you walk you see an abandonded cabin.')
enter.show()
go2.hide()
}
function enter1() {
  stry.edit('You decide to keep walking')
  go2.hide()
  enter.show()
}





  

  






