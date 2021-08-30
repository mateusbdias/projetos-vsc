// Aula 10 - 30.08.2021
// Exercício 03 - Array
// Shift - método que elimina o primeiro elemento
let cores = ["Azul", "Branco", "Vermelho", "Verde", "Violeta", "Amarelo"];
console.log("Array antes do Shift:");
console.log(cores);
console.log(cores.length);
console.log("====================");

let primeiroElemento = cores.shift();
console.log(primeiroElemento);

console.log("====================");
console.log("Array depois do Shift:")
console.log(cores);
console.log(cores.length);