// Revisão - 28.09.2021
// Mesa 4 - Denny Ribeiro, Mateus Benites Dias, Rafael Watanabe, Ronaldo Fonseca, Rosana Sebould, Vanessa Matos

// 1) Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em km/l), dado que são conhecidos a distância total percorrida e o volume de combustível consumido para percorrê-la (medido em litros).
function consumoMedio(dist, comb) {
    return dist / comb;
}

console.log("Consumo médio: " + consumoMedio(400, 20) + " km/l");

// 2) Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e calcula o valor total arrecadado com as entradas.
function valorTotalEntradas(numHomens, numMulheres) {
    return (numHomens * 20) + (numMulheres * 17);
}

console.log("Valor total arrecadado: R$ " + valorTotalEntradas(3, 2).toFixed(2));

// 3) Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina.
// Na rotina deve-se incluir as notas do 1º ao 4º Bimestre. Calcular a média aritmética entre elas, e exibir na tela.
function mediaDisciplina(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4;
}

console.log("Média final: " + mediaDisciplina(8, 7, 5, 10).toFixed(2));

// 4) Escreva um programa que o programador inclua o nome de 3 alimentos e então exiba o nome dos 3 separados por virgulas. Ex: maçã, pera, arroz.
function exibirAlimentos(array) {
    return array.join(", ");
}

console.log("Alimentos: " + exibirAlimentos(["leite", "ovo", "açúcar"]));

// 5) Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.
function exibirMensagem(numero) {
    if (numero > 10) {
        return "Número maior que 10";
    } else {
        return "N/A";
    }
}

console.log(exibirMensagem(12));
console.log(exibirMensagem(8));

// 6) Escrever um algoritmo que leia dois valores inteiros distintos e informe qual deles é o maior e também se são iguais.
function compNumeros(num1, num2) {
    if (num1 > num2) {
        return "O primeiro número é maior";
    } else if (num2 > num1) {
        return "O segundo número é maior";
    } else {
        return "Os números são iguais";
    }
}

console.log(compNumeros(15, 10));
console.log(compNumeros(5, 10));
console.log(compNumeros(15, 15));

// 7) Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.
function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return "O número é par"
    } else {
        return "O número é ímpar"
    }
}

console.log(parOuImpar(6));
console.log(parOuImpar(7));

// 8) Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50.
function verificarNumero(numero) {
    if ((numero >= 15 && numero <= 25) || (numero >= 45 && numero <= 50)) {
        return "ERRO!"
    } else {
        return "Autorizado!"
    }
}

console.log(verificarNumero(18));
console.log(verificarNumero(30));
console.log(verificarNumero(47));

// 9) Escreva um programa que exibe qualquer tabuada completa. O programa deve perguntar ao usuário qual tabuada ele deseja visualizar, que irá responder digitando um número de 1 a 10.
function tabuadaCompleta(numero) {
    for (y = 1; y <= 10; y++) {
        console.log(numero + " x " + y + " = " + (numero * y));
    }
}

tabuadaCompleta(4);