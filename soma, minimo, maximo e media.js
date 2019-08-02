var VetorDeNum = [10,5,6,9,8]
var soma = 0
var min_num = VetorDeNum[0]
var max_num = VetorDeNum[0]

for (i = 0 ; i < VetorDeNum.length ; i++){
soma = soma + VetorDeNum[i]
if (VetorDeNum[i] < min_num){
  min_num = VetorDeNum[i]
}
if (VetorDeNum[i] > max_num){
  max_num = VetorDeNum[i]
}
}
var media = soma/VetorDeNum.length

console.log("A soma de números é", soma)
console.log("O menor número é", min_num)
console.log("O maior número é", max_num)
console.log("A média de números é", media)
