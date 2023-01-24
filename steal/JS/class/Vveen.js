class Vveen {

    constructor() {
      this.animatie = [];
      this.frameNummer =  3;
      this.x = 1600 ;
      this.y = 600 ;
      this.computers = [];
  
    }
    
  
    schiet() {
      if (spel.tijd == 0) {
        this.computers.push(new Computer(this.x - this.v,this.y));    
        this.frameNummer = 2;   
        spel.tijd = 2;         
    }
      else {
        this.frameNummer = 1;
      }
  
  
    }
    toon() {
      push();
      image(this.animatie[this.frameNummer],1600,550);
      pop();
      }
    }