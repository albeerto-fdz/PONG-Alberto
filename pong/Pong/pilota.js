class pilota {
    constructor(x, y, tamany, velX, velY, colorP) {
      this.x = x;
      this.y = y;
      this.tamany = tamany;
      this.velX = velX;
      this.velY = velY;
      this.color = colorP
    }
    dibuixa() {
      fill(`${this.color}`);
      circle(this.x, this.y, this.tamany);
    }
    moviment() {
      this.x += this.velX;
      this.y += this.velY;
      if (this.x < 0) { 
        marcador2.p += 1;
        this.x = width/2
        this.y = height/2
        this.velX = 2;
        this.velY = 0;
        jugador1.y = height/2 - hei_jugadors.value/2;
        jugador2.y = height/2 - hei_jugadors.value/2;
      }
      if (this.x > width) {
        marcador1.p += 1;
        this.x = width/2
        this.y = height/2
        this.velX = 2;
        this.velY = 0;
        jugador1.y = height/2 - hei_jugadors.value/2;
        jugador2.y = height/2 - hei_jugadors.value/2;
      }
      
      if (this.y - this.tamany / 2 < 0) {
        this.velY *= -1;
      }
      if (this.y + this.tamany / 2 > height) {
        this.velY *= -1;
      }
      
      if (this.x - this.tamany / 2 < jugador1.x + jugador1.wid) {
        if (this.y - this.tamany / 2 < jugador1.y + jugador1.hei) {
          if (this.y + this.tamany/2 > jugador1.y) {
            this.velY = random(-4, 4);
            this.velX *= -1;
            this.velX = 8;
          }
        }
      }
      if (this.x + this.tamany / 2 > jugador2.x) {
        if (this.y - this.tamany / 2 < jugador2.y + jugador2.hei) {
          if (this.y + this.tamany / 2 > jugador2.y) {
            this.velY = random(-4, 4);
            
            this.velX *= -1; 
            this.velX = -8
          }
        }
      }
    }
  }