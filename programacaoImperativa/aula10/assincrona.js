// Aula 10 - Assíncrona
// Exercício "Lista de Compras"
/* Crie um array que contenha nomes de produtos para compra.
Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são:
Join, Pop, Push, Shift e Unshift.
Também se deve escrever com suas palavras, o que cada função realiza.
Seguem abaixo alguns exemplos.
console.log(“O método Join realiza tal coisa”)
console.log(RESULTADO_DO_JOIN) */

let listaDeCompras = ["Leite", "Ovos", "Farinha", "Queijo", "Pão"];

console.log("O método Join une os elementos de um array, utilizando o separador informado como parâmetro:");
console.log(listaDeCompras.join(" - "));

console.log("O método Pop elimina o último elemento de um array e o retorna:");
let ultimoElemento = listaDeCompras.pop();
console.log(ultimoElemento);
console.log(listaDeCompras);

console.log("O método Push acrescenta um ou mais elementos ao final de um array, retornando o seu novo comprimento:");
console.log(listaDeCompras.push("Carne", "Laranjas"));
console.log(listaDeCompras);

console.log("O método Shift elimina o primeiro elemento de um array e o retorna:");
let primeiroElemento = listaDeCompras.shift();
console.log(primeiroElemento);
console.log(listaDeCompras);

console.log("O método Unshift acrescenta um ou mais elementos ao início de um array, retornando o seu novo comprimento:");
console.log(listaDeCompras.unshift("Presunto", "Alface"));
console.log(listaDeCompras);