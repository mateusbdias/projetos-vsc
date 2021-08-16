let nome = ["José", "Carlos", "Aline", "Ana"];
let sobrenome = ["da Silva", "de Souza", "Ferreira", "Paula"];
let idade = [27, 28, 33, 26];
let peso = [83.5, 80.1, 63.7, 55.0];
let altura = [1.70, 1.76, 1.53, 1.62];
let plano = ["Ouro", "Diamante", null, "Prata"];

let imc0 = peso[0]/(altura[0]^2);
let imc1 = peso[1]/(altura[1]^2);
let imc2 = peso[2]/(altura[2]^2);
let imc3 = peso[3]/(altura[3]^2);

console.log(nome[0] + ' ' + sobrenome[0] + ' tem ' + idade[0] + ' anos e seu índice de massa corporal é de ' + imc0 + '.');
console.log(nome[1] + ' ' + sobrenome[1] + ' tem ' + idade[1] + ' anos e seu índice de massa corporal é de ' + imc1 + '.');
console.log(nome[2] + ' ' + sobrenome[2] + ' tem ' + idade[2] + ' anos e seu índice de massa corporal é de ' + imc2 + '.');
console.log(nome[3] + ' ' + sobrenome[3] + ' tem ' + idade[3] + ' anos e seu índice de massa corporal é de ' + imc3 + '.');
