function Aluno(numero, nota){
  this.numero = numero;
  this.nota = parseInt(Math.random()*100);
  this.conceito = (this.nota >= 70) ? "APROVADO": "REPROVADO"
};

var contadorA = 0

for (i = 1 ; i <= 20 ; i++){
var posicao = new Aluno(i.toString());
console.log(posicao)
if(posicao.conceito == "APROVADO")
{contadorA++}
}

console.log("aprovados", contadorA)
console.log("reprovados", 20 - contadorA)
