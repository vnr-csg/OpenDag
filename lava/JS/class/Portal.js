class Portal {
    constructor(x,y,l,d,portal) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.d = d;
        this.portal = portal;
    }

    teken() {
        push();
        image(this.portal,this.x, this.y, this.l, this.d,0,0,0,0);
        pop();
      }
}