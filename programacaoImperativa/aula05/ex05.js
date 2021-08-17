// Exercício Mesa de Trabalho

// Função 1
function convInchCm(inch){
    return inch * 2.54;
}
console.log("Centímetros: " + convInchCm(3));

// Função 2
function convURL(string){
    return "http://www." + string + ".com.br";
}
console.log("URL: " + convURL("ctd"));

// Função 3
function exclamacao(string){
    return string + "!";
}
console.log("Frase: " + exclamacao("Olá"));

// Função 4
function idadeDog(idade){
    return idade * 7;
}
console.log("Idade: " + idadeDog(4));

// Função 5
function valorHoraTrab(salario){
    return salario / 160;
}
console.log("Valor da hora de trabalho: " + valorHoraTrab(2000));

// Função 6
function calcIMC(altura, peso){
    return peso / altura^2; 
}
console.log("IMC: "+ calcIMC(1.75, 80.5));

// Função 7
function convCaps(string){
    return string.toUpperCase();
}
console.log("Frase: " + convCaps("Hello"));

// Função 8
function tipoParam(param){
    return typeof(param);
}
console.log("Tipo de parâmetro: " + tipoParam(true));

// Função 9
function calcCirc(raio){
    return raio * 2 * Math.PI;
}
console.log("Circunferência: " + calcCirc(6));