// Aula 02 - 21.10.2021
// Prompt, Confirm, Alert

// Permitir ao usuário cadastrar um array de músicos

// Quantos músicos?
let n = prompt("Quantos músicos deseja cadastrar?");

// Nome de cada um?
let musicos = [];

for (let i = 0; i < n; i++){
    musicos.push(prompt("Nome:"));
}

console.log(musicos);

// Para cada item da lista - similar ao forEach()
for (let m of musicos){
    console.log(m);
}

// Confirmação
let certeza = confirm("Tem certeza??????");

if (certeza == true){
    console.log("Sim, certeza absoluta");
} else {
    alert("Tudo bem ter dúvidas");
}