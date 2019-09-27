var stry = new Title('You finally make it to the drive way with the package in your bag.'); 

var walk = new Button('Get out of the truck', walk1); 
var drive = new Button('Drive away', drive1)
var go = new Button('Continue', go)
go.hide()
var go2 = new Button('Continue', go2)
go2.hide()
var enter = new Button('Enter', enter)
enter.hide()
var keepwalking = new Button('Leave it', keepwalking)
keepwalking.hide()
var go3 = new Button('Continue',inside)
go3.hide()
var inside = new Button('Leave',go4)
inside.hide()
var go4 = new Button('Continue', go4)
go4.hide()
var go5 = new button('Continue'.go5)
go5.hide()




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
  stry.edit('As you walk the only thing you can here is your breathing, and the crunch of the leaves and the sticks under your feet.')
  go.hide()
  go2.show()
}
function go2(){
stry.edit('As you walk you see an abandonded cabin.')
enter.show()
keepwalking.show()
go2.hide()
}
function enter() {
  stry.edit('You walk into the abandonded cabin.')
  go2.hide()
  enter.hide()
  keepwalking.hide()
  go3.show()
}
function inside() {
  stry.edit('Inside the cabin you find a bunch of empty beer cans and cigarette butts.') 
  inside.show()
  go3.hide()
}
function keepwalking() { 
  stry.edit('You decide to keep walking.')
  keepwalking.hide()
  enter.hide()
  go4.show()
}
function go4(){
 stry.edit('You leave the cabin and begin to walk, it is darker now and you can barely see.')
 go4.show()
 inside.hide()
 go4.hide()
 go5.show()
}
function woods() {
  stry.edit()


}
 



  

  






