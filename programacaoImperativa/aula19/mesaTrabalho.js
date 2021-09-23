// Aula 19 - Minha primeira aplicação - 23.09.2021
// Mesa de Trabalho
// Mesa 3 - Alexandre Pedro, Gabriela Schneider, Guiovany da Luz, Mateus Benites Dias, Vanessa Matos

// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
let funcoesAlturas = require("./modulos/ex01");
let alturas = [1.85, 1.56, 1.9, 1.73, 2.05, 1.48, 1.65, 1.87, 1.6, 1.55];

// ● a maior e a menor altura do grupo;
console.log("Menor altura: ", funcoesAlturas.menorAltura(alturas));
console.log("Maior altura: ", funcoesAlturas.maiorAltura(alturas));

// // ● a média de altura das mulheres;
console.log("Média de altura das mulheres: ", funcoesAlturas.mediaAlturaMulheres);

// // ● o número de homens.
console.log("Número de homens: ", funcoesAlturas.numeroHomens);

// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular - 1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
let funcoesIdades = require("./modulos/ex02");

// ● a média das idades das pessoas que responderam ótimo;
console.log("Média de idade de quem respondeu ótimo: ", funcoesIdades.mediaIdades);

// ● a quantidade de pessoas que responderam regular;
console.log("Número de pessoas que responderam regular: ", funcoesIdades.numRegular);

// ● a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
console.log("Porcentagem de pessoas que responderam bom: ", funcoesIdades.pctBom);