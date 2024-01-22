class Timer {
  constructor(x,y,b,h,ag,tk,ak,tkl,verticaal,tekst) {
    this.beginTijd = null;
    this.ingesteldeTijd = null;
    this.t = null;
    this.resterendeTijd = null;
    this.verlopenTijd = null;
    // this.x = 0;
    // this.y = -12;
    this.x = x;
    this.y = y;
    this.b = b;
    this.h = h;
    this.achtergrond = ag;
    this.timerKleur = tk;
    this.alarmKleur = ak;
    this.tekstKleur = tkl;
    this.loopt = null;
    this.alarm = null;
    this.verticaal = verticaal;
    this.toonTekst = tekst;
    this.pauze = false;
  }

  stelIn(t) {
    this.t = t;
    this.ingesteldeTijd = this.t*1000;
    this.resterendeTijd = this.ingesteldeTijd;
    this.verlopenTijd = 0;
    this.beginTijd = millis();
    this.loopt = false;
    this.alarm = false;      
  }

  start() {
    this.loopt = true;
    if (this.alarm) {
          this.stelIn(this.t);
      }
      else {
          
          this.beginTijd = millis() - this.verlopenTijd;
      }
  }

  stop() {
      this.loopt = false;
  }

  reageer() {
      if (this.loopt) {
          this.stop();
      }
      else {
          this.start();
      }
      if (this.loopt == false && spel.actief && !spel.levelGehaald) {
        this.pauze = true;
      }
      if (this.loopt == true && spel.actief && !spel.levelGehaald) {
        this.pauze = false;
      }
      
    }
  verwerktTijd() {
      if (this.loopt) {
          this.resterendeTijd = this.ingesteldeTijd - (millis() - this.beginTijd);
          this.verlopenTijd = this.ingesteldeTijd - this.resterendeTijd;
          if (this.resterendeTijd <= 0) {
              this.resterendeTijd = 0;
              this.alarm = true;
              this.loopt = false;
          }
      }
  }

  pauzeScherm() {
        // fill('black');
        // text("pauze",300,300,100,100);
        image(pauzeknop,400,200,700,550);

  }

botten() {
  if (spel.level == 1) {
    if(hond.x >= 370 && hond.x <= 380 && hond.y >= 760 && hond.y <= 770) {
      spel.bot = false;
    }
  }
}

  teken() {
      this.verwerktTijd();
      push();
      var th = this.resterendeTijd / this.ingesteldeTijd*this.h;
      var tb = this.resterendeTijd / this.ingesteldeTijd*this.b;
      if (this.alarm && round(millis()/100) % 10 <= 4) {
          fill(this.alarmKleur);
      }
      else {
          fill(this.achtergrond);
      }
      //rect(this.x-1000,this.y-22,this.b+1050,this.h);
      //rect(this.x-1000,this.y,this.b+1050,this.h);
      rect(this.x,this.y,this.b+1050,this.h);
      fill(this.timerKleur);
      if (this.verticaal) {
          rect(this.x,this.y+(this.h-th),this.b,th);
      }
      else {
          //rect(this.x+(this.b-tb)-1000,this.y-22,tb+1050,this.h);
          //rect(this.x+(this.b-tb)-1000,this.y,tb+1050,this.h);
          rect(this.x+(this.b-tb),this.y,tb+1050,this.h);
      }
      if (this.toonTekst && this.loopt) {
          textAlign(CENTER,CENTER);
          fill(this.tekstKleur);
          text(round(this.resterendeTijd/100)/10,this.x-10,this.y+9,this.b,this.h);
      }
      pop();
  }
}
class Levels {
  constructor() {
  this.level = null;
  this.maxLevel = 5;
  this.actief = null;
  this.levelGehaald = null;
  this.afgelopen = null;
  this.gewonnen = null;
  this.alfa = 0.5;
  this.aantalRijen = 9;
  this.aantalKolommen = 12;
  this.celGrootte = null;
  this.tijd = 1000;
  this.helaas = false;
  this.bot = true;
  this.bot1 = true;
  this.bot2 = true;
  this.ingedrukt = false;
  }
  berekenCelGrootte() {
    this.celGrootte = canvas.width/this.aantalKolommen;
}
 
nieuwSpel() {
  this.level = 0;
  this.actief = false;
  this.gewonnen = false;
  this.afgelopen = false;
  this.nieuwLevel();
  
}
 
nieuwLevel() {
  this.level++;
  this.levelGehaald = false;
hond.x = 2;
hond.y = 54;
this.bot = true;
this.bot1 = true;
this.bot2 = true;
this.ingedrukt = false;
hond.aantalbotten = 0;
}
 
update() {
  this.alfa += random(-3,3) / 100;
  if (this.alfa <= 0 || this.alfa >=1) {
      this.alfa = 0.5;
  }
}
 
resetLevel() {
  this.actief = true;
  this.gewonnen = false;
  this.afgelopen = false;
  this.levelGehaald = false;
  this.bot = true;
  this.bot1 = true;
  this.bot2 = true;
  this.ingedrukt = false;
  hond.aantalbotten = 0;
  this.levelScherm2();
}

tekenScorebord() {
  push();
  fill(0,0,0,.8);
  noStroke();
  textSize(30);
  var marge = 100;
  rect(marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);
  fill(255);
  fill('lime');
  //text(" Dit is Level "+this.level+"\nHet spel is actief.\n\nKlik om het level te \"halen\".",marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);  
  pop();
}
tekenScorebord1() {
  push();
  fill(0,0,0,.8);
  noStroke();
  textSize(30);
  var marge = 100;
  rect(marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);
  fill(255);
  fill(51,70,175);
  // text("level: 1",100,20,150,50);
  //text("tijd: "+this.tijd+"",1240,-28,250,100);
  //tijd--;
  pop();

}
tekenScorebord2() {
  push();
  fill(0,0,0,.8);
  noStroke();
  textSize(30);
  var marge = 100;
  rect(marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);
  fill(255);
  fill(51,70,175);
  
  //text("level: 2",30,0,150,50);
  
  //text(" Dit is Level "+this.level+"\nHet spel is actief.\n\nKlik om het level te \"halen\".",marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);  
  pop();
}
tekenScorebord3() {
  push();
  fill(0,0,0,.8);
  noStroke();
  textSize(30);
  var marge = 100;
  rect(marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);
  fill(255);
  fill(51,70,175);
  text("level: 3",30,0,150,50);
  //text(" Dit is Level "+this.level+"\nHet spel is actief.\n\nKlik om het level te \"halen\".",marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);  
  pop();
}
tekenScorebord4() {
  push();
  fill(0,0,0,.8);
  noStroke();
  textSize(30);
  var marge = 100;
  rect(marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);
  fill(255);
  fill(51,70,175);
  text("level: 4",30,0,150,50);
  //text(" Dit is Level "+this.level+"\nHet spel is actief.\n\nKlik om het level te \"halen\".",marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);  
  pop();
}
tekenScorebord5() {
  push();
  fill(0,0,0,.8);
  noStroke();
  textSize(30);
  var marge = 100;
  rect(marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);
  fill(255);
  fill(51,70,175);
  text("level: 5",30,0,150,50);
  //text(" Dit is Level "+this.level+"\nHet spel is actief.\n\nKlik om het level te \"halen\".",marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);  
  pop();
}
 
beginScherm() {
  background(73,150,100);
  push();
  noFill();
  noStroke();
  strokeWeight();
  textSize(140);
  fill('lime');
  text(" Daggoe",0,0,canvas.width,canvas.height / 2);
  textSize(32);
  strokeWeight(2);
  fill('lime');
  text(" Gebruik de pijltjestoetsen om te bewegen\n Verzamel botten en bereik Daggoes huis\n Ontwijk de katten van Zouma, de boze buurman\n Let op de tijd!\n\n TIP: Een knop werkt soms niet in één keer,\n dan sta je er te lang of te kort op!!\n\n Druk op SPATIE om te beginnen\n",0,0,canvas.width,canvas.height * 1);
  fill('green');
  rect(20,20,canvas.width-40,10);
  rect(20,canvas.height-30,canvas.width-40,10);
  rect(70,40,10,canvas.height-80);
  rect(canvas.width-80,40,10,canvas.height-80);
  pop();
}
 
levelScherm() {
  push();
  fill('yellow');
  stroke(150,200,255,.7);
  strokeWeight(3);
  fill('lime');
  text('Gefeliciteerd!\nJe hebt level '+this.level+' gehaald!\n\nDruk op SPATIE om naar level '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
  pop();
}  

levelScherm2() {
  push();
  background('red');
  stroke(150,200,255,.7);
  strokeWeight(3);
  fill('orange');
  text('Helaas!\nJe hebt level '+this.level+' niet gehaald!\n\nDruk op SPATIE om level '+(this.level)+' opnieuw te spelen.',0,0,canvas.width,canvas.height / 2);
  pop();
}  
 
eindScherm() {
  var tekst = 'Je hebt het gehaald.';
  if (this.gewonnen) {
    tekst = 'Gefeliciteerd!';
  }
  push();
  stroke(100,75,50,.8);
  strokeWeight(3);
  text(tekst + '\n\nDruk ENTER om het spel opnieuw te spelen.',0,0,canvas.width,canvas.height);
  pop();
}    
 
teken() {
  background('green');
  if (!this.actief) {
      if (this.afgelopen) {
          this.eindScherm();
      }
      else {
          this.beginScherm();
      }
  }
  else {
      if (this.levelGehaald) {
          this.levelScherm();
      }
      else {
        for ( var  rij=0;rij<this.aantalRijen;rij++) {
          for ( var  kolom=0;kolom<this.aantalKolommen;kolom++) {
            fill(80,166,86);
            rect(kolom*this.celGrootte,rij*this.celGrootte*0.81+38,this.celGrootte,this.celGrootte*0.81);
          }
        }
          this.tekenScorebord();
      }
  }
 if (this.level == 1 && this.actief && !this.levelGehaald) {
  this.tekenScorebord1();
  // push();
  // fill('red');
  // ellipse(50,50,30);
  // pop();
}
if (this.level == 2 && this.actief && !this.levelGehaald) {
  this.tekenScorebord2();
}
if (this.level == 3 && this.actief && !this.levelGehaald) {
  this.tekenScorebord3();
}
if (this.level == 4 && this.actief && !this.levelGehaald) {
  this.tekenScorebord4();
}
if (this.level == 5 && this.actief && !this.levelGehaald) {
  this.tekenScorebord5();
}
}
}
 
class Dagoe {
  constructor(animatie,animatie1,animatie2,animatie3) {
    this.animatie = animatie;
    this.animatie1 = animatie1;
    this.animatie2 = animatie2;
    this.animatie3 = animatie3;
    this.currentAnimatie = this.animatie;
    this.bewegingsRichting = null;
    this.x = 2;
    this.y = 54;
    this.nummer = 0;
    this.breedte = spel.celGrootte*0.9;
    this.hoogte = spel.celGrootte*0.6;
    this.stapGrootte = spel.celGrootte;
    this.aantalbotten = 0;
  }
  setAnimatie(animatie) {
    this.currentAnimatie = animatie;
    this.nummer = 0;
  }
  setBewegingsRichting(richting) {
    this.bewegingsRichting = richting;
  }
  getBewegingsRichting() {
    return this.bewegingsRichting;
  }

  teken() {
    image(
      this.animatie[this.nummer],
      this.x,
      this.y,
      this.breedte,
      this.hoogte
    );
   
    if (this.nummer == 4) {
      this.nummer = 0;
      this.nummer++;
    }
    if (this.nummer == 9) {
      this.nummer = 5;
      this.nummer++;
      this.hoogte = this.hoogte*0.81
    }
    if (this.nummer == 14) {
      this.nummer = 10;
      this.nummer++;
    }
    if (this.nummer == 19) {
      this.nummer = 15;
      this.nummer++;
      this.hoogte = this.hoogte*0.95
    }
    ////////////////////////////////////////////knop
    if (spel.level == 2) {
      if (hond.x == 252 && hond.y == 560.25) {
        spel.ingedrukt = !spel.ingedrukt; 
      }
    }
    if (spel.level == 3) {
      if (hond.x == 127 && hond.y == 762.75) {
        spel.ingedrukt = !spel.ingedrukt; 
      }
    }
    if (spel.level == 4) {
      if (hond.x == 2 && hond.y == 155.25 || hond.x == 877 && hond.y == 357.75) {
        spel.ingedrukt = !spel.ingedrukt; 
      }
    }
    if (spel.level == 5) {
      if (hond.x == 1002 && hond.y == 54 || hond.x == 627 && hond.y == 864) {
        spel.ingedrukt = !spel.ingedrukt; 
      }
    }
    ////////////////////////////////////////////...
    ////////////////////////////////////////////huis
    if (spel.level == 1 && this.x == 752&& this.y == 54) {
        spel.levelGehaald = true;
    }
    if (spel.level == 2 && this.x == 1127&& this.y == 661.5) {
      spel.levelGehaald = true;
    }
    if (spel.level == 3 && this.x == 1252&& this.y == 155.25) {
      spel.levelGehaald = true;
    }
    if (spel.level == 4 && this.x == 377&& this.y == 54) {
      spel.levelGehaald = true;
    }
    if (spel.level == 5 && this.x == 1127&& this.y == 357.75) {
      spel.afgelopen = true;
      spel.gewonnen = true;
      spel.actief = false;
    }
    ////////////////////////////////////////////...
    ////////////////////////////////////////////bot
    if (spel.level == 1) {
      if(hond.x == 377 && hond.y == 762.75) {
        spel.bot = false;
      }
      if(hond.x == 627 && hond.y == 54) {
        spel.bot1 = false;
      }
      if(hond.x == 1127 && hond.y == 762.75) {
        spel.bot2 = false;
      }
      if (spel.bot == false && spel.bot1 == false && spel.bot2 == false) {
        this.aantalbotten = 3;
      }
    }
    if (spel.level == 2) {
      if(hond.x == 252 && hond.y == 762.75) {
        spel.bot = false;
      }
      if(hond.x == 627 && hond.y == 864) {
        spel.bot1 = false;
      }
      if(hond.x == 1252 && hond.y == 155.25) {
        spel.bot2 = false;
      }
      if (spel.bot == false && spel.bot1 == false && spel.bot2 == false) {
        this.aantalbotten = 3;
      }
    }
    if (spel.level == 3) {
      if(hond.x == 377 && hond.y == 762.75) {
        spel.bot = false;
      }
      if(hond.x == 877 && hond.y == 256.5) {
        spel.bot1 = false;
      }
      if(hond.x == 1127 && hond.y == 357.75) {
        spel.bot2 = false;
      }
      if (spel.bot == false && spel.bot1 == false && spel.bot2 == false) {
        this.aantalbotten = 3;
      }
    }
    if (spel.level == 4) {
      if(hond.x == 2 && hond.y == 762.75) {
        spel.bot = false;
      }
      if(hond.x == 627 && hond.y == 54) {
        spel.bot1 = false;
      }
      if(hond.x == 1002 && hond.y == 661.5) {
        spel.bot2 = false;
      }
      if (spel.bot == false && spel.bot1 == false && spel.bot2 == false) {
        this.aantalbotten = 3;
      }
    }
    if (spel.level == 5) {
      if(hond.x == 377 && hond.y == 864) {
        spel.bot = false;
      }
      if(hond.x == 1002 && hond.y == 155.25) {
        spel.bot1 = false;
      }
      if(hond.x == 1377 && hond.y == 864) {
        spel.bot2 = false;
      }
      if (spel.bot == false && spel.bot1 == false && spel.bot2 == false) {
        this.aantalbotten = 3;
      }
    }
    ////////////////////////////////////////////...
    ////////////////////////////////////////////teleport
    if (spel.level == 5) {
      if (this.x == 1377 && this.y == 459) {
        this.y = 155.25;
      }
      if (this.x == 1377 && this.y == 256.5) {
        this.y = 560.25;
      }
    }
    ////////////////////////////////////////////...
    //////////////////////////////////////////// voor de katten ...
    if (spel.level == 2) {
    if (this.x == 1127) {
      if (this.y == 155.25 || this.y == 256.5 || this.y == 357.75 || this.y == 459) {
      timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(40);
    }
  }
  if (this.x == 627 && this.y == 762.75) {
    timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(40);
  }
  }

  if (spel.level == 3) {
    if (this.x == 752) {
      if (this.y == 54 || this.y == 762.75) {
      timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(55);
    }
  }
  }

  if (spel.level == 4) {
    if (this.y == 762.75) {
      if (this.x == 1002 || this.x == 1127 || this.x == 1252) {
      timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(80);
    }
  }
  if (this.x == 752 && this.y == 459) {
    timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(80);
  }
  if (this.x == 252 && this.y == 864) {
    timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(80);
  }
  }
  if (spel.level == 5) {
    if (this.y == 560.25) {
      if (this.x == 377 || this.x == 502) {
      timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(100);
    }
  }
  if (this.y == 357.75 && this.x == 502) {
    timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(100);
  }
  if (this.y == 54 && this.x == 1127) {
    timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(100);
  }
  if (this.y == 864 && this.x == 877) {
    timer2.loopt = false;
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
      timer2.stelIn(100);
  }
  }
///////////////////////////////////////////////////////////////...
  }
}
 

/*  **********************************************************
  **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
  ********************************************************** */
 
  var achtergrondmuziek;
  var timer;
  var animatie = [];
  var animatie1 = [];
  var animatie2 = [];
  var animatie3 = [];

function preload() {
  for (var b = 1; b < 6; b++) {
    nieuwe_hond = loadImage("JS/afbeelding0/hond" + b + ".png");
    nieuwe_hond.resize(50,50*0.81); 
    animatie.push(nieuwe_hond);
  }
 
  for (var b = 6; b < 11; b++) {
    nieuwe_hond1 = loadImage("JS/afbeelding1/hond" + b + ".png"); //
    nieuwe_hond1.resize(50,50*0.81); 
    animatie.push(nieuwe_hond1);
  }
 
  for (var b = 11; b < 16; b++) {
    nieuwe_hond2 = loadImage("JS/afbeelding2/hond" + b + ".png");
    nieuwe_hond2.resize(50,50*0.81); 
    animatie.push(nieuwe_hond2);
  }
 
  for (var b = 16; b < 21; b++) {
    nieuwe_hond3 = loadImage("JS/afbeelding3/hond" + b + ".png"); //
    nieuwe_hond3.resize(50,50*0.81); 
    animatie.push(nieuwe_hond3);
  }

  pauzeknop = loadImage("JS/dudeprolim22e.png"); //
  boom = loadImage("JS/boom.png");
  huis = loadImage("JS/huisje daggoe.png");
  bot = loadImage("JS/bot.png");
  kat = loadImage("JS/kat.png");
  hond = loadImage("JS/daggoe.png");
  knop = loadImage("JS/rode knop.png");
  knop2 = loadImage("JS/knop ingedrukt.png");
  hek = loadImage("JS/hek.png");
  openhek = loadImage("JS/hek open.png");
  bot1 = loadImage("JS/bot1.png");
  bot2 = loadImage("JS/bot2.png");
  achtergrondmuziek = loadSound("JS/muziek/Fluffing-a-Duck(chosic.com).mp3");
}

  function setup() {
canvas = createCanvas(1500,950);
canvas.parent('processing');
textFont("Monospace");
textSize(44);
textAlign(CENTER,CENTER);  

frameRate(50);
spel = new Levels();
spel.nieuwSpel();
spel.berekenCelGrootte();
hond = new Dagoe(animatie);
hond1 = new Dagoe(animatie1);
hond2 = new Dagoe(animatie2);
hond3 = new Dagoe(animatie3);
// timer2 = new Timer(canvas.width * 2/3,10,canvas.width / 3 - 10,50,'#2F2F2F','darkgreen','red','lime',false,true);
timer2 = new Timer(0,0,canvas.width,40,'#2F2F2F','darkgreen','red','lime',false,true);
timer2.stelIn(30);
achtergrondmuziek.loop();
// if (spel.actief && !spel.levelGehaald) {
//  timer2.reageer();
// }
// fill(255);
// fill(51,70,175);
// text("level: 1",100,50,150,50);
}
 
function draw() {
spel.update();
spel.teken();

if (spel.level == 2 && spel.actief && !spel.levelGehaald) {
  if (spel.ingedrukt == false) {  
  image(knop,247,540,130,130);
  image(hek,125,635,125,125);
}
else {
  image(knop2,157,460,310,310);
  image(openhek,38,550,298,298);
}
}
if (spel.level == 3 && spel.actief && !spel.levelGehaald) {
  if (spel.ingedrukt == false) {
  image(openhek,1163,350,298,298);
  image(knop,122,740,130,130);
  image(hek,625,635,125,125);
}
else {
  image(hek,1250,435,125,125);
  image(knop2,32,660,310,310);
  image(openhek,538,550,298,298);
}
}
if (spel.level == 4 && spel.actief && !spel.levelGehaald) {
if (spel.ingedrukt == false) {
  image(knop,-3,140,130,130);
  image(knop,872,340,130,130);
  image(openhek,163,550,298,298);
  image(hek,250,235,125,125);
}
else {
  image(knop2,-93,60,310,310);
  image(knop2,782,260,310,310);
  image(hek,250,635,125,125);
  image(openhek,163,150,298,298);
}
}
if (spel.level == 5 && spel.actief && !spel.levelGehaald) {
if (spel.ingedrukt == false) {
  image(openhek,1288,650,298,298);
  image(hek,875,635,125,125);
  image(knop,997,40,130,130);
  image(knop,622,840,130,130);
}
else {
  image(hek,1375,720,125,125);
  image(openhek,788,565,298,298);
  image(knop2,907,-40,310,310);
  image(knop2,532,760,310,310);
}
}
if(spel.actief && !spel.levelGehaald) {
  timer2.teken();
  hond.teken();
}

textSize(30);
if (spel.level == 1 && spel.actief && !spel.levelGehaald) {
  
fill(255);
fill('lime');
//omhoog is -100, naar rechts is 125
image(boom,985,0,150,150);
image(boom,860,0,150,150);
image(boom,485,0,150,150);
image(boom,360,0,150,150);
image(boom,985,0,150,150);
image(boom,1235,0,150,150);
image(boom,1360,0,150,150);
image(boom,1360,100,150,150);
image(huis,750,15,127,127);
if (spel.bot1 == true) {
image(bot1,630,50,115,72);
}
if (spel.bot2 == true) {
image(bot2,1130,750,115,72);
}
if (spel.bot == true) {
image(bot,380,750,115,72);
}
image(boom,1110,0,150,150);
image(boom,-15,100,150,150);
image(boom,-15,200,150,150);
image(boom,-15,300,150,150);
image(boom,-15,400,150,150);
image(boom,-15,500,150,150);
image(boom,-15,600,150,150);
image(boom,-15,700,150,150);
image(boom,235,500,150,150);
image(boom,485,500,150,150);
image(boom,485,600,150,150);
image(boom,235,600,150,150);
image(boom,235,700,150,150);
image(boom,485,700,150,150);
image(boom,-15,800,150,150);
image(boom,110,800,150,150);
image(boom,235,800,150,150);
image(boom,360,800,150,150);
image(boom,485,800,150,150);
image(boom,610,800,150,150);
image(boom,735,800,150,150);
image(boom,860,800,150,150);
image(boom,1110,800,150,150);
image(boom,1235,800,150,150);
image(boom,1360,200,150,150);
image(boom,1360,300,150,150);
image(boom,1360,400,150,150);
image(boom,1360,500,150,150);
image(boom,1360,600,150,150);
image(boom,1360,700,150,150);
image(boom,1360,800,150,150);
image(boom,1110,500,150,150);
image(boom,985,500,150,150);
image(boom,985,600,150,150);
image(boom,985,700,150,150);
image(boom,985,800,150,150);

if(timer2.pauze == true) {
    timer2.pauzeScherm();
}
if(spel.actief && !spel.levelgehaald && !timer2.loopt && !timer2.pauze) {
  spel.resetLevel();
  timer2.pauze = false;
  hond.x = 2;
  hond.y = 54;
}
}
if (spel.level == 2 && spel.actief && !spel.levelGehaald) {
  fill(255);
//fill(51,70,175);
fill('lime');
//omlaag is 100, naar rechts is 125
//verschil openhek = x -87 \ y -85
//verschil knop2 = x -90 \ y -80
// if (spel.ingedrukt == true) {
  //image(knop2,157,460,310,310);   
// }
// else {
//   image(knop,247,540,130,130);
// }
///image(knop,247,540,130,130);
// if (spel.ingedrukt == true) {
//   image(openhek,38,550,298,298);
// }
// else {
//   image(hek,125,635,125,125);
// }
//image(hek,125,635,125,125);
image(boom,1110,0,150,150);
image(kat,610,690,180,180);
image(kat,1110,90,180,180);
image(kat,1110,190,180,180);
image(kat,1110,290,180,180);
image(kat,1110,390,180,180);
image(boom,985,0,150,150);
image(boom,860,0,150,150);
image(boom,485,0,150,150);
image(boom,360,0,150,150);
image(boom,985,0,150,150);
image(boom,1235,0,150,150);
image(boom,1360,0,150,150);
image(boom,1360,100,150,150);
if (spel.bot1 == true) {
  image(bot1,630,850,115,72);
  }
  if (spel.bot2 == true) {
  image(bot2,1255,150,115,72);
  }
  if (spel.bot == true) {
  image(bot,255,750,115,72);
  }
image(boom,-15,100,150,150);
image(boom,-15,200,150,150);
image(boom,-15,300,150,150);
image(boom,-15,400,150,150);
image(boom,-15,500,150,150);
image(boom,-15,600,150,150);
image(boom,-15,700,150,150);
image(boom,360,500,150,150);
image(boom,360,600,150,150);
image(boom,235,600,150,150);
image(boom,360,700,150,150);
image(boom,-15,800,150,150);
image(boom,110,800,150,150);
image(boom,235,800,150,150);
image(boom,360,800,150,150);
image(boom,985,800,150,150);
image(boom,1110,800,150,150);
image(boom,1235,800,150,150);
image(boom,1360,200,150,150);
image(boom,1360,300,150,150);
image(boom,1360,400,150,150);
image(boom,1360,500,150,150);
image(boom,1360,600,150,150);
image(boom,1360,700,150,150);
image(boom,1360,800,150,150);
image(boom,1110,500,150,150);
image(boom,860,500,150,150);
image(boom,860,600,150,150);
image(boom,860,700,150,150);
image(boom,860,800,150,150);
image(huis,1125,615,127,127);
if(timer2.pauze == true) {
  timer2.pauzeScherm();
}  
if(spel.actief && !spel.levelgehaald && !timer2.loopt && !timer2.pauze) {
  spel.resetLevel();
  timer2.pauze = false;
  hond.x = 2;
  hond.y = 54;
}
}
  if (spel.level == 3 && spel.actief && !spel.levelGehaald) {
    fill(255);
//fill(51,70,175);
fill('lime');
// hondje.beweeg();
// hondje.teken();
//omhoog is -100, naar rechts is 125
// if (spel.ingedrukt == true) {
  //image(knop2,32,660,310,310);   
// }
// else {
//   image(knop,122,740,130,130);
// }
// if (spel.ingedrukt == true) {
//   image(openhek,1163,350,298,298);
// }
// else {
//   image(hek,1250,435,125,125);
// }
///image(openhek,1163,350,298,298);
// if (spel.ingedrukt == true) {
//   image(openhek,538,550,298,298);
// }
// else {
//   image(hek,625,635,125,125);
// }
//image(hek,625,635,125,125);
//image(knop,122,740,130,130);
image(boom,1110,0,150,150);
image(boom,985,0,150,150);
image(boom,860,0,150,150);
image(boom,485,0,150,150);
image(boom,360,0,150,150);
image(boom,985,0,150,150);
image(boom,985,100,150,150);
image(boom,860,300,150,150);
image(boom,985,200,150,150);
image(boom,985,300,150,150);
image(boom,1110,400,150,150);
image(boom,1235,0,150,150);
image(boom,1360,0,150,150);
image(boom,1360,100,150,150);
image(boom,1110,100,150,150);
image(boom,860,100,150,150);
image(huis,1250,115,127,127);
if (spel.bot1 == true) {
  image(bot1,880,250,115,72);
  }
  if (spel.bot2 == true) {
  image(bot2,1130,350,115,72);
  }
  if (spel.bot == true) {
  image(bot,380,750,115,72);
  }
// image(bot1,880,250,115,72);
// image(bot2,1130,350,115,72);
// image(bot,380,750,115,72);
image(boom,735,600,150,150);
image(boom,235,300,150,150);
image(boom,360,300,150,150);
image(boom,360,400,150,150);
image(boom,485,400,150,150);
image(kat,735,-10,180,180);
image(kat,735,690,180,180);
image(boom,735,100,150,150);
image(boom,360,100,150,150);
image(boom,-15,100,150,150);
image(boom,-15,200,150,150);
image(boom,-15,300,150,150);
image(boom,-15,400,150,150);
image(boom,-15,500,150,150);
image(boom,-15,600,150,150);
image(boom,-15,700,150,150);
image(boom,-15,800,150,150);
image(boom,110,800,150,150);
image(boom,235,600,150,150);
image(boom,235,700,150,150);
image(boom,360,600,150,150);
image(boom,485,600,150,150);
image(boom,235,800,150,150);
image(boom,360,800,150,150);
image(boom,485,800,150,150);
image(boom,610,800,150,150);
image(boom,735,800,150,150);
image(boom,860,800,150,150);
image(boom,985,800,150,150);
image(boom,1110,800,150,150);
image(boom,1235,800,150,150);
image(boom,1360,200,150,150);
image(boom,1360,300,150,150);
image(boom,1360,400,150,150);
image(boom,1360,500,150,150);
image(boom,1360,600,150,150);
image(boom,1360,700,150,150);
image(boom,1360,800,150,150);
if(timer2.pauze == true) {
  timer2.pauzeScherm();
}    
if(spel.actief && !spel.levelgehaald && !timer2.loopt && !timer2.pauze) {
  spel.resetLevel();
  timer2.pauze = false;
  hond.x = 2;
  hond.y = 54;
}
}
    if (spel.level == 4 && spel.actief && !spel.levelGehaald) {
      fill(255);
      //fill(51,70,175);
      fill('lime');
      // omlaag = +100 en naar rechts = +125
      // image(knop,-3,140,130,130);
      // image(knop,872,340,130,130);
      image(huis,375,15,127,127);
      image(boom,1360,0,150,150);
      image(boom,1360,100,150,150);
      image(boom,1360,200,150,150);
      image(boom,1360,300,150,150);
      image(boom,1360,400,150,150);
      image(boom,1360,500,150,150);
      image(boom,1360,600,150,150);
      image(boom,1360,700,150,150);
      image(boom,1360,800,150,150);
      image(boom,985,100,150,150);
      image(boom,485,0,150,150);
      image(boom,485,100,150,150);
      image(boom,985,200,150,150);
      image(boom,860,200,150,150);
      image(boom,1110,200,150,150);
      image(boom,1110,300,150,150);
      image(boom,485,200,150,150);
      image(boom,360,200,150,150);
      image(boom,110,200,150,150);
      image(boom,-15,200,150,150);
      image(boom,735,0,150,150);
      image(boom,735,200,150,150);
      image(boom,735,300,150,150);
      image(boom,610,400,150,150);
      image(boom,485,400,150,150);
      image(boom,360,400,150,150);
      image(boom,235,400,150,150);
      image(boom,110,400,150,150);
      image(kat,735,390,180,180);
      if (spel.bot1 == true) {
        image(bot1,630,50,115,72);
        }
        if (spel.bot2 == true) {
        image(bot2,1005,650,115,72);
        }
        if (spel.bot == true) {
        image(bot,5,750,115,72);
        }
      // image(bot1,630,50,115,72);
      // image(bot,5,750,115,72);
      // image(bot2,1005,650,115,72);
      image(kat,235,790,180,180);
      image(boom,860,400,150,150);
      image(boom,860,500,150,150);
      image(boom,860,700,150,150);
      image(boom,-15,600,150,150);
      image(boom,110,600,150,150);
      image(boom,360,600,150,150);
      image(boom,360,700,150,150);
      image(boom,360,800,150,150);
      image(boom,1110,500,150,150);
      image(boom,1110,600,150,150);
      image(boom,985,500,150,150);
      image(boom,610,500,150,150);
      image(boom,610,600,150,150);
      image(boom,610,700,150,150);
      image(kat,985,690,180,180);
      image(kat,1110,690,180,180);
      image(kat,1235,690,180,180);
      
      // if (spel.ingedrukt == true) {
//   image(openhek,1163,350,298,298);
// }
// else {
//   image(hek,250,635,125,125);
// }
      ///image(openhek,163,550,298,298);
// if (spel.ingedrukt == true) {
//   image(openhek,163,150,298,298);
// }
// else {
//   image(hek,250,235,125,125);
// }
      ///image(hek,250,235,125,125);
      if(timer2.pauze == true) {
        timer2.pauzeScherm();
    }
    if(spel.actief && !spel.levelgehaald && !timer2.loopt && !timer2.pauze) {
      spel.resetLevel();
      timer2.pauze = false;
      hond.x = 2;
      hond.y = 54;
    }
      }
      if (spel.level == 5 && spel.actief && !spel.levelGehaald) {
        fill(255);
        fill('lime');
        ellipse(1437,290,60,60);
        fill('green');
        ellipse(1437,290,54,54);
        fill('lime');
        ellipse(1437,290,48,48);
        fill('green');
        ellipse(1437,290,42,42);
        fill('yellow');
        ellipse(1437,290,36,36);
        rect(1433,222,10,30,);
        
        image(kat,485,290,180,180);
        image(boom,1235,0,150,150);
        image(boom,1235,200,150,150);
        image(boom,1235,300,150,150);
        image(boom,1360,300,150,150);
        //image(knop,997,40,130,130);
        image(boom,1110,200,150,150);
        image(boom,985,200,150,150);
        image(boom,860,0,150,150);
        image(boom,860,100,150,150);
        image(boom,860,200,150,150);
        image(kat,1110,-10,180,180);
        //image(bot1,1005,150,115,72);
        image(boom,1235,400,150,150);
        image(boom,985,400,150,150);
        image(boom,985,500,150,150);
        image(boom,985,600,150,150);
        image(boom,735,600,150,150);
        image(boom,735,700,150,150);
        image(boom,735,800,150,150);
        image(huis,1125,315,127,127);
        image(boom,1110,400,150,150);
        image(boom,860,400,150,150);
        image(boom,735,400,150,150);
        image(boom,610,100,150,150);
        image(boom,610,200,150,150);
        image(boom,610,300,150,150);
        image(boom,610,400,150,150);
        if (spel.bot1 == true) {
          image(bot1,1005,150,115,72);
          }
          if (spel.bot2 == true) {
          image(bot2,1380,850,115,72);
          }
          if (spel.bot == true) {
          image(bot,380,850,115,72);
          }
        // image(bot2,1380,850,115,72);
        // image(bot,380,850,115,72);
        
        //image(openhek,1288,650,298,298);
        //image(hek,875,635,125,125);
        image(boom,1360,0,150,150);
        image(boom,1235,700,150,150);
        image(boom,1235,800,150,150);
        image(boom,-15,100,150,150);
        image(boom,110,100,150,150);
        image(boom,360,100,150,150);
        image(boom,360,200,150,150);
        image(boom,360,300,150,150);
        image(kat,860,790,180,180);
        image(boom,360,300,150,150);
        image(boom,360,400,150,150);
        image(kat,360,490,180,180);
        image(boom,485,400,150,150);
        image(boom,610,700,150,150);
        image(boom,110,300,150,150);
        image(boom,110,400,150,150);
        image(boom,110,500,150,150);
        image(boom,110,600,150,150);
        image(boom,110,700,150,150);
        image(boom,235,700,150,150);
        image(boom,360,700,150,150);
        image(boom,485,700,150,150);
        image(kat,485,490,180,180);
        //image(knop,622,840,130,130);

        fill('lime');
        ellipse(1437,490,60,60);
        fill('green');
        ellipse(1437,490,54,54);
        fill('lime');
        ellipse(1437,490,48,48);
        fill('green');
        ellipse(1437,490,42,42);
        fill('yellow');
        ellipse(1437,490,36,36);
        rect(1433,532,10,30,);

        if(timer2.pauze == true) {
          timer2.pauzeScherm();
      }  
      if(spel.actief && !spel.levelgehaald && !timer2.loopt && !timer2.pauze) {
        spel.resetLevel();
        timer2.pauze = false;
        hond.x = 2;
        hond.y = 54;
      }

      }
if(spel.actief && !spel.levelGehaald && timer2.loopt) {
          // timer2.teken()
          fill('lime');
        image(pauzeknop,1210,5,42,34);
        text("SPATIE",1290,15,60,60);
        // image(huis,1250,115,127,127);
        }
        if (spel.level == 1 && spel.actief && !spel.levelGehaald && timer2.loopt) {
        fill('lime');
        text("LEVEL: 1",100,-49,150,150);
        }
        if (spel.level == 2 && spel.actief && !spel.levelGehaald && timer2.loopt) {
          fill('lime');
          text("LEVEL: 2",100,-49,150,150);
          }
          if (spel.level == 3 && spel.actief && !spel.levelGehaald && timer2.loopt) {
            fill('lime');
            text("LEVEL: 3",100,-49,150,150);
            }
            if (spel.level == 4 && spel.actief && !spel.levelGehaald && timer2.loopt) {
              fill('lime');
              text("LEVEL: 4",100,-49,150,150);
              }
              if (spel.level == 5 && spel.actief && !spel.levelGehaald && timer2.loopt) {
                fill('lime');
                text("LEVEL: 5",100,-49,150,150);
                }
      }
 
      function keyPressed() {
        if (spel.actief && !spel.levelGehaald && !timer2.pauze) {
          let stapGrootte = spel.celGrootte;
       
          if (keyCode == LEFT_ARROW) { /////////////////////////////////////////////////////////links
          if (spel.level == 1) {
if (hond.x <=253  && hond.y == 54 && hond.x >= 126 || hond.y <= 460 && hond.y >=155.24 && hond.x <= 1253 && hond.x >= 251 || hond.x >= 751 && hond.x <= 878 && hond.y <= 762.76 && hond.y >= 459 || hond.x == 1252 && hond.y <= 762.76 && hond.y >= 661.4) {
            hond.nummer = 0;
            hond.x -= stapGrootte;
          }}
          if (spel.level == 2) {
if (hond.x <=253  && hond.y == 54 && hond.x >= 126 || hond.y <= 460 && hond.y >=155.24 && hond.x <= 1253 && hond.x >= 251 || hond.x == 752 && hond.y == 54 || hond.x == 252 && hond.y == 560.25 || hond.x == 252 && hond.y == 762.75 || hond.x >= 626 && hond.x <= 753 && hond.y <= 865 && hond.y >= 560 || hond.y == 762.75 && hond.x <= 1253 && hond.x >= 1126) {
            hond.nummer = 0;
            hond.x -= stapGrootte;
          }}
          if (spel.level == 3) {
if (hond.y == 54 && hond.x >= 126 && hond.x <= 376 || hond.y == 54 && hond.x == 752 || hond.y == 155.25 && hond.x == 252 || hond.y == 155.25 && hond.x == 627 || hond.y == 256.5 && hond.x >= 251 && hond.x <= 1001 || hond.y == 256.5 && hond.x == 1252 || hond.y == 357.75 && hond.x >= 626 && hond.x <= 760 || hond.y == 357.75 && hond.x == 1252 || hond.y == 459 && hond.x == 252 || hond.y == 459 && hond.x >= 751 && hond.x <= 1003 || hond.y == 560.25 && hond.x >=251 && hond.x <= 1253 || hond.y == 661.5 && hond.x >= 1001 && hond.x <= 1253 || hond.y == 762.75 && hond.x >= 501 && hond.x <= 1253) {
            hond.nummer = 0;
            hond.x -= stapGrootte;
          }}
          if (spel.level == 4) {
if (hond.y == 54 && hond.x >= 126 && hond.x <= 253 || hond.y == 54 && hond.x >= 1001 && hond.x <= 1253 || hond.y == 155.25 && hond.x >= 126 && hond.x <= 378 || hond.y == 155.25 && hond.x >= 751 && hond.x <= 878 || hond.y == 155.25 && hond.x == 1252 || hond.y == 357.75 && hond.x >= 126 && hond.x <= 628 || hond.y == 357.75 && hond.x == 1002 || hond.y == 459 && hond.x >= 1126 && hond.x <= 1253 || hond.y == 560.25 && hond.x >= 126 && hond.x <= 503 || hond.y == 661.5 && hond.x >= 876 && hond.x <= 1003 || hond.y == 762.75 && hond.x >= 126 && hond.x <= 253 || hond.y == 864 && hond.x == 127 || hond.y == 864 && hond.x >= 626 && hond.x <= 1253) {
            hond.nummer = 0;
            hond.x -= stapGrootte;
          }}
          if (spel.level == 5) {
if (hond.y == 54 && hond.x >= 126 && hond.x <= 753 || hond.y == 155.25 && hond.x >= 1005 && hond.x <= 1378 || hond.y == 256.5 && hond.x >= 126 && hond.x <= 253 || hond.y == 357.75 && hond.x >= 876 && hond.x <= 1003 || hond.y == 560.25 && hond.x >=376 && hond.x <= 878 || hond.y == 560.25 && hond.x >= 1251 && hond.x <= 1378 || hond.y == 661.5 && hond.x >= 255 && hond.x <= 628 || hond.y == 661.5 && hond.x >= 1251 && hond.x <= 1378 || hond.y == 762.75 && hond.x >= 1001 && hond.x <= 1128 || hond.y == 864 && hond.x >= 126 && hond.x <= 628 || hond.y == 864 && hond.x >= 1001 && hond.x <= 1128) {
            hond.nummer = 0;
            hond.x -= stapGrootte;
          }}
        } ///////////////////////////////////////////////////////////////////////////////////////...
        if (keyCode == RIGHT_ARROW) { ///////////////////////////////////////////////////////////rechts
        if (spel.level == 1) {
if (hond.x <= 1251.99 && hond.y >= 155.25 && hond.y <= 459 || hond.x <= 1251.99 && hond.y >= 155.26 && hond.y <= 458.99 || hond.y == 54 && hond.x <= 250 && hond.x >= 1.5 || hond.x == 1127 && hond.y <= 763 && hond.y >= 661 || hond.x >= 626 && hond.x <= 753 && hond.y <= 763 && hond.y >= 560) {
            hond.nummer = 10;
            hond.x += stapGrootte;
          }}
        if (spel.level == 2) {
if (hond.x <= 1251.99 && hond.y >= 155.25 && hond.y <= 459 || hond.x <= 1251.99 && hond.y >= 155.26 && hond.y <= 458.99 || hond.y == 54 && hond.x <= 250 && hond.x >= 1.5 || hond.x == 627 && hond.y == 54 || hond.x == 127 && hond.y == 762.75 || hond.x == 127 && hond.y == 560.25 || hond.x >= 501 && hond.x <= 628 && hond.y >= 560 || hond.y == 762.75 && hond.x <= 1128 && hond.x >= 1000) {
            hond.nummer = 10;
            hond.x += stapGrootte;
          }}
        if (spel.level == 3) {
if (hond.y == 54 && hond.x >= 1 && hond.x <= 251 || hond.y == 54 && hond.x == 627 || hond.y == 155.25 && hond.x == 127 ||hond.y == 155.25 && hond.x == 502 || hond.y == 256.5 && hond.x >=126 && hond.x <= 876 || hond.y == 256.5 && hond.x == 1127 || hond.y == 357.75 && hond.x >= 501 && hond.x <= 750 || hond.y == 357.75 && hond.x == 1127 || hond.y == 459 && hond.x == 127 ||hond.y == 459 && hond.x >= 626 && hond.x <= 1000 || hond.y == 560.25 && hond.x >= 126 && hond.x <= 1251 || hond.y == 661.5 && hond.x >= 751 && hond.x <= 1251 || hond.y == 762.75 && hond.x >= 376 && hond.x <= 1251) {
            hond.nummer = 10;
            hond.x += stapGrootte;
          }}
        if (spel.level == 4) {
if (hond.y == 54 && hond.x >= 1 && hond.x <= 128 || hond.y == 54 && hond.x >= 876 && hond.x <= 1250 || hond.y == 155.25 && hond.x >= 1 && hond.x <= 253 || hond.y == 155.25 && hond.x >= 626 && hond.x <= 753 || hond.y == 155.25 && hond.x == 1127 || hond.y == 357.75 && hond.x >= 1 && hond.x <= 503 || hond.y == 357.75 && hond.x == 877 || hond.y == 459 && hond.x >= 1001 && hond.x <= 1128 || hond.y == 560.25 && hond.x >= 1 && hond.x <= 378 || hond.y == 661.5 && hond.x >= 751 && hond.x <= 878 || hond.y == 762.75 && hond.x >= 1 && hond.x <= 128 || hond.y == 864 && hond.x >= 1 && hond.x <= 128 || hond.y == 864 && hond.x >= 501 && hond.x <= 1128) {
            hond.nummer = 10;
            hond.x += stapGrootte;
          }}
        if (spel.level == 5) {
if (hond.y == 54 && hond.x >= 1 && hond.x <= 628 || hond.y == 54 && hond.x == 1002 || hond.y == 155.25 && hond.x >= 1001 && hond.x <= 1253 || hond.y == 256.5 && hond.x >= 1 && hond.x <= 128 || hond.y == 357.75 && hond.x >= 751 && hond.x <= 878 || hond.y == 560.25 && hond.x >= 251 && hond.x <= 753 || hond.y == 560.25 && hond.x >= 1126 && hond.x <= 1253 || hond.y == 661.5 && hond.x >= 251 && hond.x <= 503 || hond.y == 661.5 && hond.x >= 1126 && hond.x <= 1253 || hond.y == 762.75 && hond.x >= 876 && hond.x <= 1003 || hond.y == 864 && hond.x >= 1 && hond.x <= 503 || hond.y == 864 && hond.x >= 876 && hond.x <= 1003) {
            hond.nummer = 10;
            hond.x += stapGrootte;
          }}
          } /////////////////////////////////////////////////////////////////////////////////////...
          if (keyCode == UP_ARROW) { ////////////////////////////////////////////////////////////boven
          if (spel.level == 1) {
if (hond.x == 127 && hond.y >= 55 || hond.x == 252 && hond.y >= 55 && hond.y <= 460 || hond.x == 377 && hond.y <= 763 && hond.y >= 156 || hond.x == 502 && hond.y <= 460 && hond.y >= 156 || hond.x == 627 && hond.y <= 763 && hond.y >= 55 || hond.x >= 751 && hond.x <= 878 && hond.y >= 156 && hond.y <= 763 || hond.x >= 1001 && hond.x <= 1127 && hond.y >= 156 && hond.y <= 460 || hond.x == 1252 && hond.y >= 156 && hond.y <= 763 || hond.x == 1127 && hond.y == 762.75) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }}
          if (spel.level == 2) {
if (hond.x == 127 && hond.y >= 55 || hond.x == 252 && hond.y >= 55 && hond.y <= 561 || hond.x == 377 && hond.y >= 156 || hond.x == 502 && hond.y >= 156 || hond.x >= 626 && hond.x <= 753 || hond.x == 877 && hond.y >= 156 || hond.x == 1002 && hond.y >= 156 || hond.x == 1252 && hond.y >= 156) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }}
          if (spel.level == 3) {
if (hond.y == 155.25 && hond.x >= 126 && hond.x <= 253 || hond.y == 155.25 && hond.x == 627 || hond.y == 256.5 && hond.x >= 126 && hond.x <= 253 || hond.y == 256.5 && hond.x >= 501 && hond.x <= 628 || hond.y == 357.75 && hond.x == 127 || hond.y == 357.75 && hond.x >= 501 && hond.x <= 753 || hond.y == 357.75 && hond.x >= 1126 && hond.x <= 1253 || hond.y == 459 && hond.x == 127 || hond.y == 459 && hond.x >= 626 && hond.x <= 753 || hond.y == 560.25 && hond.x >= 126 && hond.x <= 253 || hond.y == 560.25 && hond.x >= 626 && hond.x <= 1003 || hond.x == 127 && hond.y >= 661.4 && hond.y <= 763 || hond.x >= 876 && hond.x <= 1253 && hond.y >= 661.4 && hond.y <= 763 ) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }}
          if (spel.level == 4) {  
if (hond.y == 155.25 && hond.x >= 1 && hond.x <= 253 || hond.y == 155.25 && hond.x == 627 || hond.y == 155.25 && hond.x == 877 || hond.y == 155.25 && hond.x >= 1126 && hond.x <= 1253 || hond.y == 256.5 && hond.x == 627 || hond.y == 256.5 && hond.x == 1252 || hond.x == 1252 && hond.y >=154 && hond.y <= 763 || hond.y == 357.75 && hond.x == 627 || hond.y == 459 && hond.x == 2 || hond.y == 459 && hond.x == 1002 || hond.y == 459 && hond.x == 1252 || hond.y == 560.75 && hond.x == 2 || hond.y == 560.75 && hond.x == 1252 || hond.x == 502 && hond.y >= 660 && hond.y <= 865 || hond.x == 752 && hond.y >= 660 && hond.y <= 865 || hond.x == 1252 && hond.y >= 660 && hond.y <= 865 || hond.y == 864 && hond.x >= 1001 && hond.x <= 1253 || hond.y == 864 && hond.x >= 1 && hond.x <=253 || hond.y == 560.25 && hond.x == 2 || hond.y == 560.25 && hond.x == 752) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }}
          if (spel.level == 5) {  
if (hond.x == 752 && hond.y >= 155 && hond.y <= 358 || hond.x == 2 && hond.y >= 357 && hond.y <= 865 || hond.x == 252 && hond.y >= 155 && hond.y <= 662 || hond.x == 502 && hond.y >= 155 && hond.y <= 358 || hond.x >= 251 && hond.x <= 628 && hond.y == 661.5 || hond.x == 752 && hond.y >= 155 && hond.x <= 358 || hond.x >= 1001 && hond.x <= 1128 && hond.y == 155.25 || hond.x == 1001 && hond.y == 864 || hond.x == 1127 && hond.y >= 580 && hond.y <= 865 || hond.x == 1252 && hond.y == 661.5 || hond.x == 1377 && hond.y >= 458 && hond.y <= 662 || hond.x == 1002 && hond.y == 864) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }}
          } /////////////////////////////////////////////////////////////////////////////////////...
         if (keyCode == DOWN_ARROW) { ///////////////////////////////////////////////////////////beneden
         if (spel.level == 1) {
if (hond.y <= 762 && hond.x == 127 || hond.y <= 458 && hond.x == 252 || hond.y <= 762 && hond.x == 377 || hond.x == 502 && hond.y <= 458 || hond.y <= 762 && hond.x >= 626 && hond.x <= 878 || hond.x >= 1002 && hond.y <= 1128 && hond.y <= 458 || hond.x == 1252 && hond.y <= 762 || hond.y == 661.5 && hond.x == 1127) { 
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }}
         if (spel.level == 2) {
if (hond.x == 127 && hond.y <= 460 || hond.x == 252 && hond.y <= 460 || hond.x == 377 && hond.y <= 358 || hond.x == 502 && hond.y <= 800 || hond.x == 627 && hond.y <= 800 || hond.x == 752 && hond.y <= 800 || hond.x == 877 && hond.y <= 400 || hond.x == 1002 && hond.y <= 700 || hond.x == 1252 && hond.y <= 700) { 
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }}
         if (spel.level == 3) {
if (hond.x == 127 && hond.y >= 53 && hond.y <= 661.6 || hond.x == 252 && hond.y >=53 && hond.y <= 256.4 || hond.x == 252 && hond.y == 459 || hond.x == 502 && hond.y >= 155.24 && hond.y <= 357.74 || hond.x == 627 && hond.y >=53 && hond.y <= 460 || hond.x == 627 && hond.y == 661.5 || hond.x == 752 && hond.y >= 155.24 && hond.y <= 460 || hond.y == 459 && hond.x >= 751 && hond.x <= 1003 || hond.y >= 560.24 && hond.y <= 762.74 && hond.x >= 876 && hond.x <= 1253 || hond.x == 1252 && hond.y >= 155.25 && hond.y <= 561 || hond.y == 256.5 && hond.x == 1127) {
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }}
         if (spel.level == 4) {
if (hond.x == 1252 && hond.y >=53 && hond.y <= 800 || hond.y == 54 && hond.x >= 1 && hond.x <= 253 || hond.x == 627 && hond.y >= 53 && hond.y <= 257 || hond.y == 54 && hond.x == 877 || hond.y == 54 && hond.x == 1127 || hond.y == 357.75 && hond.x == 1002 || hond.x == 2 && hond.y >= 357.74 && hond.y <= 460 || hond.x == 502 && hond.y >= 560.24 && hond.y <= 763 || hond.x == 752 && hond.y >= 560.24 && hond.y <= 763 || hond.y == 661.5 && hond.x == 1002 || hond.y == 762.75 && hond.x >= 1 && hond.x <= 253){
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }}
         if (spel.level == 5) {
if (hond.x == 2 && hond.y >= 155 && hond.y <= 762.76 || hond.x == 252 && hond.y >= 53 && hond.y <= 561 || hond.x == 502 && hond.y >= 53 && hond.y <= 256.6 || hond.x == 627 && hond.y == 560.25 || hond.x == 752 && hond.y >= 53 && hond.y <= 256.6 || hond.x == 877 && hond.y == 762.75 || hond.x == 1002 && hond.y == 54 || hond.y == 762.75 && hond.x >= 1001 && hond.x <= 1128 || hond.x == 1127 && hond.y == 661.5 || hond.y == 560.25 && hond.x >= 1126 && hond.x <= 1378 || hond.x == 1377 && hond.y == 459 || hond.x == 1377 && hond.y == 155.25){
            hond.y += stapGrootte * 0.81;
            hond.nummer = 5;
          }}
        } ///////////////////////////////////////////////////////////////////////////////////////...
          if (keyCode == RIGHT_ARROW && spel.level == 1 && hond.y == 54 && hond.x == 627 && hond.aantalbotten == 3) {
            hond.nummer = 10;
            hond.x += stapGrootte;
          }
          if (keyCode == UP_ARROW && spel.level == 1 && hond.y == 155.25 && hond.x == 752 && hond.aantalbotten == 3) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          /////////////
          if (keyCode == RIGHT_ARROW && spel.level == 2 && hond.y == 661.5 && hond.x == 1002 && hond.aantalbotten == 3) {
            hond.nummer = 10;
            hond.x += stapGrootte;
          }
          if (keyCode == UP_ARROW && spel.level == 2 && hond.y == 762.75 && hond.x == 1127 && hond.aantalbotten == 3) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          if (keyCode == LEFT_ARROW && spel.level == 2 && hond.y == 661.5 && hond.x == 1252 && hond.aantalbotten == 3) {
            hond.nummer = 0;
            hond.x -= stapGrootte;
          }
          if (keyCode == UP_ARROW && spel.level == 2 && hond.x == 127 && hond.y >= 660 && hond.y <= 765 && spel.ingedrukt == true) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          if (keyCode == DOWN_ARROW && spel.level == 2 && hond.x == 127 && hond.y >= 560 && hond.y <= 670 && spel.ingedrukt == true) {
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }
          if (keyCode == UP_ARROW && spel.level == 3 && hond.x == 1252 && hond.y >= 356 && hond.y <= 570 && spel.ingedrukt == false) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          if (keyCode == DOWN_ARROW && spel.level == 3 && hond.x == 1252 && hond.y >= 400 && hond.y <= 570 && spel.ingedrukt == false) {
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }
          if (keyCode == UP_ARROW && spel.level == 3 && hond.x == 627 && hond.y >= 600 && hond.y <= 800 && spel.ingedrukt == true) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          if (keyCode == DOWN_ARROW && spel.level == 3 && hond.x == 627 && hond.y >= 560 && hond.y <= 700 && spel.ingedrukt == true) {
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }
          if (keyCode == UP_ARROW && spel.level == 3 && hond.x == 1252 && hond.y == 256.5 && hond.aantalbotten == 3) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          if (keyCode == DOWN_ARROW && spel.level == 4 && hond.x == 252 && hond.y >= 150 && hond.y <= 300 && spel.ingedrukt == true) {
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }
          if (keyCode == UP_ARROW && spel.level == 4 && hond.x == 252 && hond.y >= 200 && hond.y <= 360 && spel.ingedrukt == true) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          if (keyCode == DOWN_ARROW && spel.level == 4 && hond.x == 252 && hond.y >= 550 && hond.y <= 700 && spel.ingedrukt == false) {
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }
          if (keyCode == UP_ARROW && spel.level == 4 && hond.x == 252 && hond.y >= 600 && hond.y <= 800 && spel.ingedrukt == false) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          if (keyCode == UP_ARROW && spel.level == 4 && hond.x == 377 && hond.y == 155.25 && hond.aantalbotten == 3) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          if (keyCode == RIGHT_ARROW && spel.level == 4 && hond.y == 54 && hond.x == 252 && hond.aantalbotten == 3) {
            hond.nummer = 10;
            hond.x += stapGrootte;
          }
          if (keyCode == RIGHT_ARROW && spel.level == 5 && hond.y == 357.75 && hond.x == 1002 && hond.aantalbotten == 3) {
            hond.nummer = 10;
            hond.x += stapGrootte;
          }
          if (keyCode == DOWN_ARROW && spel.level == 5 && hond.x == 877 && hond.y >= 550 && hond.y <= 700 && spel.ingedrukt == true) {
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }
          if (keyCode == UP_ARROW && spel.level == 5 && hond.x == 877 && hond.y >= 600 && hond.y <= 800 && spel.ingedrukt == true) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
          if (keyCode == DOWN_ARROW && spel.level == 5 && hond.x == 1377 && hond.y >= 650 && hond.y <= 800 && spel.ingedrukt == false) {
            hond.nummer = 5;
            hond.y += stapGrootte * 0.81;
          }
          if (keyCode == UP_ARROW && spel.level == 5 && hond.x == 1377 && hond.y >= 750 && hond.y <= 900 && spel.ingedrukt == false) {
            hond.nummer = 15;
            hond.y -= stapGrootte * 0.81;
          }
      }
    }

//       function mousePressed() {
// if (spel.actief) {
//   spel.levelGehaald = true;
// }
// if (spel.level>=spel.maxLevel) {
//   spel.afgelopen = true;
//   spel.gewonnen = true;
//   spel.actief = false;
// }  
// }
 
function keyTyped() {
  if ((!spel.actief && !spel.levelGehaald) && keyCode == 32) {
    // begin spel
    spel.actief = true;
  }
  if ((spel.levelGehaald && !spel.afgelopen) && keyCode == 32) {
    // level gehaald tijdens het spel
    spel.nieuwLevel();
    if (spel.level == 1) {
      timer2.stelIn(30);
    }
    if (spel.level == 2) {
      timer2.stelIn(40);
    }
    if (spel.level == 3) {
      timer2.stelIn(55);
    }
    if (spel.level == 4) {
      timer2.stelIn(80);
    }
    if (spel.level == 5) {
      timer2.stelIn(100);
    }
  }
  if ((spel.afgelopen) && keyCode == ENTER) {
    // einde spel
    spel.nieuwSpel();
    timer2.stelIn(30);
  }
  if (keyCode == 32) {
    timer2.reageer(); 
    
    if (achtergrondmuziek.isPlaying()) {
      achtergrondmuziek.stop(); 
    } if (timer2.pauze == false) {
      achtergrondmuziek.loop();
      
    }
  }
}