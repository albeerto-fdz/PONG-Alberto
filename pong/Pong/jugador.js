class jugador {
    constructor(x,y,wid,hei,vel, r, g, b, movAdalt, movAbaix, nomjug){
      this.x = x
      this.y = y
      this.wid = wid
      this.hei = hei
      this.vel = vel
      this. color = {
        r: r,
        g: g,
        b: b,
      }
      this.movAdalt = movAdalt
      this.movAbaix = movAbaix
      this.nom = nomjug
    }
    dibuixa(){
      fill(this.color.r, this.color.g, this.color.b);
      rect(this.x, this.y, this.wid, this.hei);
    }
    moviment(){
      if(keyIsDown(this.movAdalt) && this.y > 0){
        this.y -= this.vel;
      }
      if(keyIsDown(this.movAbaix) && this.y < height - this.hei){
        this.y += this.vel;
      }
    }
  }