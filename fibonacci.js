var n = prompt("Dê seu número")
n = parseInt(n)
var fn = 1
var f_ant = 1

for (i = 2; i <= n ; i++){
  var f_prox = fn + f_ant
  f_ant = fn 
  fn = f_prox
  console.log(f_prox, fn, f_ant)
}

