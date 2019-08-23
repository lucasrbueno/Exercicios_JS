function calcula() {
  var fatorial = 1
  for (i = 1; i <= 53; i++) {
    fatorial = fatorial * i
  }
  console.log("53! = " + fatorial)
}

function seuMetodo() {
  var start = new Date();
  calcula()
  var tempo = new Date() - start;
  return 'tempo: ' + tempo;
}

console.log(seuMetodo());
