class Triangulo {
  constructor(ladoUm, ladoDois, ladoTres){
    this.ladoUm = ladoUm
    this.ladoDois = ladoDois
    this.ladoTres = ladoTres
  }

calculaTipo() {
  if (this.ladoUm == this.ladoDois && this.ladoUm == this.ladoTres){
   return ("Equilatero") 
  }
  else if ((this.ladoUm == this.ladoDois && this.ladoUm != this.ladoTres) || (this.ladoDois == this.ladoTres && this.ladoUm != this.ladoDois) || (this.ladoUm == this.ladoTres && this.ladoUm != this.ladoDois)){
    return ("Isósceles")
  }
  else if (this.ladoUm != this.ladoDois && this.ladoUm != this.ladoTres){
    return ("Escaleno")
  }
}
}

tri = new Triangulo(3,10,3)
console.log(tri.calculaTipo())
