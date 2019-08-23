var array = []

for (i = 0; i < 1000 ; i++){
let novoNumero = parseInt(Math.random()*5000)
if (!array.includes(novoNumero)){
  array.push(novoNumero)
}
}
array.sort(function(a,b) {return a - b})
console.log(array)
