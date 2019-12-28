let mudParticles = [];
let mudMax = 100;
let mudN = 0;
let canMud = 0;

let mudX;
let mudY;



class mudParticle {
  
  constructor() {
    
    this.x = enemies.eX + random(-70, 50) + mudX;
    this.y = enemies.eY + random(-50, 50) + mudY;
    this.s = random(5, 8);
    this.f = random(255);
    
    this.xV = random(-4, 4);
    this.yV = random(0, 0.3);
     
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
    image(mudImage, 0, 0);
    
    pop();
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
}



function mudDelete() {
  
  mudN -= 1;
  mudParticles.splice(1, 1);
  
}