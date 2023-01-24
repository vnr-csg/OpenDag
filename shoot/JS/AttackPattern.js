class AttackPattern{
  downWeGo(a,b,c){ 
    if(frameCount % c == 0) {   
      spel.vijand.kogelsVijand.push(new KogelVijand(spel.vijand.x,spel.vijand.y,a,b));
      spel.vijand.vijandGeschoten++;   
                            }
                  }

  rainOfBooksY(a,b){  
    if(frameCount % 25 == 0){
      for (var n = 0;n<7; n++) {
        spel.vijand.kogelsVijand.push(new KogelVijand(width/9*(n+0.5),10,a,b));
        spel.vijand.vijandGeschoten++;  
                                }
                            }

    if(frameCount % 20 == 0){
      for (var n = 1;n<=7; n++) {
        spel.vijand.kogelsVijand.push(new KogelVijand(width/9*n,10,a,b));
        spel.vijand.vijandGeschoten++;
                                }
                            }
                    }

  rainOfBooksX(a,b) { 
    if(frameCount % 30 == 0){
      for (var n = 0;n<8; n++) {
        if (n == 1 || n==3 || n==5 || n == 7) {
          spel.vijand.kogelsVijand.push(new KogelVijand(10,height/8*n,a,b));
          spel.vijand.vijandGeschoten++;
                                            }
                                }
                            }

    if(frameCount % 40 == 0){   
      for (var n = 0;n<7; n++) {
        if (n == 2 || n == 4 || n == 6) {
          spel.vijand.kogelsVijand.push(new KogelVijand(10,height/8*n,a,b));
          spel.vijand.vijandGeschoten++;
                                  }
                                }
                            }
                    }

  rainOfBooksXY(a,b){ 
    if(frameCount % 60 == 0){   
      for (var n = 0;n<10; n++) {
        spel.vijand.kogelsVijand.push(new KogelVijand(n*175,10,a,b));
        spel.vijand.vijandGeschoten++;
                                } 
                            }
                     }

  weGoHorizontal(a,b,c,d){ 
    if(frameCount % c == 0){
      for (var n = 0;n<d; n++) {
          spel.vijand.kogelsVijand.push(new KogelVijand(10,height/d*n,a,b));
          spel.vijand.vijandGeschoten++;
                                }
                            }
                        }

  weGoVertical(a,b,c,d){ 
    if(frameCount % c == 0){
      for (var n = 0;n<d; n++) {
        spel.vijand.kogelsVijand.push(new KogelVijand(width/d*n,10,a,b));
        spel.vijand.vijandGeschoten++;

                                }
                            }
                      }
}