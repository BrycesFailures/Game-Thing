let selectN = 0;
let selectY = 0;
let selectMode = 0;

let enemyMove;

let swipeDir;

let waterTicks = 0;
let fireTicks = 0;
let earthTicks = 0;
let airTicks = 0;


let money = 0;

let hasBomb = 0;
let hasStar = 0;

function selectArrowF() {
  
  push();
  translate(45, height/2 + 20 + selectY);
  scale(4);
  tint(255, 200); 
  image(selectArrow, 0, 0); 
  pop();
  
  if (selectN <= -1) {
      
      selectN = 3
      
      }
  
  if (selectN >= 4) {
      
      selectN = 0;
      
      }
  
  selectY = selectN * 84;
  
}

function keyPressed() {
  
 if (keyCode === DOWN_ARROW) {
     
     selectN += 1;
     
     }
  
  if (keyCode === UP_ARROW) {
  
     
     selectN -= 1; 
      
      }
  
  if (selectMode === 0 && selectN === 1 && keyCode === RIGHT_ARROW) {
      
      selectMode = 1;
    selectN = 0;
      
      }
  
  if (selectMode === 1 && keyCode === LEFT_ARROW) {
      
      selectMode = 0;
    selectN = 0;
      
      }
  
  if (selectMode === 0 && selectN === 2 && keyCode === RIGHT_ARROW) {
      
      selectMode = 2;
    selectN = 0;
    
    canBlood = 0;
    
    canFire = 0;
    canWater = 0;
    canMud = 0;
    
    for(let i = 0; i < bloodMax; i++) {
  
  bloods.splice(i,1);
  
  }
      
      }
  
  if (selectMode === 2 && keyCode === LEFT_ARROW) {
      
      selectMode = 0;
    selectN = 0;
    time = 180;
    canFire = 1;
    canWater = 1;
    canMud = 1;
      
      }
  
  if (key === 'f') {
      fullscreen(true);
      }
  
  //Chestplate--------------------------------------------
  
  if (key === ' ' && selectMode === 2 && selectN === 0 && money >= 40) {
      
      playerD += 0.25;
    
      money -= 40;
      
      }
  
  //Health Potion-----------------------------------------
  
  if (key === ' ' && selectMode === 2 && selectN === 3 && money >= 25) {
    money -= 25;
        for(let i = 0; i <= 100; i ++) {
          if (playerH < 500) {
          playerH += 1;
              }
        }
        }
  
  //Bomb--------------------------------------------------
  
  if (key === ' ' && selectMode === 2 && selectN === 2 && hasBomb === 0 && money >= 50) {
    
      hasBomb = 1;
    
      money -= 50;
      
      }
  
  //Star--------------------------------------------------
  
  if (key === ' ' && selectMode === 2 && selectN === 1 && hasStar === 0 && money >= 80) {
    
      hasStar = 1;
    
      money -= 80;
      
      }
  
}

function spells() {
  
  push();
  
  imageMode(CENTER);
  translate(400, height/2 + 54);
  
  if (selectN === 0) {
  scale(8);
} else {
  scale(7.5);
}
  
  tint(50, 143, 168);
  image(water, 0, 0);
  
  pop();
  
  push();
  
  imageMode(CENTER);
  translate(400, height/2 + 54 + 84);
  
  if (selectN === 1) {
  scale(8);
} else {
  scale(7.5);
}
  
  tint(250, 146, 0);
  image(fire, 0, 0);
  
  pop();
  
  push();
  
  imageMode(CENTER);
  translate(400, height/2 + 54 + 84*2);
  
  if (selectN === 2) {
  scale(8);
} else {
  scale(7.5);
}
  
  tint(61, 39, 7);
  image(earth, 0, 0);
  
  pop();
  
  push();
  
  imageMode(CENTER);
  translate(400, height/2 + 54 + 84*3);
  
  if (selectN === 3) {
  scale(8);
} else {
  scale(7.5);
}
  
  tint(156);
  image(air, 0, 0);
  
  pop();
}

function selects() {
  
  push();
  
  imageMode(CENTER);
  translate(400, height/2 + 54);
  
  if (selectN === 0) {
  scale(8);
} else {
  scale(7.5);
}
  
  tint(20);
  image(attackI, 0, 0);
  
  pop();
  
  push();
  
  imageMode(CENTER);
  translate(400, height/2 + 54 + 84);
  
  if (selectN === 1) {
  scale(8);
} else {
  scale(7.5);
}
  
  tint(20);
  image(spellsI, 0, 0);
  
  pop();
  
  push();
  
  imageMode(CENTER);
  translate(400, height/2 + 54 + 84*2);
  
  if (selectN === 2) {
  scale(8);
} else {
  scale(7.5);
}
  
  tint(20);
  image(shopI, 0, 0);
  
  pop();
  
  push();
  
  imageMode(CENTER);
  translate(400, height/2 + 54 + 84*3);
  
  if (selectN === 3) {
  scale(8);
} else {
  scale(7.5);
}
  
  tint(20);
  image(healI, 0, 0);
  
  pop();
  
}

function shop() {
  
  push();
  
  scale(11);
  image(shopB, 0, 0);
  image(legalPot, 0, 0);
  image(chestI, 0, 0);
  image(starBoi, 0, 0);
  image(bombBoi, 0, 0);
  
  pop();
  
  if (selectN <= -1) {
      
      selectN = 3
      
      }
  
  if (selectN >= 4) {
      
      selectN = 0;
      
      }
  
  push();

  if (selectN === 0) {
      translate(width/7 + 3, 720);
    scale(6);
    rotate(-90);
    image(selectArrow, 0, 0);
    push();
    rotate(90);
    textAlign(CENTER);
    textSize(20);
    fill(240);
    text('$40', 8, -50);
    pop();
      }
  
  if (selectN === 3) {
    translate(width/3 + 101, 680);
    scale(6);
    rotate(-90);
    image(selectArrow, 0, 0);
    push();
    rotate(90);
    textAlign(CENTER);
    textSize(20);
    fill(240);
    text('$25', 8, -50);
    pop();
    
      }
  
  if (selectN === 2) {
    translate(width/2 + 175, 430);
    scale(6);
    rotate(-90);
    image(selectArrow, 0, 0);
    push();
    rotate(90);
    textAlign(CENTER);
    textSize(20);
    fill(240);
    text('$50', 8, -50);
    pop();
      }
  
  if (selectN === 1) {
    translate(width - 252, 700);
    scale(6);
    rotate(-90);
    image(selectArrow, 0, 0);
    push();
    rotate(90);
    textAlign(CENTER);
    textSize(20);
    fill(240);
    text('$80', 8, -50);
    pop();
      }
  
  pop();
  
  push();
  
  scale(11);
  image(coin, 0, 0);
  
  pop();
  
  fill(234, 255, 46);
  textAlign(LEFT);
  textSize(60);
  text(money, 110, 80.5);
  
}

function playerTurn() {
  
  //Attack -----------------------------------------------
  
  if (selectMode === 0 && selectN === 0) {
    
      enemyMove = random(20, 25);
    
      swipe.play();
    
    bloodX = random(-100, 100);
    bloodY = random(-80, 80);
    canBlood = 1;
    
    for(let i = 1; i <= bloodMax; i++) {
      
    bloodN += 1;
    bloods[i] = new blood();
      
    setTimeout(bloodDelete, random(2000, 3000));
    
  } 
      
      enemyH -= 20 / enemies.dif;
    
      enemies.eX += enemyMove;
    
      slashAlpha = 140;
    
      setTimeout(enemyMoveBack, 75);
  
      
      }
  
  //Heal -------------------------------------------------
  
  if (selectMode === 0 && selectN === 3) {
      
      for(let i = 0; i <= 30; i ++) {
          if (playerH < 500) {
          playerH += 1;
              }
        }
      
      }
  
  //Water Spell ------------------------------------------
  
  if (selectMode === 1 && selectN === 0) {
    
      canWater = 1;
    
      waterTicks = 6;
    
      fireTicks = 0;
      
      }
  
  //Fire Spell -------------------------------------------
  
  if (selectMode === 1 && selectN === 1) {
    
      canFire = 1;
      
      fireTicks = random(50, 80);
      
      enemyH -= 10/ enemies.dif;
      
      }
  
  //Earth Spell ------------------------------------------
  
  if (selectMode === 1 && selectN === 2) {
    
    canMud = 1;
    
    earthTicks = 6;
      
    enemyMove = random(15, 20);
      
      enemyH -= 10 / enemies.dif;
    
      enemies.eX += enemyMove;
    
      setTimeout(enemyMoveBack, 75);
    
      if (round(random(1, 3)) === 3) {
          earthTicks = 12;
          eTurn -= 2;
          //console.log('eat it dude');
          }
      
      }
  
  //Air Spell --------------------------------------------
  
  if (selectMode === 1 && selectN === 3) {
      
      enemyMove = random(15, 20);
      
      enemyH -= 10 / enemies.dif;
    
      enemies.eX += enemyMove;
    
      setTimeout(enemyMoveBack, 75);
    
    if (round(random(0.5, 2)) === 2) {
        
        }
      airTicks = random(25, 30);
      }
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function enemyTurn() {
  
  hurt.play();
  
  if (airTicks === 0) {
    pHurt(enemies.dif * round(random(40, 50)));
    } else {
      pHurt(enemies.dif * round(random(25, 40)));
    }
  
  if (random(0, 4) < 1) {
      
      pBleeding = random(30, 50);
      
      }
  
  slashAlpha = 140;
  
  enemyMove = random(-40, -30);
  
  enemies.eX += enemyMove;
  
  setTimeout(enemyMoveBack, 75);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function enemyMoveBack() {
  
  enemies.eX -= enemyMove;
  
}