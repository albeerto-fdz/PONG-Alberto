class marcador {
    constructor(x, y, p, nom){
      this.x = x
      this.y = y
      this.p = p
      this.nom = nom 
    }
    dibuixa(){
      fill(255);
      text(this.p, this.x, this.y + 30);
      text(this.nom, this.x, this.y);
    }
  }