// Aula 19 - Minha primeira aplicação - 23.09.2021
// Mesa de Trabalho
// Mesa 3 - Alexandre Pedro, Gabriela Schneider, Guiovany da Luz, Mateus Benites Dias, Vanessa Matos

// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular - 1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
let idades = [18, 39, 43, 27, 53, 61, 70, 33, 40, 58, 22, 19, 55, 42, 78];
let opinioes = ['2', '3', '1', '3', '3', '2', '1', '1', '2', '3', '2', '1', '3', '2', '2'];
let soma = 0;
let numOtimo = 0;
let numBom = 0;
let numRegular = 0;

// ● a média das idades das pessoas que responderam ótimo;
opinioes.forEach((opiniao, i) => {
    if (opiniao == 3) {
        soma += idades[i];
        numOtimo++;
    }
})
let mediaIdades = soma / numOtimo;

// ● a quantidade de pessoas que responderam regular;
opinioes.forEach(
    function(opiniao){
        if (opiniao == 1){
            numRegular++;
        }
    }
);

// ● a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
opinioes.forEach(
    function(opiniao){
        if (opiniao == 2){
            numBom++;
        }
    }
);
let pctBom = numBom / opinioes.length;

module.exports = { mediaIdades, numRegular, pctBom};