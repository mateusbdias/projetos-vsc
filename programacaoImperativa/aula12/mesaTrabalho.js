// Aula 12 - 02.09.2021
// Mesa de Trabalho
// Mesa 3 - Anna Lopes, Marcia Yano, Mateus Benites Dias, Matheus Braga Dias,
// Rafael Watanabe, Renan de Andrade

// Parte 1
// 1. Escreva um algoritmo para calcular o consumo médio de um automóvel (medido em km/l), dado que são conhecidos a distância total percorrida e o volume de combustível consumido para percorrê-la (medido em litros).
function calcularConsumo (distancia, volume){
    console.log("O consumo é de " + distancia / volume + " km/L");
}

calcularConsumo(300, 30);
console.log("==========================================");

// 2. Em uma festa, homens pagam 20 reais de entrada e as mulheres pagam 17. Crie um programa que pergunta quantos homens e quantas mulheres participaram da festa e calcula o valor total arrecadado com as entradas.
function calcularArrecadacao(numHomens, numMulheres){
    console.log("O valor total arrecadado foi de " + (numHomens * 20 + numMulheres * 17) + " reais");
}

calcularArrecadacao(20,10);
console.log("==========================================");

// 3. Escreva um programa que ajuda os alunos a calcularem as notas desta disciplina. O programa deve perguntar as notas da primeira e da segunda prova, calcular a média aritmética entre elas, e exibir na tela.
function calcularMedia(n1, n2){
    console.log("A média final é: " + (n1 + n2) / 2);
}

calcularMedia(2, 10);
console.log("==========================================");

// 4. Escreva um programa que solicita o nome de 3 alimentos e então exibe o nome dos 3 separados por virgulas. Ex: maçã, pera, banana.
function exibirAlimentos(a, b, c){
    console.log(a + ", " + b + ", " + c);
}

exibirAlimentos("leite", "ovo", "farinha");
console.log("==========================================");

// Parte 2
// 1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.
function numeroMaior10(n){
    if(n > 10){
        console.log("O número é maior que 10");
    } else {
        console.log("O número é menor ou igual a 10");
    }
}

numeroMaior10(12);
numeroMaior10(9);
console.log("==========================================");

// 2. Escrever um algoritmo que leia dois valores inteiros e informe qual deles é o maior.
function exibirMaiorValor(a, b){
    if(a > b){
        console.log(a + " é maior");
    } else if(a < b){
        console.log(b + " é maior");
    } else {
        console.log("São iguais");
    }
}

exibirMaiorValor(12, 9);
exibirMaiorValor(4, 5);
console.log("==========================================");

// 3. Escrever um algoritmo que leia dois valores inteiros e informe se os números são iguais.
function saoIguais(a, b){
    if(a == b){
        console.log("São iguais");
    } else {
        console.log("Não são iguais");
    }
}

saoIguais(3, 4);
saoIguais(6, 6);
console.log("==========================================");

// 4. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.
function parOuImpar(numero){
    if(numero % 2 == 0){
        console.log("O número é par");
    } else {
        console.log("O número é ímpar");
    }
}

parOuImpar(534);
parOuImpar(45);
console.log("==========================================");

// 5. Crie um programa que receba um número inteiro e informa se este número é múltiplo de 10.
function multiplo10(numero){
    if(numero % 10 == 0){
        console.log("O número é múltiplo de 10");
    } else {
        console.log("O número não é múltiplo de 10");
    }
}

multiplo10(534);
multiplo10(40);
console.log("==========================================");

// Parte 3
// 1 - Escreva um programa que solicita um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50.
function exibirErro(numero){
    if((numero >= 15 && numero <= 25) || (numero >= 45 && numero <= 50)){
        console.log("ERRO!");
    } else {
        console.log("Aprovado!");
    }
}

exibirErro(23);
exibirErro(30);
console.log("==========================================");

// 2 - Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 80, menor que 25 ou igual a 40.
function exibirMensagem(numero){
    if(numero > 80 || numero < 25 || numero == 40){
        console.log("Hello World!");
    }
}

exibirMensagem(90);
exibirMensagem(30);
console.log("==========================================");

// 3 - Escrever um algoritmo que leia três valores inteiros e verifique se eles podem ser as medidas dos lados de um triângulo.
/* Exemplo:
let ladoA = 10
let ladoB = 10
let ladoC = 10
MENSAGEM:
"Os números digitados formam um TRIÂNGULO! (TRUE)"
"Os números digitados NÃO FORMAM um triângulo! (FALSE)" */
function formamTriangulo(a, b, c){
    if(
        (a > Math.abs(b - c) && a < (b + c)) &&
        (b > Math.abs(a - c) && b < (a + c)) &&
        (c > Math.abs(b - a) && c < (b + a))
    ){
        console.log("Os lados digitados formam um triângulo!");
    } else {
        console.log("Os lados digitados não formam um triângulo!");
    }
}

formamTriangulo(3, 4, 5);
formamTriangulo(3, 4, 10);
console.log("==========================================");

// 4 - Crie um programa que pergunte o nome do usuário. Exiba uma mensagem diferenciada caso o nome digitado seja "William", "Roberta" ou "JavaScript".
function mensagemUsuario(nome){
    if(nome == "William" || nome == "Roberta" || nome == "JavaScript"){
        console.log("Usuário VIP");
    } else {
        console.log("Usuário Regular");
    }
}

mensagemUsuario("Mateus");
mensagemUsuario("Roberta");