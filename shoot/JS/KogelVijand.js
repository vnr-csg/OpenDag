class KogelVijand {
  constructor(x,y,a,b) {
    this.x = x;
    this.y = y;

    this.speelVakPercentage = 0.8;
    this.diameterKogelVijand = 10;

    this.snelheidKogelVijandx = a;
    this.snelheidKogelVijandy = b;
                      }
  
  beweeg() {
    this.y += this.snelheidKogelVijandy;
    this.x += this.snelheidKogelVijandx;
  }
  
  tekenKogel() {
    if(spel.level == 1){
      image(
      kogel,
      this.x-(kogel.width/2),
      this.y-(kogel.height/2),
      kogel.width,
      kogel.height);
                       }

    if(spel.level == 2){
      image(
        fire,
        this.x-(fire.width/2),
        this.y-(fire.height/2),
        fire.width,
        fire.height);
                      }

    if(spel.level == 3){
      image(
      MagicOrb,
      this.x-(MagicOrb.width/2),
      this.y-(MagicOrb.height/2),
      MagicOrb.width,
      MagicOrb.height);
                      }
  }
}