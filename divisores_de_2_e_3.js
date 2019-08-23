var x = 0

for (i = 1 ; i < 1000000 ; i++){
  if(i % 3 == 0 && i % 2 == 0){
    x++
  }
}
console.log(x)
