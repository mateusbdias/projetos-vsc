// Aula 11 - Assíncrona
// Exercícios While

// Exercício 1
/* let numero = 1;
function numerosImpares(numero){
    while(numero <= 100){
        if(numero % 2 != 0){
            console.log(numero);
        }
    numero++
    }
}

numerosImpares(numero); */

// Exercício 2
/* let numero = 1;
function numerosPares(numero){
    while(numero <= 100){
        if(numero % 2 == 0){
            console.log(numero);
        }
    numero++
    }
}

numerosPares(numero); */

// Exercício 3
let i = 1;
let pares = [];
let impares = [];

function separarParesImpares(numero){
    while(i <= numero){
        if(numero % 2 == 0){
            pares.push(i);
            console.log(pares);
        }
        else{
            impares.push(i);
            console.log(impares);
        }
        i++
    }
}

separarParesImpares(6);

// Exercício 4
