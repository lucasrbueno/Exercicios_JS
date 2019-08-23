var array = []

for (i = 0; i < 1000 ; i++){
array.push(parseInt(Math.random()*5000))
}
array.sort(function(a,b) {return a - b})
console.log(array)
