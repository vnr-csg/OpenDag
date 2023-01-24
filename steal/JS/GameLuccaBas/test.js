function preload() {
  achtergrond = loadImage("images/backgrounds/GameBackground.jpg");
  bal = loadImage("images/sprites/objecten/tennisbal.png");
  boekje = loadImage("images/sprites/objecten/boek.png");
  computertje = loadImage("images/sprites/objecten/computer.png");
  toetsGestolen = loadImage("images/csgmenu.png");
  classroom = loadImage('images/classroom.png');
  gang = loadImage('images/gang.png');
  eindScherm = loadImage('images/eindscherm.png');
  gepaktScherm = loadImage('images/gepaktscherm.png');
  muziek = loadSound("sounds/background/achtergrondmuziek.mp3");
  gepaktEffect = loadSound("sounds/effects/gtaVwasted.mp3");
  winEffect = loadSound("sounds/effects/GTAsa.mp3");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight );
  canvas.parent('processing');
  frameRate(60);
  computer = new Computer();

  schadenberg = new Schadenberg();
  for (var c = 0;c < 3;c ++) {
    frameSchadenberg = loadImage("images/sprites/Schadenberg/Schadenberg_" + c + ".png");
    schadenberg.animatie.push(frameSchadenberg);
  }

  vveen = new Vveen();
  for (var d = 0;d < 3;d ++) {
    frameVveen = loadImage("images/sprites/VanderVeen/vanderveen_" + d + ".png");
    vveen.animatie.push(frameVveen);
  }

  kloosterman = new Kloosterman();
  for (var e = 0;e < 3;e ++) {
    frameKloosterman = loadImage("images/sprites/Kloosterman/Kloosterman_" + e + ".png");
    kloosterman.animatie.push(frameKloosterman);
  }

  johan = new Johan();
  for (var f = 0;f < 5;f ++) {
    frameJohan = loadImage("images/sprites/Johan/Johan_" + f + ".png");
    johan.animatie.push(frameJohan);
  }

  spel = new Stealthetest();
  spel.nieuw();

  muziek.setVolume(0.1);
  

}

function draw() { 
  spel.update();
  spel.teken();
}

function keyPressed() {
  if (!muziek.isPlaying()){
    muziek.loop();
  }
  if(!fullscreen()) {
    fullscreen(true);
  }
}


