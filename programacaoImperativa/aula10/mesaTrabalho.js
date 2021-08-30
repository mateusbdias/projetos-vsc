// Mesa de Trabalho 1
// Aula 10 - 30-08-2021
// Integrantes: Alexandre Pedro, Phillipe Borges, Wesley Bueno, Mateus Benites Dias

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
// Exercício 1 - NÃO FOI POSSÍVEL ADEQUAR A QUALQUER ARRAY - CONTEÚDO PENDENTE
function imprimirInverso(array){
    console.log(array.pop());
    console.log(array.pop());
    console.log(array.pop());
}

imprimirInverso([12, 23, 34]);

// Exercício 2 - NÃO FOI POSSÍVEL ADEQUAR A QUALQUER ARRAY - CONTEÚDO PENDENTE
function inverter(array){
    let novoArray = [];
    novoArray.push(array.pop());
    novoArray.push(array.pop());
    novoArray.push(array.pop());
    console.log(novoArray);
}

inverter([1, 2, 3]);

// PARTE 3 - somarArray() - NÃO FOI POSSÍVEL ADEQUAR A QUALQUER ARRAY - CONTEÚDO PENDENTE
let soma = 0;
function somarArray(array){
    soma = soma + array[0];
    soma = soma + array[1];
    soma = soma + array[2];
    console.log(soma);
}

somarArray([2, 3, 5]);

// PARTE 4 - Simulação Array.join() - NÃO FOI POSSÍVEL ADEQUAR A QUALQUER ARRAY - CONTEÚDO PENDENTE
function join(array){
    console.log(array[0] + array[1] + array[2]);
}

join(["o", "l", "á"]);

// PARTE 5 - Coleções de Filmes (e mais...) - NÃO FOI POSSÍVEL ADEQUAR A QUALQUER ARRAY - CONTEÚDO PENDENTE
// Exercício 1
let filmes = [];
filmes.push("star wars");
filmes.push("matrix");
filmes.push("mr. robot");
filmes.push("o preço do amanhã");
filmes.push("a vida é bela");
console.log(filmes);

// Exercício 2
function maiusculas(array){
    array[0].toUpperCase();
    array[1].toUpperCase();
    array[2].toUpperCase();
    array[3].toUpperCase();
    array[4].toUpperCase();
}

console.log(maiusculas(filmes));

// Exercício 3
let filmesAnimacao = [];
filmesAnimacao.push("toy story");
filmesAnimacao.push("finding Nemo");
filmesAnimacao.push("kung-fu panda");
filmesAnimacao.push("wally");
filmesAnimacao.push("fortnite");
console.log(filmesAnimacao);

function unirArray(array1, array2){
    
}