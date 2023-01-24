class Computer {
  constructor() {
    this.x = 1600;
    this.y = 750;
    this.v = 7.5;
    this.breedte = 120;
    this.hoogte = 120;
    
  }

  beweeg() {
    this.x -= this.v;
  }
  
  toon() {
    image(computertje,this.x,this.y) 

    }

  hitbox() {
    if (johan.x + johan.breedte >= this.x && johan.x <= this.x + this.breedte  && johan.y + johan.hoogte >= this.y  && johan.y <= this.y + this.hoogte) {  
        spel.afgelopen = true;
        gepaktEffect.play();
    }
  }

  }