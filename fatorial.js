var n = prompt("Insira seu fatorial")
n = parseInt(n)
var fatorial = 1

for (i = n ; i >= 1; i--){
  fatorial = fatorial * i
  console.log("Com a multiplicação descrescente dá " + i + " dá resultado de " + fatorial)
}
