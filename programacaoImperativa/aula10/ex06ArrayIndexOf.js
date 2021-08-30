// Aula 10 - 30.08.2021
// Exercício 06 - Array
// IndexOf - método que pesquisa um item e retorna a posição no array
let cores = ["Azul", "Branco", "Vermelho", "Verde"];
console.log(cores.indexOf("Amarelo")); // Item que não existe no array - retorna -1
console.log(cores.indexOf("Azul")); // Item que existe - retorna sua posição no array
console.log(cores.indexOf("Verde"));
console.log(cores.indexOf("verde")); // Case sensitive - retorna -1