let eTurn;

function enemy() {
  
 //Dummy
  if (enemies.id === 0) {
    push();
    
    if (fireTicks > 0) {
    
    tint(255, 170, 87)
    
    }
    
    if (waterTicks > 0) {
        
        tint(77, 163, 255);
        
        }
    
    if (earthTicks > 0) {
        
        tint(122, 69, 0);
        
        }
    
    translate(enemies.eX, enemies.eY);
    imageMode(CENTER);
    scale(6);
    rotate(enemies.eA);
    image(dummy, 0, 0);
    pop();
  }
  
  //Xenomorty
  if (enemies.id === 1) {
    push();
    
    if (fireTicks > 0) {
    
    tint(255, 170, 87)
    
    }
    
    if (waterTicks > 0) {
        
        tint(77, 163, 255);
        
        }
    
    if (earthTicks > 0) {
        
        tint(122, 69, 0);
        
        }
    
    translate(enemies.eX, enemies.eY);
    imageMode(CENTER);
    scale(6);
    rotate(enemies.eA);
    image(xenomorty, 0, 0);
    pop();
      }
  
//Toast & Minigun
  if (enemies.id === 2) {
    push();
    
    if (fireTicks > 0) {
    
    tint(255, 170, 87)
    
    }
    
    if (waterTicks > 0) {
        
        tint(77, 163, 255);
        
        }
    
    if (earthTicks > 0) {
        
        tint(122, 69, 0);
        
        }
    
    translate(enemies.eX, enemies.eY);
    imageMode(CENTER);
    scale(6);
    rotate(enemies.eA);
    image(toast, 0, 0);
    pop();
    
    push();
    translate(enemies.eX, enemies.eY);
    imageMode(CENTER);
    scale(6);
    rotate(enemies.wA);
    image(minigun, enemies.wX - 10, enemies.wY);
    pop();
      }
  
  //VelociKitty & Friends
  
  if (enemies.id === 3) {
    
    enemies.wX = 17;
    enemies.wY = -20;
    enemies.wA = 30;
    
    push();
    
    if (fireTicks > 0) {
    
    tint(255, 170, 87)
    
    }
    
    if (waterTicks > 0) {
        
        tint(77, 163, 255);
        
        }
    
    if (earthTicks > 0) {
        
        tint(122, 69, 0);
        
        }
    
    translate(enemies.eX, enemies.eY + 17);
    imageMode(CENTER);
    scale(6);
    rotate(enemies.eA);
    image(velociKitty, 0, 0);
    pop();
    
    push();
    translate(enemies.eX, enemies.eY);
    imageMode(CENTER);
    scale(6);
    rotate(enemies.wA);
    image(vScythe, enemies.wX - 25, enemies.wY + 20);
    pop();
      }
  
  //Alxatross
  
  if (enemies.id === 4) {
    push();
    
    if (fireTicks > 0) {
    
    tint(255, 170, 87)
    
    }
    
    if (waterTicks > 0) {
        
        tint(77, 163, 255);
        
        }
    
    if (earthTicks > 0) {
        
        tint(122, 69, 0);
        
        }
    
    translate(enemies.eX, enemies.eY);
    imageMode(CENTER);
    scale(6);
    rotate(enemies.eA);
    image(alxatross, 5, 0);
    pop();
      }
  
  //Tree
  if (enemies.id === 5) {
    push();
    
    if (fireTicks > 0) {
    
    tint(255, 170, 87)
    
    }
    
    if (waterTicks > 0) {
        
        tint(77, 163, 255);
        
        }
    
    if (earthTicks > 0) {
        
        tint(122, 69, 0);
        
        }
    
    translate(enemies.eX, enemies.eY);
    imageMode(CENTER);
    scale(6);
    rotate(enemies.eA);
    image(tree, 0, 0);
    pop();
      }
  
  
  
  
  
  //enemies.eX += enemies.eXV;
  //enemies.eXV -= 0.5;
  
}