class Platform {
    constructor(x,y,l,s,z,platform) {
      this.x = x;
      this.y = y;
      this.l = l;
      this.d = 50;
      this.platform = platform;
      this.snelheid = s;
      this.snelheid2 = z;
    }
    
    beweeg() {
      this.y += this.snelheid;
      this.x += this.snelheid2;
      if (this.y > 775 || this.y < 600){
          this.snelheid *= -1;
      }

      if (this.x >1640 || this.x < 250){
        this.snelheid2 *= -1;
      }
    }

    teken() {
      push();
      image(this.platform,this.x, this.y, this.l, this.d,0,0,0,0);
      pop();
    }
  }