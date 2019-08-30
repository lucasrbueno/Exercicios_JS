function maior_menor() {
  console.log("tp3")
  let n1 = parseInt(document.getElementById("numero1").value)
  let n2 = parseInt(document.getElementById("numero2").value)
  if (n1 < n2){
    let soma = 0
    for (i = n1; i < n2;i++){
      if(i % 6 == 0){
        soma++
        console.log(i)
      }
    }
    document.getElementById("demo").innerHTML = `Existe(m) ${soma} numeros`
  }
  else{
document.getElementById("demo").innerHTML = `O número ${n1} é maior que o segundo`
  }
}
