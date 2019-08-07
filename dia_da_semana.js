var dia = prompt("Insira um número de 1 até 7 para o dia da semana", 0)
dia = parseInt(dia)

while(dia < 0 || dia > 7){
  alert("Dia inexistente, se atenha á regra")
  dia = prompt("insira um número novamente", 0)
  dia = parseInt(dia)
}

if(dia == 1){
  console.log("Domingo")
}

if(dia == 2){
  console.log("Segunda")
}

if(dia == 3){
  console.log("Terça")
}

if(dia == 4){
  console.log("Quarta")
}

if(dia == 5){
  console.log("Quinta")
}

if(dia == 6){
  console.log("Sexta")
}

if(dia == 7){
  console.log("Sábado")
}
