var potje = 0;
var accuracy = 0;

function preload() {

  bossRaak = loadSound('sounds/HitBossSound.mp3');
  spelerRaak = loadSound('sounds/HitPlayerSound.mp3');
  healBoxraak = loadSound('sounds/HealthBoxSound.mp3');
  blip = loadSound('sounds/Blip.mp3');
  pew = loadSound('sounds/shot.mp3');

  level1 = loadSound("sounds/Katyusha.mp3");
  level2 = loadSound("sounds/HuTao.mp3");
  level3 = loadSound("sounds/Remelia.mp3"); 

  MagicOrb = loadImage("images/Magic Orb.png"); 
  boss1 = loadImage("images/Tanya.png");
  boss2 = loadImage("images/HuTao.png");
  boss3 = loadImage("images/Remilia.png");
  healBox = loadImage("images/Heal box.png");
  bullet = loadImage("images/Magic Kogel.png");
  kogel = loadImage("images/KogelOrb.png");
  fire = loadImage("images/Fire.png");
  ufo = loadImage('images/ufo.png'); 

  start = loadImage("images/Start.png");
  gameover = loadImage("images/GAMEOVER.png");
  scherm = loadImage("images/Scherm.png");
  nextLevel = loadImage("images/Win.png");
  win = loadImage("images/Win2.png");
  level1Scherm = loadImage("images/War.png");
  level2Scherm = loadImage("images/Ghost.png");
  level3Scherm = loadImage("images/Spiral.gif");
}


function setup() {
  canvas = createCanvas(displayWidth, displayHeight-4);
  frameRate(60);

  spel = new Bullethell();
  spel.nieuwSpel();
  potje++;
}

function draw() {
  spel.teken();
  spel.update();
  spel.muziek();
}

function mousePressed() {
  fullscreen(true);
}

function keyTyped() {
  if (key == 's') {

    if (!spel.actief) {
      blip.play();
      spel.actief = true;
                      }

    else {
      if (spel.afgelopen && spel.levelGehaald) {
        if (potje==1 && spel.gewonnen) {
          accuracy = spel.accurate;
                                      }
        else {
          if (spel.gewonnen && spel.accurate > accuracy) {
            accuracy = spel.accurate;
                                                        }
            }

        if (!spel.gewonnen) {
          spel.nieuwSpel();
                            } 
        else {
          setup();
              }
                                              }
      else {
        if (spel.verloren) {
          spel.nieuwSpel();
                            }
          }
      }
                }

}