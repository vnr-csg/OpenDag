class Boek {
    constructor() {
      this.x = 1600;
      this.y = random(650,800);
      this.v = 10;
      this.breedte = 120;
      this.hoogte = 105;
      
    }
  
    beweeg() {
      this.x -= this.v;
    }
  
  toon() {
    image(boekje,this.x,this.y);

    }
  
  hitbox() {
    if (johan.x + johan.breedte >= this.x && johan.x <= this.x + this.breedte  && johan.y + johan.hoogte >= this.y  && johan.y <= this.y + this.hoogte) {  
      spel.afgelopen = true;
      gepaktEffect.play();
    }
  }
}