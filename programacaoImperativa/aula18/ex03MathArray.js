// Aula 18 - Métodos de Arrays - 21.09.2021
// Math.min() e Math.max() em arrays

Array.min = function(array){
    return Math.min.apply(Math, array);
}

Array.max = function(array){
    return Math.max.apply(Math, array);
}

let numeros = [112, 32, 10, 41, 67, 5];
console.log(Array.min(numeros));
console.log(Array.max(numeros));