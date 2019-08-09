var n = prompt("Insira seu número primo")
n = parseInt(n)
 var p = 0

for (i = 2 ; i < n; i++){
 if (n % i == 0){
   console.log(n + " é divisível por " + i + " por isso não é primo")
   p++
 }
}
if (p == 0){
    console.log(n + " é primo")
  }
