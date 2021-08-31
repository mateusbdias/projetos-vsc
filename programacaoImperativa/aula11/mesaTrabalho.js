// Aula 11 - Mesa de Trabalho
// Mesa 11 - Anna Lopes, Felipe Arruda, Leonardo Fernandes, Mateus Benites Dias, Rosana Sebould

// Exercícios For

// Exercício 1
for(i = 1; i <= 5; i++){
    console.log("Olá mundo");
}

// Exercício 2
for(i = 1; i <= 10; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// Exercício 3
for(x = 1; x <= 10; x++){
    for (y = 1; y <= 10; y++){
        console.log(x + " x " + y + " = " + (x * y));
    }
}

// Exercícios While

// Exercício 1
let numero = 1;
function numerosImpares(numero){
    while(numero <= 100){
        if(numero % 2 != 0){
            console.log(numero);
        }
    numero++
    }
}

numerosImpares(numero);

// Exercício 2
let numero = 1;
function numerosPares(numero){
    while(numero <= 100){
        if(numero % 2 == 0){
            console.log(numero);
        }
    numero++
    }
}

numerosPares(numero);

// Exercício 3
let i = 1;
let pares = [];
let impares = [];
function separarParesImpares(numero){
    while(i <= numero){
        if(i % 2 == 0){
            pares.push(i);
        }
        else{
            impares.push(i);
        }
        i++
    }
    console.log("Números pares:");
    console.log(pares);
    console.log("==============");
    console.log("Números ímpares:");
    console.log(impares);
}

separarParesImpares(40);

// Exercício 4
let i = 0;
let soma = 0;
function mediaNotas(alunos, notas){
    while(i < alunos){
        soma = soma + notas[i];
    i++
    }
    console.log("Média das notas:");
    console.log(soma / alunos);
}

mediaNotas(5, [5, 6, 7, 8, 9]);