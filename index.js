const heading = document.getElementById('heading');
const p1 = document.querySelectorAll('img')[0];
const p2 = document.querySelectorAll('img')[1];
const roll_btn = document.getElementById('roll_btn');

roll_btn.addEventListener("click", rollDice);

function rollDice(){
  let p1Num = Math.floor(Math.random()*6)+1;
  let p1src = "dice" + p1Num + ".png";
  p1.setAttribute("src", p1src);

  let p2Num = Math.floor(Math.random()*6)+1;
  let p2src = "dice" + p2Num + ".png";
  p2.setAttribute("src", p2src);

  if(p1Num === p2Num){
    heading.innerText = "Rivals Eternal";
  }
  else if(p1Num > p2Num){
    heading.innerText = "Alpha reigns supreme";
  }
  else {
    heading.innerText = "Omega ends all";
  }
}
