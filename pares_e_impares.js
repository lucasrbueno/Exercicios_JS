var par = 0
var impar = 0

for (i = 0 ; i < 10 ; i++){
  var inteiros = prompt("Insira seus números")
  inteiros = parseInt(inteiros)
  if(inteiros % 2 == 0){
    par++
  }
  else{
    impar++
  }
}
console.log("Números pares", par)
console.log("Números impares", impar)
