class Kloosterman {

    constructor() {
      this.animatie = [];
      this.frameNummer =  2;
      this.x = 1600 ;
      this.y = 600 ;
      this.boeken = [];
  
    }
    
  
    schiet() {
      if (spel.tijd == 0) {
        this.boeken.push(new Boek(this.x - this.v,this.y));  
        this.frameNummer = 2;   
        spel.tijd = 2;
    }
      else {
        this.frameNummer = 1;
      }
  
  
    }
    toon() {
      image(this.animatie[this.frameNummer],1600,550);
      }
    }
  