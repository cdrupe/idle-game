var score = 0;

postToPage(score);

createButton('ADD', btnPressAdd);
changeTitle('Clicker Game');

createButton('SUBTRACT', btnPressSub);
changeTitle('Clicker Game');

setInterval(btnPressAdd, 1000);
setInterval(btnPressSub, 1000);

function btnPressAdd() {
  score++;
  postToPage(score);
}

function btnPressSub() {
  score--;
  postToPage(score);
}
