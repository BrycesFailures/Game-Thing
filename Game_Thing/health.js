let playerH = 500;
let enemyH = 400;
let mEH = enemyH;

let playerD;

function pHealth() {
  
  if (pBleeding > 0) {
  fill(255, 20, 20);
} else {
  fill(0, 255, 80);
}
  rect(55, 150, playerH * 1.06, 40);

}

function pHurt(dmg) {
  
  playerH -= dmg/playerD;
  
}

function eHealth() {
  
  fill(0, 255, 80);
  rect(width - 586 - 5.5, height - 110, enemyH * 530/mEH, 40);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}