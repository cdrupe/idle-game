var score = 0;

postToPage(score); // Print to the page

<<<<<<< HEAD
createButton('ADD', btnPressAdd);
=======
createButton('Button', btnPress); // Make a button
>>>>>>> upstream/master
changeTitle('Clicker Game');
createText('Hello');

createButton('SUBTRACT', btnPressSub);
changeTitle('Clicker Game');

setInterval(btnPressAdd, 10000);
setInterval(btnPressSub, 10000);

function btnPressAdd() {
  score++;
  postToPage(score);
}

function btnPressSub() {
  score--;
  postToPage(score);
}
