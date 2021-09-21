// Aula 18 - Métodos de Arrays - 21.09.2021
// Mesa de Trabalho
// Mesa 8 - Diego Decrescenzo, Guiovany da Luz, Jehan Lucas Vieira, Mateus Benites Dias, Thyano Correia

// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
let alturas = [1.85, 1.56, 1.9, 1.73, 2.05, 1.48, 1.65, 1.87, 1.6, 1.55];
let sexos = ["M", "M", "F", "F", "M", "F", "F", "M", "M", "F"];
let resultado = [];
let numeroF = 0;
let numeroM = 0;
let soma = 0;
let media = 0;

// ● a maior e a menor altura do grupo;
Array.min = (array) => Math.min.apply(Math, array);
Array.max = (array) => Math.max.apply(Math, array);

console.log("Menor altura: ", Array.min(alturas));
console.log("Maior altura: ", Array.max(alturas));

// ● a média de altura das mulheres;
sexos.forEach((sexo, i) =>{
    resultado = sexo.concat(" - ", alturas[i]);
    if(sexo == "F"){
        soma += alturas[i];
        numeroF++;
    }
    media = soma / numeroF;
});
console.log("Média de altura das mulheres: ", media.toFixed(2));

// ● o número de homens.
sexos.forEach(
    function(sexo){
        if (sexo == "M"){
            numeroM++;
        }
    }
);

console.log("Número de homens: ", numeroM);

// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular - 1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
let idades = [18, 39, 43, 27, 53, 61, 70, 33, 40, 58, 22, 19, 55, 42, 78];
let opinioes = ['2', '3', '1', '3', '3', '2', '1', '1', '2', '3', '2', '1', '3', '2', '2'];
let resultadoIdades = [];
let somaIdades = 0;
let mediaIdades = 0;
let numOtimo = 0;
let numBom = 0;
let numRegular = 0;
let pctBom = 0;

// ● a média das idades das pessoas que responderam ótimo;
opinioes.forEach((opiniao, i) => {
    resultadoIdades = opiniao.concat(" - ", idades[i]);
    if (opiniao == 3) {
        somaIdades += idades[i];
        numOtimo++;
    }
    mediaIdades = somaIdades / numOtimo;
})

console.log("Média de idade de quem respondeu ótimo: ", mediaIdades);

// ● a quantidade de pessoas que responderam regular;
opinioes.forEach(
    function(opiniao){
        if (opiniao == 1){
            numRegular++;
        }
    }
);

console.log("Número de pessoas que responderam regular: ", numRegular);

// ● a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
opinioes.forEach(
    function(opiniao){
        if (opiniao == 2){
            numBom++;
        }
        pctBom = numBom / opinioes.length;
    }
);

console.log("Porcentagem de pessoas que responderam bom: ", pctBom);