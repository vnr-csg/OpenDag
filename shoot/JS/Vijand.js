let lastAttackTime = 0;
let attackCooldown = 1000;
let attackCooldown2 = 10000;

class Vijand {
    constructor() {
        this.speelVakPercentage = 0.8;
        this.beginLevensVijand = 100;
        this.borderxleft = 90;
        this.borderxright = 30;
        this.diameter_vijand = 30;
        this.vijandhit = 0;

        this.x = (width*this.speelVakPercentage-this.borderxleft)/2+this.borderxleft;
        this.y = height/6;

        this.speedx = null;
        this.speedy = null;
        this.levens_vijand = null;
        this.vijandGeschoten = null;

        this.attacking = false;
        this.numberattack = false;
        this.speedset = false;

        this.kogelsVijand = [];
    }
    
    teken() {
        if(spel.level == 1){
          image(boss1,this.x-boss1.width+5,this.y-boss1.height,boss1.width*2,boss1.height*2);
                          }
        if(spel.level == 2){
          image(boss2,this.x-boss1.width+5,this.y-boss1.height,boss1.width*2,boss1.height*2);
                           }
          if(spel.level == 3){
            image(boss3,this.x-boss1.width+5,this.y-boss1.height,boss1.width*2,boss1.height*2);
                            }
    }

    beweeg() {
        if(this.speedset == false){
        this.speedx = sqrt(spel.level)*5;
        this.speedy = sqrt(spel.level)*5;

        this.speedset = true;
                                }
     
      this.x = constrain(this.x,(this.diameter_vijand/2),canvas.width*this.speelVakPercentage-(this.diameter_vijand/2));
      this.y = constrain(this.y,(this.diameter_vijand/2),canvas.width-(this.diameter_vijand/2));

      if(this.attacknumber == 100){
        this.x+=(((width*this.speelVakPercentage-this.borderxleft)/2+this.borderxleft)-this.x)*0.1;
        this.y+=((height/6)-this.y)*0.1;
                                  }

      if(this.attacknumber == 101){
        this.x =(width*this.speelVakPercentage-this.borderxleft)/2+this.borderxleft;
        this.y = height/6;
                                 }
  
      if(this.attacknumber == 0){
        spel.attackPattern.downWeGo(0,4,15);

        this.x = this.x + this.speedx;

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                            } 
                                }
  
      if(this.attacknumber == 1){
        spel.attackPattern.downWeGo(0,3,10);

        this.x = this.x + this.speedx;
        this.y = this.y + this.speedy;

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                            }
        if(this.y > (height/4) || this.y < 80){
          this.speedy = -this.speedy;
                                              }
      }      
  
  
      if(this.attacknumber == 2){
        spel.attackPattern.downWeGo(2,4,30);
        spel.attackPattern.downWeGo(-2,4,30);
        spel.attackPattern.downWeGo(-4,4,30);
        spel.attackPattern.downWeGo(4,4,30);
        spel.attackPattern.downWeGo(6,4,30);
        spel.attackPattern.downWeGo(-6,4,30);
        spel.attackPattern.downWeGo(0,4,30);
                                }
  
      if(this.attacknumber == 3){
        spel.attackPattern.downWeGo(0,2,15);

        this.x = this.x - this.speedx;

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                            }
                                }

      if(this.attacknumber == 4){
        spel.attackPattern.rainOfBooksX(5,1);
        spel.attackPattern.rainOfBooksX(5,-1);
        spel.attackPattern.rainOfBooksX(5,0);

        this.y = this.y - this.speedy*0.25;
        this.x = this.x - this.speedx;

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                            }
        if(this.y > (height/4) || this.y < (height/6)){
          this.speedy = -this.speedy;
                                                            }
                                }
          
      if(this.attacknumber == 5){
        spel.attackPattern.rainOfBooksY(0,5);
  
        this.x = this.x - this.speedx;

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                            }
                                }

      if(this.attacknumber == 6){
        spel.attackPattern.rainOfBooksXY(2,3);
        spel.attackPattern.rainOfBooksXY(-2,3);
        spel.attackPattern.rainOfBooksXY(0,3);

        this.x = this.x - this.speedx;

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                            }
                                }

      if(this.attacknumber == 7){
        spel.attackPattern.weGoHorizontal(4,0,30,6);
        spel.attackPattern.weGoVertical(0,4,30,6);
        spel.attackPattern.downWeGo(0,4,10);
         
        this.x = this.x - this.speedx;
        this.y = this.y - this.speedy*0.25;

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                            }
        if(this.y > (height/4) || this.y < (height/6)){
          this.speedy = -this.speedy;
                                                      }                                                
                                }

      if(this.attacknumber == 8){
        spel.attackPattern.downWeGo(0,7,15);
        spel.attackPattern.downWeGo(0,3,10);
        spel.attackPattern.downWeGo(0,5,5);
        spel.attackPattern.downWeGo(0,5,6);

        this.x = this.x - this.speedx;
        this.y = this.y - this.speedy;

        for (var b = 0; b < spel.vijand.kogelsVijand.length; b++){
          if(frameCount % 10 == 0)
          spel.vijand.kogelsVijand[b].snelheidKogelVijandy = -spel.vijand.kogelsVijand[b].snelheidKogelVijandy;
                                                                }

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                            }
        if(this.y > (height/4) || this.y < (height/6)){
          this.speedy = -this.speedy;
                                                     }
                                } 

      if(this.attacknumber == 9){
        spel.attackPattern.weGoHorizontal(4,1,60,8);
        spel.attackPattern.weGoHorizontal(4,-1,60,8);
        spel.attackPattern.weGoHorizontal(4,0,60,8);
        spel.attackPattern.weGoVertical(1,4,60,8);
        spel.attackPattern.weGoVertical(-1,4,60,8);
        spel.attackPattern.weGoVertical(0,4,60,8);

        this.x = this.x - this.speedx;

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                             }
                              }

      if(this.attacknumber == 10){
          spel.attackPattern.downWeGo(0,3,15);
          spel.attackPattern.downWeGo(2,3,15);
          spel.attackPattern.downWeGo(-2,3,15);
          spel.attackPattern.downWeGo(4,3,15);
          spel.attackPattern.downWeGo(-4,3,15);
          spel.attackPattern.downWeGo(6,3,15);
          spel.attackPattern.downWeGo(-6,3,15);

          this.x = this.x - this.speedx;

        if(this.x > (canvas.width*this.speelVakPercentage-(this.diameter_vijand/2)-this.borderxright) || this.x < (this.diameter_vijand/2)+this.borderxleft){
          this.speedx = -this.speedx;
                                                                                                                                                            }      
                                }
    }

    vijandWordtGeraakt(kogelSpeler) {
      if (dist(this.x,this.y,kogelSpeler.x,kogelSpeler.y) <= (kogelSpeler.diameter + this.diameter_vijand) / 2) {
        this.levens_vijand--;
        this.vijandhit ++;
        bossRaak.play();
        kogelSpeler.y = -10;
                                                                                                                }
    }

    attack(){
      if(this.attacking == false){
        if(millis() - lastAttackTime >= attackCooldown && this.numberattack == false){
          lastAttackTime = millis();
          this.numberattack = true;

        if(spel.level == 1){
          this.attacknumber = round(random(-0.5,3.4));
                          }
        if(spel.level == 2){
          this.attacknumber = round(random(3.5,6.4));
                          }
        if(spel.level == 3){
          this.attacknumber = round(random(6.5,10.4));
                          }      
                                                                                    }

        if(millis() - lastAttackTime >= attackCooldown2){
         this.attacking = true;
         lastAttackTime = millis();
                                                        }
                                }

      if(this.attacking == true){
          this.attacknumber = 100;

            if(spel.vijand.kogelsVijand.length < 1){
              this.attacking = false;
              this.numberattack = false;
                                                    }
                              }
    }
  }