let waterParticles = [];
let waterMax = 100;
let waterN = 0;
let canWater = 0;

let waterX;
let waterY;



class waterParticle {
  
  constructor() {
    
    this.x = enemies.eX + random(-70, 50) + waterX;
    this.y = enemies.eY + random(-50, 50) + waterY;
    this.s = random(5, 8);
    this.f = random(255);
    
    this.xV = random(-4, 4);
    this.yV = random(0, 0.5);
     
  }
  
  
  
  move() {
    
    //this.x += this.xV;
    this.y += this.yV;
    this.yY *= 1.01;
    this.s *= 0.99;
    
    //this.xV *= 0.99;
    //this.yV += 0.3;
    
  }
  
  
  
  show() {
    
    fill(this.f, 0, 0);
    
    push();
    
    imageMode(CENTER);
    
    translate(this.x, this.y);
    scale(this.s);
    image(waterImage, 0, 0);
    
    pop();
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
}



function waterDelete() {
  
  waterN -= 1;
  waterParticles.splice(1, 1);
  
}