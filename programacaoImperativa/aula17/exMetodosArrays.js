// Aula 17 - Arrays Avançados - 20.09.2021
// Exercício

// 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let pares = [2, 4, 6, 8, 10];
let impares = pares.map(function(num){
    return num - 1;
});
console.log(impares);

// 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
let nomes = ["Maria", "José", "Jesus", "João", "Maria"];
let marias = nomes.filter(function(nome){
    return nome == "Maria";
});

console.log(marias);

// 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
let numeros = [3, 5, 9, 2, 7];
let stringNumeros = numeros.reduce(function(acumulador, numero){
    return acumulador + " – " + numero;
});
console.log(stringNumeros);

// 4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
let animais = ["Cachorro", "Gato", "Papagaio", "Hamster", "Peixe"];
let nomesAnimais = animais.forEach(function(animal){
    console.log(animal);
});