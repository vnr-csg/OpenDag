class Stekels {
    constructor(x,y,l,d,s,stekels) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.d = d;
        this.stekels = stekels;
        this.snelheid = s;
    }

    beweeg() {
        this.y += this.snelheid;
        if (this.y > 775 || this.y < 500) {
            this.snelheid *= -1;
        }
      }

    teken() {
        push();
        image(this.stekels,this.x, this.y, this.l, this.d,0,0,0,0);
        pop();
      }
}