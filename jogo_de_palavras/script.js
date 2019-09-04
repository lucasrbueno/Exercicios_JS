function shuffle(array){
  array.sort(() => Math.random() - 0.5)
}

var escolhida = ""
function start(){
  let palavras = ["me","dá","um","emprego","por favor"]
  shuffle(palavras)
  escolhida = palavras[0]
  embaralhada = escolhida.split("")
  shuffle(embaralhada)
  document.getElementById("jogo").innerHTML = embaralhada.join("")
}

function jogo(){
  let jog = document.getElementById("jog").value
  if (jog === escolhida){
  document.getElementById("JOGATINA").innerHTML = "CORRETO"
}
else{
  document.getElementById("JOGATINA").innerHTML = "ERRADO"
}
}
