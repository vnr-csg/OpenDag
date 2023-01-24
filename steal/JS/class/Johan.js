class Johan {

    constructor() {
      this.x = 100 ;
      this.y = 800 ;
    
    
      this.animatie = [];
      this.frameNummer =  3;
    
      this.aanHetSpringen = false;
      this.snelheid = 0;
      this.springSnelheid = 43;
      this.gravity = 2 ;
    
      this.breedte = 182;
      this.hoogte = 297;
    }
 
    beweeg() {
      
          if (keyIsDown(LEFT_ARROW)) {
            this.x -= 3 ;
            this.frameNummer = 2;
    
          }
    
          if (keyIsDown(RIGHT_ARROW)) {
            this.x += 3 ;
            this.frameNummer = 1;
          }
    
          if (keyIsDown(UP_ARROW)) {
              this.frameNummer = 3;
              this.spring() ;
          }
    
          if (keyIsDown(DOWN_ARROW)) {
              this.frameNummer = 4;
    
          }
    
    
          this.x = constrain(this.x,0,canvas.width);
          this.y = constrain(this.y,0,canvas.height);
    
    }
    
    spring() {
      if (!this.aanHetSpringen) {
        this.aanHetSpringen = true;
        this.snelheid = -this.springSnelheid;
      }
    }
    
    move() {
      this.beweeg();
      if (this.aanHetSpringen) {
        this.snelheid += this.gravity;
        this.y += this.snelheid; 
      }
      if (this.y >= canvas.height - 400) {
        this.y = canvas.height - 400;
        this.snelheid = 0;
        this.aanHetSpringen = false;
      }
    }
    
    toon() {
      push();
      noStroke();
      image(this.animatie[this.frameNummer],this.x,this.y)
      pop();
    }

  }