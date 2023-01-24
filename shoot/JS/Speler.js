class Speler {
    constructor() {
      this.speelVakPercentage = 0.8;
      this.beginLevensSpeler = 3;
      this.maxLevens = 10;
      this.snelheid = 10;
      this.diameter = 35;

      this.x = (width*0.8-90)/2+90;
      this.y = height/4*3;
      this.slow = this.snelheid/2;

      this.levensSpeler = null;
      this.geschoten = null;

      this.kogels = [];
    }
  
    goBack(){
      this.x = (width*0.8-90)/2+90;
      this.y = height/4*3;
    }
    
    speel() {
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.snelheid;
                                  }
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.snelheid;
                                }
      if (keyIsDown(UP_ARROW)) {
        this.y -= this.snelheid;
                                }
      if (keyIsDown(DOWN_ARROW)) {
        this.y += this.snelheid;
                                }
      if(keyIsDown(SHIFT)){
        this.snelheid = this.slow;
                          }
      else{
        this.snelheid = this.slow*2;
          } 

      this.x = constrain(this.x,(this.diameter/2) + 85,canvas.width*this.speelVakPercentage-(this.diameter/2));
      this.y = constrain(this.y,(this.diameter/2) + 30,canvas.height-(this.diameter/2)-30);

      if (keyIsDown(32) && frameCount % 5 == 0) {
        pew.play();
        this.kogels.push(new Kogel(this.x,this.y));
        this.geschoten++;
                                                }
    }

    spelerWordtGeraakt(kogelVijand) {
      if (dist(this.x,this.y,kogelVijand.x,kogelVijand.y) <= (kogelVijand.diameterKogelVijand + this.diameter) / 2) {
        kogelVijand.y = 20000;
        this.levensSpeler--;
        spelerRaak.play();
        return true;
                                                                                                                    }
    }

    spelerWordtGeraaktBaas(vijand) {
      if (dist(this.x,this.y,vijand.x,vijand.y) <= (vijand.diameter_vijand + this.diameter) / 2) {
        if(frameCount % 30 == 0){
        this.levensSpeler--;
        spelerRaak.play();
        return true;
                                }
                                                                                                }
    }

    teken() {
      image(ufo,this.x-ufo.width*0.5,this.y-ufo.height*0.5+6,ufo.width,ufo.height);
    }
  }