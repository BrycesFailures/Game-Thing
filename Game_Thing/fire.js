let fireParticles = [];
let fireMax = 100;
let fireN = 0;
let canFire = 0;

let fireX;
let fireY;



class fireParticle {
  
  constructor() {
    
    this.x = enemies.eX + random(-70, 50) + fireX;
    this.y = enemies.eY + random(-50, 50) + fireY;
    this.s = random(1, 3);
    this.f = random(255);
    
    this.xV = random(-4, 4);
    this.yV = random(0, 7);
     
  }
  
  
  
  move() {
    
    //this.x += this.xV;
    this.y -= this.yV;
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
    image(fireImage, 0, 0);
    
    pop();
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
}



function fireDelete() {
  
  fireN -= 1;
  fireParticles.splice(1, 1);
  
}