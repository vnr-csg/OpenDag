class Speler {
    constructor(x,renrechts) {
      this.l = 100;
      this.x = x;
      this.y = null;
      this.height = 105;
      this.width = 120;
      this.width2 = 70;
      this.marge = 30;
      this.snelheid = 0;
      this.aanHetSpringen = false;
      this.stap = 5;
      this.g = 0.5;
      this.springSnelheid = 12;
      this.sprite = renrechts;
      this.Spritekolommen= 21; 
      this.kolom = 0;
      this.rij = 0; 
      this.correctie = 0;
    }
    
    verwerkInvoer() {
      if (keyIsDown(LEFT_ARROW))
      {
        this.x -= this.stap;
        this.rij=1;
        this.kolom++;
        this.correctie = 200;
      }
      if (keyIsDown(RIGHT_ARROW))
      {
        this.x += this.stap;
        this.rij=0;
        this.kolom++;
        this.correctie = 0;
      }    
    
      if (keyIsDown(UP_ARROW)) {
        this.spring();
      }
    }
    
    spring() {
      if (!this.aanHetSpringen) {
        this.aanHetSpringen = true;
        this.snelheid = -this.springSnelheid;
        jump2.play(); 
      }
    }
    
    raakt(pf) {
      var raak = false;
      for (var p = 0; p < pf.length; p++) {
        if (  (this.x + this.width2) > pf[p].x && 
              (this.x) < (pf[p].x + pf[p].l) && 
              (this.y + this.l) >= pf[p].y && 
              (this.y + this.l) < (pf[p].y + pf[p].d / 2) ) {
          this.y = pf[p].y - this.l;
          raak = true;
        }
      }
      return raak;
    }

    raaktstekels(st) {
      var geraak= false;
      for (var s = 0; s < st.length; s++) {
        if ( (this.x + this.width2) > st[s].x && 
        (this.x+20) < (st[s].x + st[s].l) &&
          (this.y + this.l) > st[s].y && 
          (this.y + this.l) < (st[s].y + st[s].d)) {
        geraak = true;
      }
    }
    return geraak;
  }

  raaktportal(po) {
    var geraaktportal= false;
    for (var p = 0; p < po.length; p++) {
      if ( (this.x + this.width2) > po[p].x && 
      (this.x+20) < (po[p].x + po[p].l) &&
        (this.y + this.l) > po[p].y && 
        (this.y + this.l) < (po[p].y + po[p].d)) {
      geraaktportal = true;
    }
  }
  return geraaktportal;
}

raaktboost(bo) {
  var geraaktboost= false;
  for (var b = 0; b < bo.length; b++) {
    if ( (this.x + this.width2) > bo[b].x && 
    (this.x+20) < (bo[b].x + bo[b].l) &&
      (this.y + this.l) > bo[b].y && 
      (this.y + this.l) < (bo[b].y + bo[b].d)) {
    geraaktboost = true;
  }
}
return geraaktboost;
}

    beweeg(pf) {
      this.verwerkInvoer();
      if (this.aanHetSpringen) {
        this.snelheid += this.g;
        this.y += this.snelheid;      
        if (this.raakt(pf) && this.snelheid > 0) {
          this.snelheid = 0;
          this.aanHetSpringen = false;
        }      
        if (this.y >= canvas.height - this.l) {
          this.y = canvas.height - this.l;
          this.snelheid = 0;
          this.aanHetSpringen = false;
        }
      } else {
          if (!this.raakt(pf) && this.y != canvas.height - this.l) {
            this.aanHetSpringen = true;
          }
      }    
      this.x = constrain(this.x,0,canvas.width);
      this.y = constrain(this.y,0,canvas.height);
      if (this.y >= canvas.height - 2* this.l) {
          this.kleur = 'darkred';
      }
    }
  
    teken() {
      push();
      image(this.sprite,this.x, this.y, this.width, this.height, (this.kolom % this.Spritekolommen)*682+this.correctie,this.rij*460,682,460); //wat na de * komt is berekent door sprite width te delen met aantal sprites
      pop();
    }
  }
  