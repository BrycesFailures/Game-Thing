let bloods = [];
let bloodMax = 100;
let canBlood = 0;
let bloodN = 0;

let bloodX;
let bloodY;



class blood {
  
  constructor() {
    
    this.x = enemies.eX + random(-70, 50) + bloodX;
    this.y = enemies.eY + random(-50, 50) + bloodY;
    this.s = random(5, 10);
    this.f = random(255);
    
    this.xV = random(-4, 4);
    this.yV = random(-7, 0);
     
  }
  
  
  
  move() {
    
    this.x += this.xV;
    this.y += this.yV;
    
    this.xV *= 0.99;
    this.yV += 0.3;
    
    this.s *= 0.995;
    
    if (this.y >= enemies.eY + 162) {
        
        this.y = enemies.eY + 162;
        this.xV = 0;
        this.yV = 0;
        
        }
    
  }
  
  
  
  show() {
    
    fill(this.f, 0, 0);
    
    rect(this.x, this.y, this.s, this.s);
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
}



function bloodDelete() {
  
  //canBlood = 0;
  
  bloodN -= 1;
  
  bloods.splice(1,1);
  
  
  
  
  
  
  
}