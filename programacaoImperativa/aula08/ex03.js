// Aula 08 - 24.08.2021
// Condicional If - Else If - Else

// Rotina - Calcular Média

var n1 = 0;
var n2 = 0;
var n3 = 7;
var n4 = 7;

var media = (n1 + n2 + n3 + n4) / 4;

if (media >= 7) {
    console.log("Sua média foi .....: " + media + ". Situação...: APROVADO");
} else if (media >= 4 && media < 7) {
    console.log("Sua média foi .....: " + media + ". Situação...: RECUPERAÇÃO");
} else {
    console.log("Sua média foi .....: " + media + ". Situação...: REPROVADO");
}