class pillar {
  
  constructor() {
    
  this.x = random(-50, width);
  this.y = 0;
  this.z = pillarN;
  this.t = 0;
    this.s = 22;
    this.xSpd = -1;
    this.pXSpd = 0;
    if (this.z <= pillarA / 4) {
      this.xSpd = random(-2, -2.5);
      this.t = pillar4;
      this.s = 17;
  }
   
    if (this.z <= pillarA / 2 && this.z > pillarA / 4) {
        this.xSpd = random(-2.8, -3);
      this.t = pillar3;
      this.s = 18;
        }
    
    if (this.z <= pillarA/2/2*3 && this.z > pillarA / 2) {
        this.xSpd = random(-4, -5);
      this.t = pillar2;
      this.s = 20;
        }
    
    if (this.z <= pillarA && this.z > pillarA/2/2*3) {
        this.xSpd = random(-6.5, -8);
      this.t = pillar1;
      this.s = 22
        }
    
    this.pXSpd = this.xSpd;
    
  }
  
  move() {
  
  this.x += this.xSpd;
    
    if (this.x < -450) {
        this.x = width + random(100, 300);
      this.xSpd = this.pXSpd;
        }
  
  }
  
  show() {
  
    push();
    translate(this.x, 0);
  //pg.tint(this.t*10+55);
  scale(this.s);
  image(this.t, 0, this.y);
  
  
  
  
  pop();
  
  }
  
}