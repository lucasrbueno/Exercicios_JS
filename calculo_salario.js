var ValorDaHora = prompt("Insira o valor da sua hora:")
var HorasTrabalhadas = prompt ("Insira a quantidade de horas trabalhadas no mês")
var INSS = 0.1
var FGTS = 0.08
ValorDaHora = parseInt(ValorDaHora)
HorasTrabalhadas = parseInt(HorasTrabalhadas)

var Salario = ValorDaHora * HorasTrabalhadas
console.log("O salário bruto é", Salario)

if (Salario <= 900){
  console.log("Isento de Imposto de Renda")
}

if (Salario > 900 && Salario <= 1500){
  IR = 0.05
  SalarioDescontado = Math.round(Salario * (IR + INSS))
  SalarioLiquido = Salario - SalarioDescontado
  console.log("Há desconto de 5% do Imposto de Renda, resultando em", Salario * IR)
  console.log("O valor do desconto do INSS é", Salario * INSS)
  console.log("O FGTS depositado é de", Salario * FGTS)
  console.log("A quantidade de gasto pelos descontos é de", SalarioDescontado)
  console.log ("O salário líquido é de", SalarioLiquido)
}

if (Salario > 1500 && Salario <= 2500){
   IR = 0.1
  SalarioDescontado = Math.round(Salario * (IR + INSS))
  SalarioLiquido = Salario - SalarioDescontado
  console.log("Há desconto de 10% do Imposto de Renda, resultando em", Salario * IR)
  console.log("O valor do desconto do INSS é", Salario * INSS)
  console.log("O FGTS depositado é de", Salario * FGTS)
  console.log("A quantidade de gasto pelos descontos é de", SalarioDescontado)
  console.log ("O salário líquido é de", SalarioLiquido)
}

if (Salario > 2500){
  IR = 0.2
  SalarioDescontado = Math.round(Salario * (IR + INSS))
  SalarioLiquido = Salario - SalarioDescontado
  console.log("Há desconto de 20% do Imposto de Renda, resultando em", Salario * IR)
  console.log("O valor do desconto do INSS é", Salario * INSS)
  console.log("O FGTS depositado é de", Salario * FGTS)
  console.log("A quantidade de gasto pelos descontos é de", SalarioDescontado)
  console.log ("O salário líquido é de", SalarioLiquido)
}
