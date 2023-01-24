class Lava {
    constructor(x,y,lavatje) {
        this.x = x;
        this.y = y;
        this.snelheid = 1;
        this.lavatje = lavatje;
      }
    
      beweeg() {
          this.y -= this.snelheid;
          if (this.y > canvas.height - 100 ) {
              this.snelheid *= -0.6;
          }
      }
      
      teken() {
        push();
        image(this.lavatje,this.x, this.y, canvas.width, canvas.height,0,0,0,0);
        pop();
      }
}


