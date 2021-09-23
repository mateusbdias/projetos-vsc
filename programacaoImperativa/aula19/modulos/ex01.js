// Aula 19 - Minha primeira aplicação - 23.09.2021
// Mesa de Trabalho
// Mesa 3 - Alexandre Pedro, Gabriela Schneider, Guiovany da Luz, Mateus Benites Dias, Vanessa Matos

// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
let alturas = [1.85, 1.56, 1.9, 1.73, 2.05, 1.48, 1.65, 1.87, 1.6, 1.55];
let sexos = ["M", "M", "F", "F", "M", "F", "F", "M", "M", "F"];
let numeroF = 0;
let numeroM = 0;
let soma = 0;

// ● a maior e a menor altura do grupo;
let menorAltura = Array.min = (array) => {
    let altura = Math.min.apply(Math, array);
    return altura;
}

let maiorAltura = Array.max = (array) => {
    let altura = Math.max.apply(Math, array);
    return altura;
}

// ● a média de altura das mulheres;
sexos.forEach((sexo, i) => {
    resultado = sexo.concat(" - ", alturas[i]);
    if (sexo == "F") {
        soma += alturas[i];
        numeroF++;
    }
});
let mediaAlturaMulheres = (soma / numeroF).toFixed(2);

// ● o número de homens.
sexos.forEach(
    function (sexo) {
        if (sexo == "M") {
            numeroM++;
        }
    }
);
let numeroHomens = numeroM;

module.exports = { menorAltura, maiorAltura, mediaAlturaMulheres, numeroHomens };