// Mesa de Trabalho 1
// Aula 10 - 30.08.2021
// Mateus Benites Dias

// PARTE 1
// Exercício 1
let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);
// Retorna undefined

// Exercício 2
let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[1][0]);
// Retorna Spiderman

// Exercício 3
let str = "una string qualquer";
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);
// Retorna "una string qualquer"

// PARTE 2 - Array Invertido
// Exercício 1
function imprimirInverso(array){
    for (i = 1; i <= array.length; i++){
        console.log(array[array.length - i]);
    }
}

imprimirInverso([12, 23, 34, 45]);

// Exercício 2 - NÃO FOI POSSÍVEL ADEQUAR A QUALQUER ARRAY - CONTEÚDO PENDENTE
let novoArray = [];
function inverter(array){
    for (i = 1; i <= array.length; i++){
        novoArray.push(array[array.length - i]);
    }
    console.log(novoArray);
}

inverter([1, 2, 3]);

// PARTE 3 - somarArray() - NÃO FOI POSSÍVEL ADEQUAR A QUALQUER ARRAY - CONTEÚDO PENDENTE
let soma = 0;
function somarArray(array){
    for (i = 0; i < array.length; i++){
        soma = soma + array[i]
    }
    console.log(soma);
}

somarArray([2, 3, 5]);

// PARTE 4 - Simulação Array.join() - NÃO FOI POSSÍVEL ADEQUAR A QUALQUER ARRAY - CONTEÚDO PENDENTE
let texto = "";
function join(array){
    for(i = 0; i < array.length; i++){
        texto = texto + array[i];
    }
    console.log(texto);
}

join(["o", "l", "á"]);

// PARTE 5 - Coleções de Filmes (e mais...) - NÃO FOI POSSÍVEL ADEQUAR A QUALQUER ARRAY - CONTEÚDO PENDENTE
// Exercício 1
let filmes = [];
filmes.push("star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela");
console.log(filmes);

// Exercício 2
let filmesCaps = [];
function maiusculas(array){
    for(i = 0; i < array.length; i++){
        filmesCaps.push(array[i].toUpperCase());
    }
    console.log(filmesCaps);
}

maiusculas(filmes);

// Exercício 3
let filmesAnimacao = [];
filmesAnimacao.push("toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite");
console.log(filmesAnimacao);

function unirArray(array1, array2){
    for(i = 0; i < array2.length; i++){
        array1.push(array2[i]);
    }
    console.log(array1);
}

unirArray(filmes, filmesAnimacao);

// Exercício 4
let filmesAnimacao = [];
let ultimoElemento = [];
filmesAnimacao.push("toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite");
console.log(filmesAnimacao);

function unirArray(array1, array2){
    ultimoElemento.push(array2.pop());
    for(i = 0; i < array2.length; i++){
        array1.push(array2[i]);
    }
    console.log(array1);
}

unirArray(filmes, filmesAnimacao);

// Exercício 5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function comparaNotas(notas1, notas2){
    for(i = 0; i < notas1.length; i++){
        if(notas1[i] == notas2[i]){
            console.log(i + ". As notas são iguais");
        } else {
            console.log(i + ". As notas são diferentes");
        }
    }
}

comparaNotas(asiaScores, euroScores);