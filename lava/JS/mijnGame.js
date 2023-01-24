//Hallo meneer, dit is Lava jumper. Wij hebben het eerste Jumper spel in de methode gebruikt als basis en hiermee vier verschillende levels gemaakt.
//Voor de rest hebben we niks gekopieerd behalve de plaatjes en het geluid natuurlijk. Als u een Level niet snapt kunt u bij de images kijken bij "images/backgrounds/uitleg 1, 2, 3 en 4".
//De blauwe pijlen moet je volgen, de groene geven aan welke kanten een blok op kan bewegen en de oranje getekende platformen geven aan wanneer het platform in die positie is moet je moet springen.
//We hopen dat u het leuk vindt en een fijne vakantie gewenst.
  class Jumper {
          constructor(s) {
          this.speler = s;
          this.level = 0;
          this.maxLevel = 4;
          this.platforms = new Platform(null,null,null,null,null,platform);
          this.stekels = new Stekels(null,null,null,null,null,stekels);
          this.portal = new Portal(null,null,null,null,portal);
          this.boost = new Boost(null,null,null,null,boost);
          this.actief = null;
          this.levelGehaald = null;
          this.afgelopen = null;
          this.gewonnen = null;
          this.lava = new Lava(null,null,lavatje);
          this.levels = 1;
        }
        
        nieuwSpel() {
          if (this.afgelopen) {
              this.level--;
              this.afgelopen = false;
          }
          if (this.gewonnen) {
              this.level = -1;
              this.gewonnen = false;        
          }
          this.actief = false;
          this.nieuwLevel();
        }
        nieuwLevel() {
          if(this.levels==1){
            this.level++;
            this.lava.y = 1000;
            this.lava.snelheid=0.8;
            this.platforms = [];
            this.stekels = [];
            this.platforms.push(new Platform(40,800,300,0,0,platform));
            this.speler.x = this.platforms[0].x + this.platforms[0].l / 2 - this.speler.l / 2;
            this.speler.y = 600;
            this.platforms.push(new Platform(440,750,460,0,0,platform));
            this.stekels.push(new Stekels(620,750-40,100,50,0,stekels));
            this.platforms.push(new Platform(1000,700,100,0,0,platform));
            this.platforms.push(new Platform(1200,625,100,0,0,platform));
            this.platforms.push(new Platform(1000,550,100,0,0,platform));
            this.platforms.push(new Platform(440,500,460,0,0,platform));
            this.stekels.push(new Stekels(620,500-40,100,50,0,stekels));
            this.platforms.push(new Platform(240,450,100,0,0,platform));
            this.platforms.push(new Platform(40,375,100,0,0,platform));
            this.platforms.push(new Platform(240,300,100,0,0,platform));
            this.platforms.push(new Platform(440,250,460,0,0,platform));
            this.stekels.push(new Stekels(620,250-40,100,50,0,stekels));
            this.platforms.push(new Platform(1150,300,100,0,0,platform));
            this.platforms.push(new Platform(1400,275,100,0,0,platform));
            this.platforms.push(new Platform(1650,250,100,0,0,platform));
            this.platforms.push(new Platform(1850,225,100,0,0,platform));
            if (this.level>this.maxLevel) {
              this.afgelopen = true;
              this.gewonnen = true;
              this.actief = false;
              background(winachtergrond);
          }
          else {
              this.levelGehaald = false;
          }
          }
          if (this.levels==2){
            this.level++;
            this.lava.y = 1000;
            this.lava.snelheid = 0.3;
            this.platforms = [];
            this.stekels = [];
            this.portal = [];
            this.platforms.push(new Platform(40,800,300,0,0,platform));
            this.speler.x = this.platforms[0].x + this.platforms[0].l / 2 - this.speler.l / 2;
            this.speler.y = 600;
            this.platforms.push(new Platform(440,750,100,1,0,platform));
            this.stekels.push(new Stekels(590,750,100,50,2,stekels));
            this.platforms.push(new Platform(740,750,100,1.5,0,platform));
            this.stekels.push(new Stekels(890,750,100,50,2.5,stekels));
            this.platforms.push(new Platform(1040,750,100,1,0,platform));
            this.stekels.push(new Stekels(1190,750,100,50,2,stekels));
            this.platforms.push(new Platform(1340,750,100,1.5,0,platform));
            this.stekels.push(new Stekels(1490,750,100,50,2.5,stekels));
            this.platforms.push(new Platform(1640,750,100,1,0,platform));
            this.portal.push(new Portal(1740,550,100,120,portal));
            this.portal.push(new Portal(140,0,100,120,portal));
            this.platforms.push(new Platform(140,250,100,0,0,platform));
            this.platforms.push(new Platform(440,250,300,0,3,platform));
            this.stekels.push(new Stekels(500,250-40,100,50,0,stekels));
            this.stekels.push(new Stekels(850,250-40,100,50,0,stekels));
            this.stekels.push(new Stekels(1200,250-40,100,50,0,stekels));
            this.stekels.push(new Stekels(1550,250-40,100,50,0,stekels));
            if (this.level>this.maxLevel) {
              this.afgelopen = true;
              this.gewonnen = true;
              this.actief = false;
              background(winachtergrond);
          }
          else {
              this.levelGehaald = false;
          }
          }
          if (this.levels==3){
            this.level++;
            this.lava.y = 1000;
            this.lava.snelheid = 0.5;
            this.platforms = [];
            this.stekels = [];
            this.portal = [];
            this.boost = [];
            this.platforms.push(new Platform(40,800,300,0,0,platform));
            this.speler.x = this.platforms[0].x + this.platforms[0].l / 2 - this.speler.l / 2;
            this.speler.y = 600;
            this.platforms.push(new Platform(440,750,100,0,0,platform));
            this.boost.push(new Boost(440,650+10,100,100,boost));
            this.platforms.push(new Platform(540,500,100,0,0,platform));
            this.stekels.push(new Stekels(640,460,125,150,0,stekels));
            this.platforms.push(new Platform(765,600,100,0,0,platform));
            this.platforms.push(new Platform(965,650,100,0,0,platform));
            this.portal.push(new Portal(1065,540,100,120,portal));
            this.portal.push(new Portal(140,0,100,120,portal));
            this.platforms.push(new Platform(140,350,100,0,0,platform));
            this.platforms.push(new Platform(340,350,100,0,0,platform));
            this.boost.push(new Boost(340,250+10,100,100,boost));
            this.stekels.push(new Stekels(440,190,50,200,0,stekels));
            this.platforms.push(new Platform(1640,150,300,0,2,platform));
            this.stekels.push(new Stekels(1000,50+20,200,100,0,stekels));
            this.platforms.push(new Platform(900,300,250,0,0,platform));
            this.platforms.push(new Platform(1250,400,100,0,0,platform));
            this.boost.push(new Boost(1250,300+10,100,100,boost));
            this.stekels.push(new Stekels(1700,150-20,50,25,0,stekels));
            if (this.level>this.maxLevel) {
              this.afgelopen = true;
              this.gewonnen = true;
              this.actief = false;
              background(winachtergrond);
          }
          else {
              this.levelGehaald = false;
          }
          }
          if (this.levels==4){
            this.level++;
            this.lava.y = 1000;
            this.lava.snelheid = 0.3;
            this.platforms = [];
            this.stekels = [];
            this.portal = [];
            this.platforms.push(new Platform(40,800,300,0,0,platform));
            this.speler.x = this.platforms[0].x + this.platforms[0].l / 2 - this.speler.l / 2;
            this.speler.y = 600;
            this.platforms.push(new Platform(440,750,100,0,0,platform));
            this.portal.push(new Portal(540,640,100,120,portal));
            this.portal.push(new Portal(140,0,100,120,portal));
            this.platforms.push(new Platform(40,400,300,0,0,platform));
            this.portal.push(new Portal(365,321,100,120,portal));
            this.platforms.push(new Platform(490,325,150,0,0,platform));
            this.stekels.push(new Stekels(640,275,125,125,0,stekels));
            this.platforms.push(new Platform(765,375,150,0,0,platform));
            this.platforms.push(new Platform(915,700,150,0,0,platform));
            this.portal.push(new Portal(965,350,100,120,portal));
            this.stekels.push(new Stekels(1190,300,125,125,0,stekels));
            this.platforms.push(new Platform(1240,650,150,0,0,platform));
            this.platforms.push(new Platform(1490,650,300,0,0,platform));
            this.stekels.push(new Stekels(1490,650-40,100,50,0,stekels));
            this.stekels.push(new Stekels(1690,650-40,100,50,0,stekels));
            this.platforms.push(new Platform(1800,650,100,0,0,platform));

            if (this.level>this.maxLevel) {
                this.afgelopen = true;
                this.gewonnen = true;
                this.actief = false;
                background(winachtergrond);
            }
            else {
                this.levelGehaald = false;
            }
          }
          }
        
      
        update() {
          if (this.actief && !this.levelGehaald && this.levels == 1) {
              this.speler.beweeg(this.platforms);
              this.lava.beweeg(this.lava);
              if (this.speler.x > canvas.width - this.speler.l) {
                  this.levelGehaald = true;
                  this.lava.y = 1000;
                  gehaald.play();
                  this.levels++;
                  if (this.level == this.maxLevel) {
                      this.afgelopen = true;
                      this.gewonnen = true;
                      this.actief = false;
                  }
              }
              if (this.speler.y >= this.lava.y - this.speler.l) {
                  this.afgelopen = true;
                  this.gewonnen = false;
                  this.actief = false;
                  this.lava.y = 1000;
                  death.play();
              }
              if (this.speler.raaktstekels(this.stekels)) {
                this.afgelopen = true;
                this.gewonnen = false;
                this.actief = false;
                this.lava.y = 1000;
                death.play();
              }
              if (keyIsDown(82)) {
                this.afgelopen = true;
                this.gewonnen = false;
                this.actief = false;
                this.lava.y = 1000;
                death.play();
              }
          }
          if (this.actief && !this.levelGehaald && this.levels == 2) {
              this.speler.beweeg(this.platforms);
                this.lava.beweeg(this.lava);
                if (this.speler.x > canvas.width - this.speler.l) {
                    this.levelGehaald = true;
                    this.lava.y = 1000;
                    gehaald.play();
                    this.levels++;
                    if (this.level == this.maxLevel) {
                      this.afgelopen = true;
                      this.gewonnen = true;
                      this.actief = false;
                    }
              }
              if (this.speler.y >= this.lava.y - this.speler.l) {
                  this.afgelopen = true;
                  this.gewonnen = false;
                  this.actief = false;
                  this.lava.y = 1000;
                  death.play();
              }

              if(this.speler.y < 300) {
                this.lava.snelheid = 0.6;
              }

              if (this.speler.raaktstekels(this.stekels)) {
                this.afgelopen = true;
                this.gewonnen = false;
                this.actief = false;
                this.lava.y = 1000;
                death.play();
              }
              if (this.speler.raaktportal(this.portal)) {
                this.speler.x= 140;
                this.speler.y= 100;
              }
               for (var p = 0; p < this.platforms.length;p++) {
                 this.platforms[p].beweeg();
               }
               for (var s = 0; s < this.stekels.length;s++) {
                this.stekels[s].beweeg();
              }
              if (keyIsDown(82)) {
                this.afgelopen = true;
                this.gewonnen = false;
                this.actief = false;
                this.lava.y = 1000;
                death.play();
              }
          }
          if (this.actief && !this.levelGehaald && this.levels == 3) {
            this.speler.beweeg(this.platforms);
              this.lava.beweeg(this.lava);
              if (this.speler.x > canvas.width - this.speler.l) {
                  this.levelGehaald = true;
                  this.lava.y = 1000;
                  gehaald.play();
                  this.levels++;
                  if (this.level == this.maxLevel) {
                    this.afgelopen = true;
                    this.gewonnen = true;
                    this.actief = false;
                  }
            }
            if (this.speler.y >= this.lava.y - this.speler.l) {
                this.afgelopen = true;
                this.gewonnen = false;
                this.actief = false;
                this.lava.y = 1000;
                death.play();
            }

            if (this.speler.raaktstekels(this.stekels)) {
              this.afgelopen = true;
              this.gewonnen = false;
              this.actief = false;
              this.lava.y = 1000;
              death.play();
            }
            if (this.speler.raaktportal(this.portal)) {
              this.speler.x= 140;
              this.speler.y= 100;
            }
            if (this.speler.raaktboost(this.boost)) {
              this.speler.springSnelheid = 18;
            }
            if (!this.speler.raaktboost(this.boost)) {
              this.speler.springSnelheid = 12;
            }
             for (var p = 0; p < this.platforms.length;p++) {
               this.platforms[p].beweeg();
             }
             for (var s = 0; s < this.stekels.length;s++) {
              this.stekels[s].beweeg();
            }
            if (keyIsDown(82)) {
              this.afgelopen = true;
              this.gewonnen = false;
              this.actief = false;
              this.lava.y = 1000;
              death.play();
            }
        }
            if (this.actief && !this.levelGehaald && this.levels == 4) {
              this.speler.beweeg(this.platforms);
            this.lava.beweeg(this.lava);
            if (this.speler.x > canvas.width - this.speler.l) {
                this.levelGehaald = true;
                this.lava.y = 1000;
                gehaald.play();
                this.levels++;
                if (this.level == this.maxLevel) {
                    this.afgelopen = true;
                    this.gewonnen = true;
                    this.actief = false;
                }
            }
            if (this.speler.y >= this.lava.y - this.speler.l) {
                this.afgelopen = true;
                this.gewonnen = false;
                this.actief = false;
                this.lava.y = 1000;
                death.play();
            }
            if (this.speler.raaktstekels(this.stekels)) {
              this.afgelopen = true;
              this.gewonnen = false;
              this.actief = false;
              this.lava.y = 1000;
              death.play();
            }
            if (this.speler.raaktportal(this.portal)) {
              this.speler.x= 140;
              this.speler.y= 100;
            }
            if (keyIsDown(82)) {
              this.afgelopen = true;
              this.gewonnen = false;
              this.actief = false;
              this.lava.y = 1000;
              death.play();
            }
        }
        }
      
        tekenScorebord() {
          push();
          noFill();
          noStroke();
          textSize(16);
          var marge = 10;
          var hoogte = 50;
          rect(marge,canvas.height - marge - hoogte,100,hoogte);
          fill(255);
          text("Level "+this.level,marge,canvas.height - marge - hoogte,100,hoogte);   
          pop();
        }
        
        beginScherm() {
          push();
          background(bergen);
          noFill();
          fill(180,35,35);
          textSize(140);
          text(" Lava Jumper",0,0,canvas.width,canvas.height * 2 / 3);
          textSize(32);
          fill(0);
          text("OH NEE! De wereld van Rocky de dino staat op het punt om overspoeld te worden met lava! \n Red Rocky van de lava en breng hem veilig thuis naar zijn kinderen \n\n Spring met pijltje omhoog, beweeg met de pijltoetsen en druk op R om je level opnieuw te beginnen \n Je haalt een level als je de rechterkant bereikt en de lava ontkomt.\n\nDruk op een toets om te beginnen.",0,canvas.height * 1 / 2,canvas.width,canvas.height * 1 / 3);
          pop();
        }
      
        levelScherm() {
          push();
          fill(50,80,80);
          stroke(150,200,255);
          strokeWeight(3);
          textSize(32);
          text('Gefeliciteerd de dino is veilig bij zijn kinderen!\nJe hebt level '+this.level+' gehaald!\n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
          pop();
        }   
      
        eindScherm() {
          var tekst = 'EINDE\n\n';
          if (this.gewonnen) {
            tekst += 'Je hebt het gehaald. Gefeliciteerd!';
          }
          else {
              tekst += 'Je bent tot level '+this.level+' gekomen. JAMMER :(';
          }
          push();
          fill(100);
          stroke(150,200,255);
          strokeWeight(3);
          textSize(40);
          text(tekst + '\nDruk op een toets voor nieuw spel.',0,0,canvas.width,canvas.height);
          pop();
        }    
        
        teken() {
          background(achtergrond);
          if (!this.actief) {
              if (this.afgelopen) {
                  this.eindScherm();
              }
              else {
                  this.beginScherm();
              }
          }
          else {
              if (this.levelGehaald) {
                  background(winachtergrond);
                  this.levelScherm();
              }
              else {
                if(this.levels == 1) {
                  this.speler.teken();
                  for (var p = 0; p < this.platforms.length;p++) {
                      this.platforms[p].teken();
                  }
                  for (var s = 0; s < this.stekels.length;s++) {
                    this.stekels[s].teken();
                  }
                  this.lava.teken();  
                  this.tekenScorebord();
                }
                if(this.levels == 2) {
                  this.speler.teken();
                  for (var p = 0; p < this.platforms.length;p++) {
                      this.platforms[p].teken();
                  }
                  for (var s = 0; s < this.stekels.length;s++) {
                    this.stekels[s].teken();
                  }
                   for (var p = 0; p < this.portal.length;p++) {
                    this.portal[p].teken();
                  }
                  this.lava.teken();  
                  this.tekenScorebord();
                }
                if(this.levels == 3) {
                  this.speler.teken();
                  for (var p = 0; p < this.platforms.length;p++) {
                      this.platforms[p].teken();
                  }
                  for (var s = 0; s < this.stekels.length;s++) {
                    this.stekels[s].teken();
                  }
                   for (var p = 0; p < this.portal.length;p++) {
                    this.portal[p].teken();
                  }
                  for (var b = 0; b < this.boost.length;b++) {
                    this.boost[b].teken();
                  }
                  this.lava.teken();  
                  this.tekenScorebord();
                }
                  if(this.levels == 4) {
                    this.speler.teken();
                    for (var p = 0; p < this.platforms.length;p++) {
                        this.platforms[p].teken();
                    }
                    for (var s = 0; s < this.stekels.length;s++) {
                      this.stekels[s].teken();
                    }
                    for (var p = 0; p < this.portal.length;p++) {
                      this.portal[p].teken();
                    }
                    this.lava.teken();  
                    this.tekenScorebord();
                }
              }
          }
        }
      }
      

      function preload() {
        achtergrond = loadImage("images/backgrounds/el2.webp");
        winachtergrond = loadImage("images/backgrounds/bekground2.png");
        renrechts = loadImage("images/backgrounds/spritesheet.png");
        achtergrondmuziek = loadSound("sounds/lavaajumper.mp3");
        platform = loadImage("images/backgrounds/platform.png");
        lavatje = loadImage("images/backgrounds/lavaa.gif");
        gehaald = loadSound("sounds/victory.mp3");
        jump2 = loadSound("sounds/jump.mp3");
        stekels = loadImage("images/backgrounds/stekels.png");
        death = loadSound("sounds/deathsound.mp3"); 
        portal = loadImage("images/backgrounds/nether-portal-minecraft.gif")
        boost = loadImage("images/backgrounds/Boost.png");
        bergen = loadImage("images/backgrounds/bergen.jpg");
      }
       
      function setup() {
        canvas = createCanvas(1980,1100);  
        canvas.parent('processing');
        textAlign(CENTER,CENTER);  
        frameRate(55);
        dino = new Speler(40,renrechts);
        spel = new Jumper(dino);
        spel.teken();
        achtergrondmuziek.loop();
      }
      
      function draw() {
        spel.update();
        spel.teken();
        }
      
      
      function keyTyped() {
        if (!spel.actief && !spel.levelGehaald) {
          spel.nieuwSpel();
          spel.actief = true;
        }
        if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
            spel.nieuwLevel();
        }
        if ((spel.afgelopen)) {
          spel.nieuwSpel();
        }  
      }