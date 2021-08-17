// Exercício Mesa de Trabalho

// Função 1 - Conversão de polegadas para cm
function convInchCm(inch){
    return inch * 2.54;
}
console.log("Centímetros: " + convInchCm(3));

// Função 2 - Conversão de string para URL
function convURL(string){
    return "http://www." + string + ".com.br";
}
console.log("URL: " + convURL("ctd"));

// Função 3 - Frase com exclamação
function exclamacao(string){
    return string + "!";
}
console.log("Frase: " + exclamacao("Olá"));

// Função 4 - Cálculo de idade do cachorro
function idadeDog(idade){
    return idade * 7;
}
console.log("Idade: " + idadeDog(4));

// Função 5 - Cálculo da hora de trabalho
function valorHoraTrab(salario){
    return salario / 160;
}
console.log("Valor da hora de trabalho: " + valorHoraTrab(2000));

// Função 6 - Cálculo do IMC
function calcIMC(altura, peso){
    return peso / altura^2; 
}
console.log("IMC: "+ calcIMC(1.75, 80.5));

// Função 7 - Conversão para maiúsculas
function convCaps(string){
    return string.toUpperCase();
}
console.log("Frase: " + convCaps("Hello"));

// Função 8 - Tipo de parâmetro
function tipoParam(param){
    return typeof(param);
}
console.log("Tipo de parâmetro: " + tipoParam(true));

// Função 9 - Cálculo da circunferência
function calcCirc(raio){
    return raio * 2 * Math.PI;
}
console.log("Circunferência: " + calcCirc(6));