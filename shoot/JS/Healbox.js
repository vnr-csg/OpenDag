class Healbox {
    constructor() {
      this.diameter = 40;
      this.snelheid = 4;
      this.speelVakPercentage = 0.8;

      this.x = random(this.diameter/2 + 100 ,width*this.speelVakPercentage-(this.diameter/2)-20);
      this.y = 0;
                } 
  
    beweeg() {
      this.y += this.snelheid;
      this.x = constrain(this.x,(this.diameter/2),canvas.width*this.speelVakPercentage-(this.diameter/2));
             }
  
    tekenHealbox() {
      image(healBox,this.x-healBox.width,this.y-healBox.height,healBox.width*2,healBox.height*2);
                  }
  }