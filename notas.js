var nota = prompt("insira uma nota", 0)
nota = parseInt(nota)
while(nota < 0 || nota > 10){
  console.log("Sua nota é invalida, insira novamente")
  nota = prompt("insira uma nota novamente", 0)
  nota = parseInt(nota)
}
if (nota >= 0 && nota <= 3){
  console.log("Continue tentando...")
}
else if (nota >= 4 && nota <= 6){
  console.log("Tá quase lá!")
}
else if (nota >= 7 && nota <= 10){
  console.log("Parabéns!")
  alert("Parabéns!")
}
