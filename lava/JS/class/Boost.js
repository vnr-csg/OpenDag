class Boost {
    constructor(x,y,l,d,boost) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.d = d;
        this.boost = boost;
    }

    teken() {
        push();
        image(this.boost,this.x, this.y, this.l, this.d,0,0,0,0);
        pop();
      }
}