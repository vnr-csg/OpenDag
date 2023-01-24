class Stealthetest {

    constructor() {
      this.status = null;
      this.actief = null;
      this.afgelopen = null;
      this.gehaald = null;

      this.tijd = 0;
      this.seconden = 0 ;
      this.startTijd = null; 

      this.v = vveen;
      this.k = kloosterman;
      this.s = schadenberg;
      this.j = johan;

    }
    
    nieuw () {
      this.status = 0;
      this.actief = false;
      this.afgelopen = false;
      this.gehaald = false;

      this.seconden = true;

      this.v.computers = [];
      this.k.boeken = [];
      this.s.tennisballen = [];

      this.j.x = 100;
      this.j.frameNummer = 3 ;
    }
           
    menuScherm() {
        push();
        background(toetsGestolen);
        fill(255);
        rect (30,10,1850,200);
        fill(255);
        rect (30,250,450,700);
        textSize(30);
        fill(0);
        text("INSTRUCTIES: \n- Gebruik de pijltjestoetsen om naar links en naar rechts te bewegen. \n- Ook kan je de pijltjestoetsen gebruiken om te springen en te bukken.\n- Gebruik deze pijltjes om objecten die naar je toe worden geslingerd te ontwijken.\n- Beweeg naar rechts langs de docent om het volgende level te bereiken.",50,280,425)
        textSize(30);
        fill(0);
        text("Welkom bij Steal The Test! \nIn dit spel probeer je de informatica toets te stelen om een 10 te halen op je volgende toets.\nMaar, onderweg proberen Meneer van der Veen, Mevrouw Kloosterman en Meneer Schadenberg hier een stokje voor te steken. \nKlik op ENTER om te beginnen.",60,40,1800);
        pop();
      }

  
    eindScherm() {
      push();
      background(gepaktScherm);
      textSize(50);
      fill(255);
      rect (30,10,1850,200);
      fill(0);
      text('Je bent gepakt! Klik op SPACEBAR om terug te gaan naar het MENU.',120,90,canvas.width,canvas.height);
      pop();
    }

    gehaaldScherm() {
      push();
      background(eindScherm);
      textSize(60);
      fill(255);
      rect (30,10,1850,200);
      fill(0);
      text('Je hebt de toets gestolen binnen '+ this.seconden +' seconden en bent ontsnapt!\nKlik op SPACEBAR om terug te gaan naar het hoofdmenu.',70,50,canvas.width,canvas.height);
      pop(); 
    }
   
    level1Scherm() {
      background(classroom);
      johan.beweeg();
      vveen.schiet();
      johan.move();
      for (var n = 0; n < this.v.computers.length; n++) {
        this.v.computers[n].beweeg();
        this.v.computers[n].toon();
        this.v.computers[n].hitbox();
      }
      johan.toon();
      vveen.toon();

    }

    level2Scherm() {
      background(gang);
      johan.beweeg();
      kloosterman.schiet();
      johan.move();
      for (var m = 0; m < this.k.boeken.length; m++) {
        this.k.boeken[m].beweeg();
        this.k.boeken[m].toon();
        this.k.boeken[m].hitbox();
      }
      johan.toon();
      kloosterman.toon();
    }

    level3Scherm() {
      background(achtergrond);
      johan.beweeg();
      schadenberg.schiet();
      johan.move();
      for (var k = 0; k < this.s.tennisballen.length; k++) {
        this.s.tennisballen[k].beweeg();
        this.s.tennisballen[k].hitbox();
        this.s.tennisballen[k].toon();
      }
      johan.toon();
      schadenberg.toon();
    }
    
  
    timer() {
      if (frameCount % 60 == 0 && this.tijd >= 0) {
        this.tijd --;
      }

      if (this.status != 0 && this.status <= 3) {
        this.seconden = 0 + round( (millis() - this.startTijd) /1000) ;
      }

      fill(255,255,255);
      textSize(44);
      text(`TIJD: ${this.seconden} seconden`, 30, 50);
    }


    update() {

      if (johan.x > 1900) {
        this.gehaald = true;
        johan.x = 100;
        this.status++;
        if (this.status > 3) {
          if (!winEffect.isPlaying()){
            winEffect.play();            
          }
        }
      }


      if (keyIsDown(13) && !this.actief) {
        this.actief = true;
        this.status = 1;
        this.startTijd = millis();
      }
 
}
  
    teken() {
      if (!this.actief) {
        this.menuScherm();
        this.status = 0;
        
      }
      else {
        if (this.afgelopen) {
          this.eindScherm(); 
          this.status = 0;
          if (muziek.isPlaying()) {
            muziek.stop();
          }

          if (keyCode == 32) {
            this.afgelopen = false;
            this.actief = false;
            this.nieuw();
          
          }
        } 
        else if (this.status > 3) {
          this.gehaaldScherm();
          muziek.stop();
          if (keyCode == 32) {
            this.status = 0 ;
            this.afgelopen = false;
            this.actief = false;
            this.nieuw();
          }
        }
        
        else if (this.status == 3) {
          this.level3Scherm();
          this.timer();

        }
        else if (this.status == 2) {
          this.level2Scherm();
          this.timer();
        } 

        else {
          this.level1Scherm();
          this.timer();
        
        }    
    }
  }
}

