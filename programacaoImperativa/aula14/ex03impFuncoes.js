// Aula 14 - Módulos - 13.09.2021
// Exercício 03

const calculos = require("./modulos/ex03expFuncoes");

console.log("Resultado da soma = " + calculos.soma(2, 3));

console.log("Resultado da subtração = " + calculos.subtrair(20, 3));
console.log("Resultado da multiplicação = " + calculos.multiplicar(20, 3));
console.log("Resultado da divisão = " + calculos.dividir(20, 3));
console.log("Nome em maiúsculas: " + calculos.maiuscula("silvia"));
console.log("Texto em maiúsculas: " + calculos.maiuscula("aaa"));