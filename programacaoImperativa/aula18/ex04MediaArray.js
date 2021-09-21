// Aula 18 - Métodos de Arrays - 21.09.2021
// Média - Array

let notas = [7.5, 8.1, 9.3, 9.7];
let soma = 0;
let media = 0;

for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}
media = soma / notas.length;
console.log("Soma: " + soma.toFixed(2));
console.log("Média: " + media.toFixed(2));