var paisA = 80000
var paisB = 200000
var ano = 0

while (paisA < paisB){
ano++
  paisA = paisA + (paisA * 0.03)
  paisB = paisB + (paisB * 0.015)
}

console.log("Irá demorar", ano, "anos")
