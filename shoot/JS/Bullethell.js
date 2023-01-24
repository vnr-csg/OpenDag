class Bullethell {
    constructor() {
      this.dashboardKleur = 'blue';
      this.tekstKleur = 'white';

      this.speler1 = new Speler();
      this.vijand = new Vijand();
      this.attackPattern = new AttackPattern();
      this.speelVakPercentage = 0.8;

      this.tekstBreedte = null;
      this.healboxArray = null;
      this.afgelopen = null;
      this.aantalHB = null;
      this.levelGehaald = null;
      this.percentageLevensSpeler = null;
      this.percentageLevensVijand = null;

      this.level = 0;
      this.maxLevel = 3;
      this.speler1.geschoten = 0;
      this.framesHealbox = 180;
      this.hoogteBalkje = 35;
      this.vijand.vijandGeschoten = 0;
      this.levelschermY = 0;

      this.actief = false;
      this.gewonnen = false; 
      this.verloren = false;
      this.spelerdood = false;
      this.audio = false;

      this.tekstX = (canvas.width*this.speelVakPercentage)+5;
      this.accurate = (this.vijand.vijandhit/this.speler1.geschoten)*100;

      this.playscreen = level1Scherm;
    }

    muziek(){
      if(this.level  == 1){
        if(this.audio == false){
        level1.loop();
        level3.pause();
        this.audio = true;
                              }
                          }
      if(this.level  == 2){
        if(this.audio == false){
          level2.loop();
          level1.pause();
          this.audio = true;
                               }
                         }
      if (this.level  == 3){
        if(this.audio == false){
          level3.loop();
          level2.pause();
          this.audio = true;
                              }
                          }
    } 

    nieuwSpel() {
      this.levelschermY = 0;
      this.aantalHB = 0;

      this.healboxArray = [];
      this.speler1.kogels = [];

      this.afgelopen = false;

      if (!this.verloren) {
        this.nieuwLevel();
      }    
      else if (this.level == this.maxLevel) {
        this.speler1.levensSpeler = this.speler1.maxLevens;
      }
      else {
        this.speler1.levensSpeler = this.speler1.beginLevensSpeler;
      }

      this.vijand.attacking = true;
      this.vijand.attacknumber = 101;
      lastAttackTime = millis();
      this.vijand.levens_vijand = this.vijand.beginLevensVijand;

      this.speler1.goBack();
      this.verloren = false;
    }

    nieuwLevel() {
      this.level++;

      this.audio = false;
      this.vijand.speedset = false;

      if (this.levelGehaald) {
        this.vijand.beginLevensVijand+=100;
                            }
      if (this.level == this.maxLevel){
        this.speler1.levensSpeler = this.speler1.maxLevens;
                                      } 
      else {
        this.speler1.levensSpeler = this.speler1.beginLevensSpeler;        
          }
      if (this.level > this.maxLevel) {
        this.gewonnen = true;
                                      }

      this.levelGehaald = false;
      this.vijand.kogelsVijand = [];
    }

    beginScherm() {
      image(start,0,0,canvas.width,canvas.height);
    }
    
    eindScherm() {
      image(nextLevel,0,0,canvas.width,canvas.height);
    }

    gewonnenScherm() {
      image(win,0,0,canvas.width,canvas.height);
    }

    speelScherm(){
      image(scherm,0,0,canvas.width,canvas.height);
    }

    helaasScherm() {
      image(gameover,0,0,canvas.width,canvas.height);

      for (var hb = 0; hb< this.healboxArray.length; hb++){
        this.healboxArray.shift();
                                                          }
      for (var k = 0; k< this.speler1.kogels.length; k++){
        this.speler1.kogels.shift();
                                                         }
      for (var g = 0; g< this.vijand.kogelsVijand.length; g++){
        this.vijand.kogelsVijand.shift();
                                                             }
    }

    levelscherm(){ 
      if(this.level == 1){
        this.playscreen = level1Scherm;
                        }
      if(this.level == 2){
        this.playscreen = level2Scherm;
                        }
      if(this.level == 3){
        this.playscreen = level3Scherm;
                         }
      if(this.level == 1 || this.level == 2){
        this.levelschermY ++;
        if(this.levelschermY == canvas.height){
          this.levelschermY = 0;
                                              }
                                            } 
      image(this.playscreen,0,this.levelschermY,canvas.width,canvas.height);
      image(this.playscreen,0,this.levelschermY-canvas.height,canvas.width,canvas.height);
  }

  dashboard(){
    push();
    
    textFont("Monospace");
    textSize(20);

    fill(this.tekstKleur);
    text('Level: ' + this.level,this.tekstX,70);

    if (this.accurate > 0) {
      text('Accuracy: ' + round(this.accurate) + '%',this.tekstX,130);
                          }
    else {
      text('Accuracy: 0%',this.tekstX,130);
    }
    if (accuracy == 0) {
      text('Max Accuracy: 0%',this.tekstX,150);
                      }
    else {
      text('Max Accuracy: ' + round(accuracy) + '%',this.tekstX,150);
        }

    fill('green');
    text('Player Health: ',this.tekstX,180);
    this.percentageLevensSpeler = this.speler1.levensSpeler/this.speler1.maxLevens;

    fill('grey');
    rect(this.tekstX,200,
      canvas.width-(canvas.width*this.speelVakPercentage)-20,
      this.hoogteBalkje)

    fill('green');
    rect(this.tekstX,200,
      (canvas.width-(canvas.width*this.speelVakPercentage)-20)*this.percentageLevensSpeler,
      this.hoogteBalkje);

    fill('red');
    text('Boss Health: ',this.tekstX,270);
    this.percentageLevensVijand = this.vijand.levens_vijand/this.vijand.beginLevensVijand;

    fill('grey');
    rect(this.tekstX,290,
      canvas.width-(canvas.width*this.speelVakPercentage)-20,
      this.hoogteBalkje)

    fill('red');
    rect(this.tekstX,290,
      (canvas.width-(canvas.width*this.speelVakPercentage)-20)*this.percentageLevensVijand,
      this.hoogteBalkje);
    pop();
}

    teken() {
      if (!this.actief) {
        this.beginScherm();
      }
      else {
        if (this.gewonnen) {
          this.gewonnenScherm();
        }
        else {
          if (this.afgelopen) {
            if (this.levelGehaald) {
              this.eindScherm();
            }
            if (this.verloren) {
              this.helaasScherm();
            }
          }
          else {
            this.levelscherm();
            this.vijand.teken();
            this.speler1.teken();
            this.speelScherm();
            this.dashboard();
          }
        }
      }
    }

  update() {

    this.accurate = (this.vijand.vijandhit/this.speler1.geschoten)*100;

    if (!this.afgelopen && this.actief) {
      for (var n = 0; n< this.speler1.kogels.length; n++) {
        this.speler1.kogels[n].beweeg();
        this.speler1.kogels[n].tekenKogel();
        this.vijand.vijandWordtGeraakt(this.speler1.kogels[n]);

        if (this.speler1.kogels[n].y < 0) {
          this.speler1.kogels.splice(n,1);
                                          }
                                                        }

      for (var n = 0; n < this.vijand.kogelsVijand.length; n++) {
        this.vijand.kogelsVijand[n].beweeg();
        this.vijand.kogelsVijand[n].tekenKogel();
        this.speler1.spelerWordtGeraakt(this.vijand.kogelsVijand[n]);   

        if (this.vijand.kogelsVijand[n].y > canvas.height || this.vijand.kogelsVijand[n].x > (canvas.width*this.vijand.speelVakPercentage) || this.vijand.kogelsVijand[n].x < -10 || this.vijand.kogelsVijand[n].y < -10) {
          this.vijand.kogelsVijand.splice(n,1);
                                                                                                                                                                                                                           }
                                                                }

      for (var hb = 0; hb< this.healboxArray.length; hb++) {
        this.healboxArray[hb].tekenHealbox();
        this.healboxArray[hb].beweeg();
        if (dist(this.healboxArray[hb].x,this.healboxArray[hb].y,this.speler1.x,this.speler1.y) <= (this.speler1.diameter + this.healboxArray[hb].diameter) / 2) {
          this.healboxArray[hb].y = 20000;
          if (this.speler1.levensSpeler < this.speler1.maxLevens) {
            healBoxraak.play();
            this.speler1.levensSpeler++;
                                                                   }
                                                                                                                                                                 }
        if (this.healboxArray[hb].y>2000) {
          this.healboxArray.splice(hb,1);
                                          }        
                                                          }
      this.speler1.spelerWordtGeraaktBaas(this.vijand);

      this.vijand.beweeg();
      this.vijand.attack();

      this.speler1.speel();

      if (frameCount % this.framesHealbox == 0 && this.level != this.maxLevel) {
        this.healboxArray.push(new Healbox());
        this.aantalHB++;
                                                                              }
    }

    if (this.vijand.levens_vijand <= 0) {
      this.afgelopen = true;
      this.levelGehaald = true;
        if (this.level == this.maxLevel) {
          this.gewonnen = true;
                                        }
                                        }

    if (this.speler1.levensSpeler <= 0) {
      this.verloren = true;
      this.levelGehaald = false;
      this.afgelopen = true;
      this.spelerdood = true;
                                        }

    if(this.actief && !this.gewonnen && !this.afgelopen && !this.levelGehaald){
      this.speelScherm();
      this.dashboard();
                                                                              }
  }
}