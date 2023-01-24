class Schadenberg {

    constructor() {
      this.animatie = [];
      this.frameNummer =  2;
      this.x = 1600 ;
      this.y = 600 ;
      this.tennisballen = [];
  
    }
    
  
    schiet() {
      if (spel.tijd == 0) {
        this.tennisballen.push(new Tennisbal(this.x - this.v,this.y));  
        this.frameNummer = 1;   
        spel.tijd = 2;
    }
      else {
        this.frameNummer = 2;
      }
  
  
    }
    toon() {
      image(this.animatie[this.frameNummer],1600,550);
      }

    
    }
  