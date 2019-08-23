var tel = prompt("Telefonou para a vítima?")
var local = prompt("Esteve no local do crime?")
var mora = prompt("Mora perto da vítima?")
var devia = prompt("Devia para a vítima?")
var trab = prompt("Já trabalhou com a vítima?")

i = 0

if (tel == "s"){
i += 1
}

if (local == "s"){
i += 1
}

if (mora == "s"){
i += 1
}

if (devia == "s"){
i += 1
}

if (trab == "s"){
i += 1
}

if (i == 2){
  console.log("Suspeita")
}

else if (i == 3 || i == 4){
  console.log("Cúmplice")
}

else if (i == 5){
  console.log("Assassino")
}

else{
  console.log("Inocente")
}
