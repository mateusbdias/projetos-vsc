// Aula 14 - Módulos - 13.09.2021
// Exercício 01 - Utilizando o módulo criado em ./modulos/ex01modulo.js

let cumprimento = require("./modulos/ex01modulo"); // Importando módulo
cumprimento = cumprimento + " Roberta!";
console.log(cumprimento);