class Kogel {
    constructor(x,y) {
      this.x = x;
      this.y = y;

      this.speelVakPercentage = 0.8;

      this.diameter = 10;
      this.snelheid = 10;
    }
  
    beweeg() {
      this.y -= this.snelheid;
      this.x = constrain(this.x,(this.diameter/2),canvas.width*this.speelVakPercentage-(this.diameter/2));
            }
  
    tekenKogel() {
      image(
        bullet,
        this.x-(bullet.height/2),
        this.y-(bullet.height/2),
        bullet.width,
        bullet.height);
                }         
  }