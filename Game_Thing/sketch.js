let time = 180;
let selectBox;
let gamemode = 0;
let canStart = 0;
let pg;

let pillarA = 12;
let pillarN = 0;
let pillars = [];

let enemies = {
  
  id:0,
  dif:0,
  weakness:0,
  eX:0,
  eY:0,
  eA:0,
  eXV:0,
  eYV:0,
  eAV:0,
  wX:0,
  wY:0,
  wA:0
  
};

let pDef;
let pCA;
let pBleeding;

let pillar1;
let pillar2;
let pillar3;
let pillar4;
let coin;
let legalPot;
let chestI;
let bombBoi;
let starBoi;
let slash;
let fireImage;
let waterImage;
let mudImage;
let xenomorty;
let dummy;
let toast;
let minigun;
let velociKitty;
let vScythe;
let alxatross;
let tree;

let water;
let fire;
let earth;
let air;
let attackI;
let spellsI;
let shopI;
let shopB;
let healI;
let HPtext;
let HPback;

let title;

let sP;
let sUP;
let rSUP;
let rSP;
let mUP;
let mP;

let bloodIcon;

let slashAlpha = 0;
let starAlpha = 0;

let hurt;
let swipe;
let boom1;
let boom2;
let click;

let fontyBoi;

function preload() {
  
  selectBox = loadImage('Assets/Select Box.png');
  selectArrow = loadImage('Assets/Select Arrow.png');
  water = loadImage('Assets/Water Spell.png');
  earth = loadImage('Assets/Earth Spell.png');
  air = loadImage('Assets/Air Spell.png');
  fire = loadImage('Assets/Fire Spell.png');
  attackI = loadImage('Assets/Attack.png');
  spellsI = loadImage('Assets/Spells.png');
  shopI = loadImage('Assets/Shop.png');
  healI = loadImage('Assets/Heal.png');
  HPtext = loadImage('Assets/HP Text.png');
  HPback = loadImage('Assets/HP Back.png');
  shopB = loadImage('Assets/Shop Back.png');
  
  pillar1 = loadImage('Assets/Pillar.png');
  pillar2 = loadImage('Assets/Pillar2.png');
  pillar3 = loadImage('Assets/Pillar3.png');
  pillar4 = loadImage('Assets/Pillar4.png');
  coin = loadImage('Assets/Coin.png');
  legalPot = loadImage('Assets/Health Potion.png');
  chestI = loadImage('Assets/Chestplate Item.png');
  bombBoi = loadImage('Assets/Bomb Item.png');
  starBoi = loadImage('Assets/Star Boi.png');
  slash = loadImage('Assets/Slash Effect.png');
  fireImage = loadImage('Assets/Fire Particle.png');
  waterImage = loadImage('Assets/Water Drop.png');
  mudImage = loadImage('Assets/Mud Drop.png');
  xenomorty = loadImage('Assets/Xenomorty.png');
  dummy = loadImage('Assets/Dummy.png');
  toast = loadImage('Assets/Toast.png');
  minigun = loadImage('Assets/Minigun.png');
  velociKitty = loadImage('Assets/VelociKitty.png');
  vScythe = loadImage('Assets/VelociKitty Scythe.png');
  alxatross = loadImage('Assets/Alxatross.png');
  tree = loadImage('Assets/Tree.png');
  
  title = loadImage('Assets/Game Thing Title.png');
  
  sP = loadImage('Assets/Start Pressed.png');
  sUP = loadImage('Assets/Start Unpressed.png');
  rSUP = loadImage('Assets/rSUP.png');
  rSP = loadImage('Assets/rSP.png');
  mUP = loadImage('Assets/mUP.png');
  mP = loadImage('Assets/mP.png');
  
  bloodIcon = loadImage('Assets/Blood Icon.png');
  
  fontyBoi = loadFont('Assets/DigCreate.otf');
  
  soundFormats('mp3','wav');
  
  hurt = loadSound('Assets/HurT.wav');
  swipe = loadSound('Assets/Hit.wav');
  boom1 = loadSound('Assets/Boom1.wav');
  boom2 = loadSound('Assets/Boom2.wav');
  click = loadSound('Assets/Click.wav');
  
}
  
function setup() {
  createCanvas(1366, 768);
  fullscreen(true);
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CORNER);
  noSmooth(true);
  noStroke();
  angleMode(DEGREES);
  frameRate(60);
  textFont(fontyBoi);
  textAlign(CENTER);
  //pg = createGraphics(width, height);
  //pg.noSmooth();
  
  //swipe.setVolume(10);
  //swipe.play();
  
  for(let i = 1; i <= pillarA; i ++) {
    
    pillarN += 1;
    pillars[i] = new pillar();
  
  }
  
  //for(let i = 1; i <= waterMax; i ++) {
    
    //pillar += 1;
    //waterX = width/2;
    //waterY = height/2;
    //waterParticles[i] = new waterParticle();
  
  //}
  
}

function draw() {
  
  //console.log(mouseX, mouseY);
  
  //console.log(airTicks);
  
  background(2);
  
  //startGame();
  //pg.clear();
  
  for (let i = 1; i <= pillarA; i ++) {
    pillars[i].move();
    pillars[i].show();
 }
  
  //for (let i = 1; i <= waterMax; i ++) {
    //waterParticles[i].move();
    //waterParticles[i].show();
 //}
  
  //image(pg, 0, 0);
    
  if (gamemode === 1) {
  noCursor();
  startGame();
  timeC();
  selectBoxF();
  bomb();
    
  if (pBleeding > 0) {
    
      push();
      
      translate(590, 225);
      imageMode(CENTER);
      scale(3);
      image(bloodIcon, 0, 0);
      
      pop();
      
      playerH -= 0.05;
    
      pBleeding -= 0.1;
      
      }
    
  if (eTurn < 2) {
      push();
    
      textSize(100);
      fill(61, 192, 230);
      textAlign(CENTER);
      text('<', width/2, height/2);
    
      pop();
      } else {
    push();
        
      textSize(100);
      fill(61, 192, 230);
      textAlign(CENTER);
      text('>', width/2, height/2);
    
      pop();
  }
  enemy();
  pHealth();
  eHealth();
    
    if (selectMode === 0) {
  selectArrowF();
  selects();
  } else {
    
   if (selectMode === 1) {
     selectArrowF();
     spells();
       }
    
  }
    
    slashF();
    starF();
    
    if (selectMode === 2) {
        shop();
        }
    
  }
  
  if (enemyH <= 0) {enemyDeath();}
  
  if (selectMode != 2) {
  
  fireTicks -= 0.1;
  waterTicks -= 0.1;
  earthTicks -= 0.1;
  airTicks -= 0.1;
      
      }
  
  if (fireTicks > 0) {enemyH -= 0.05}
  
  if (playerH <= 0) {
    if (hasStar == 0) {
      gamemode = 2;
      playerH = 1;
      //canStart = 1;
        } else {
      playerH = 100; 
      hasStar = 0;
      starAlpha = 80;
    }
      }
  
  if (gamemode === 0) {
      push();
    
      cursor();
    
      scale(10);
      image(title, 0, 0);
    
      pop();
    
      push();
    
      scale(11);
    
    if (mouseX > width/2 - 242 + 11 && mouseX < width/2 + 242 + 5.5 && mouseY > 561 - 99 + 11 && mouseY < 561 + 99 + 11) {
    
      image(sP, -5.5, -8);
      
  } else {
   image(sUP, -5.5, -8); 
  }
    
      pop();
      }
  
  if (mouseX > width/2 - 242 + 11 && mouseX < width/2 + 242 + 5.5 && mouseY > 561 - 99 + 11 && mouseY < 561 + 99 + 11 && gamemode === 0 && mouseIsPressed) {
    
    //gamemode = 0;
    canStart = 1;
    startGame();
    click.play();
    
  }
  
  if (mouseX > width/2 - 54 && mouseX < width/2 + 538 && mouseY < height - 77 && mouseY > height - 259 && mouseIsPressed && gamemode === 2) {
      
      canStart = 1;
      startGame();
    click.play();
      
    }
    
    if (mouseX > 138 && mouseX < 140 + 360 && mouseY < height - 77 && mouseY > height - 259 && mouseIsPressed && gamemode === 2) {
      
     canStart = 0; 
     gamemode = 0;
      click.play();
      
    }
  
  if (gamemode === 2) {
    
      cursor();
    
      canFire = 0;
      canWater = 0;
      canMud = 0;
    
      slashAlpha = 0;
      
      fill(255, 20, 20);
      rect(0, 0, width, height);
    
      fill(10);
      textAlign(CENTER);
      textSize(200);
      text('yOu ARe DiE', width/2, height/2);
    
    push();
    
    scale(10);
    
    if (mouseX > width/2 - 54 && mouseX < width/2 + 538 && mouseY < height - 77 && mouseY > height - 259) {
    
    image(rSP, 0, 0);
    
  } else {
    image(rSUP, 0, 0);
  }
    
   if (mouseX > 138 && mouseX < 140 + 360 && mouseY < height - 77 && mouseY > height - 259) {
    
    image(mP, 0, 0);
    
  } else {
    image(mUP, 0, 0);
  } 
    
    
    
    pop();
      
      }
  
  
  
  if (fireTicks > 0 && fireN < fireMax) {
    
    if (random(0, 5) < 1) {
      
      fireN += 1;
      fireX = random(-100, 100);
      fireY = random(-80, 80);
      fireParticles[fireN] = new fireParticle();
      
      setTimeout(fireDelete, random(750, 1000));
    
  }
      
      }
  
  if (canFire > 0) {
  
  for(let i = 1; i <= fireN; i ++) {
    
    fireParticles[i].move();
    fireParticles[i].show();
  
}
  
}
  
  if (waterTicks > 0 && waterN < waterMax) {
    
    if (random(0, 8) < 1) {
      
      waterN += 1;
      waterX = random(-80, 80);
      waterY = random(-80, 80);
      waterParticles[waterN] = new waterParticle();
      
      setTimeout(waterDelete, random(1750, 1900));
    
  }
      
      }
  
  if (canWater > 0) {
  
  for(let i = 1; i <= waterN; i ++) {
    
    waterParticles[i].move();
    waterParticles[i].show();
  
}
  
}
  
  if (earthTicks > 0 && mudN < mudMax) {
    
    if (random(0, 8) < 1) {
      
      mudN += 1;
      mudX = random(-80, 80);
      mudY = random(-80, 80);
      mudParticles[mudN] = new mudParticle();
      
      setTimeout(mudDelete, random(1750, 1900));
    
  }
      
      }
  
  if (canMud > 0) {
  
  for(let i = 1; i <= mudN; i ++) {
    
    mudParticles[i].move();
    mudParticles[i].show();
  
}
  
}
  
  if (canBlood > 0) {
  
  for(let i = 1; i <= bloodN; i ++) {
    
    bloods[i].move();
    bloods[i].show();
    
  }
  
}
  
}

function timeC() {
  
  if (selectMode <= 1) {
  time -= 1;
  
  if (time < 1) {
     time = 180;
    //selectN = 0;
    eTurn += 1;
    if (eTurn < 3) {
        swipeDir = 1;
        playerTurn();
        }
    if (eTurn === 3) {
      swipeDir = 0;
      enemyTurn();
  }
   
    if (eTurn < 3) {
    selectN = 0;
    selectMode = 0;
        }
    
    if (eTurn === 3) {
        eTurn = 0;
        }
    
     }
} else {}
}

function selectBoxF() {
  
  push();
  scale(10);
  image(selectBox, 0, 0);
  pop();
  
  push();
  scale(10);
  tint(255, 75);
  image(HPback, 0, 0);
  pop();
  
  push();
  scale(10);
  image(HPtext, 0, 0);
  pop();
  
  fill(66, 188, 245);
  rectMode(CORNER);
  rect(40, height/2 - 30, time, 20);
  
  //push();
  //translate(width/5 * 3.6, 150);
  //scale(6);
  //tint(255, 126);
  //image(dummy, 0, 0);
  //pop();
  
}

function startGame() {
  
  if (canStart === 1) {
  pBleeding = 0;
  fireN = 0;
  canFire = 0;
  waterN = 0;
  canWater = 0;
  canMud = 0;
  bloodN = 0;
  money = 0;
  hasBomb = 0;
  hasStar = 0;
  playerD = 1;
  enemies.id = 0;
  enemies.dif = 0.8;
  enemies.weakness = round(random(1, 4));
  enemies.eX = width/5 * 3.6 + 138;
  enemies.eY = 150 + 168;
  enemies.eA = 0;
  enemies.eXV = 0
  enemies.eYV = 0;
  enemies.eAV = 0;
  enemies.wX = 0;
  enemies.wY = 0;
  enemies.wA = 0;
  playerH = 500;
  selectN = 0;
  eTurn = 0;
  enemyH = 200;
  mEH = enemyH;
  time = 180;
  selectN = 0;
  selectMode = 0;
  pCA = 1;
  fireTicks = 0;
  waterTicks = 0;
  earthTicks = 0;
  airTicks = 0;
  gamemode = 1;
}
  
  canStart = 0;
  
}

function enemyDeath() {
  
  money += 20 + (enemies.dif * 5);
  
  enemies.dif += 0.2;
  enemyH = enemies.dif * 200;
  mEH = enemyH;
  
  
  
  enemies.eX = width/5 * 3.6 + 138;
  enemies.eY = 150 + 168;
  enemies.eA = 0;
  enemies.eXV = 0;
  enemies.eYV = 0;
  enemies.eAV = 0;
  enemies.wX = 0;
  enemies.wY = 0;
  enemies.wA = 0;
  
  enemies.id = round(random(1, 5));
  
  selectN = 0;
  selectMode = 0;
  eTurn = 0;
  
  fireTicks = 0;
  waterTicks = 0;
  earthTicks = 0;
  airTicks = 0;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function slashF() {
  
  push();
  
  imageMode(CENTER);
  
  if (swipeDir === 1) {
  scale(18);
} else {
 scale(-18, 18); 
}
  
  tint(255, slashAlpha);
  
  if (swipeDir === 0) {
  image(slash, -37, 21);
} else {
 image(slash, 37, 21); 
}
  
  pop();
  
  if (slashAlpha > 0) {
      
      slashAlpha -= 2;
      
      }
  
}

function starF() {
  
 push(); 
  
  translate(width/2 - 560, height/2);
  
  imageMode(CENTER);
  tint(255, starAlpha);
  scale(15);
  
  if (gamemode === 1) {
  
  image(starBoi, 0, 0);
  
}
  
  if (starAlpha > 0) {
      starAlpha -= 2;
      }
  
 pop();
  
}

function bomb() {
  
 if (hasBomb > 0) {
   
     push();  
     translate(40, 260);
     imageMode(CENTER);
     scale(1.5);
     image(bombBoi, 0, 0);
     pop();
   
     if (key === 'b' && hasBomb > 0) {
         
         hasBomb = 0;
         enemyH -= 120;
       
         boom1.play();
       
         boom2.setVolume(2);
         boom2.play();
       
         for (let i = fireN; i <= fireMax; i ++) {
           
           fireN += 1;
           fireX = random(-100, 100);
           fireY = random(-80, 80);
           fireParticles[fireN] = new fireParticle();
      
           setTimeout(fireDelete, 750);
           
           
         }
         
         }
     
     }
  
}
