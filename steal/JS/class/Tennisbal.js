class Tennisbal {
    constructor() {
      this.x = 1600;
      this.y = random(400,800);
  
      this.v = 0.2;
      this.vx = 10;
      this.vy = 10;
      this.straal = this.diameter / 2;
      this.diameter = 2200;
      this.demping = 0.95
      
      this.breedte = 109;
      this.hoogte = 109;
  
    }
    beweeg() {
      this.vy += this.v
      this.x -= this.vx;
      this.y += this.vy;
      
      if (this.x <= this.straal || this.x >= canvas.width - this.straal) {
        this.vx *= -this.demping;
      }
      
      if (this.y >= 900)  {
        this.vy *= -this.demping;
        this.vx *= this.demping;
  
      }
    }
  
  toon() {
    image(bal,this.x,this.y);

    }
  
  hitbox() {
    if (johan.x + johan.breedte >= this.x && johan.x <= this.x + this.breedte  && johan.y + johan.hoogte >= this.y  && johan.y <= this.y + this.hoogte) {  
      spel.afgelopen = true;
      gepaktEffect.play();
    }
  }

}