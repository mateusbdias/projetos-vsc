// Aula 16 - Arrow Functions e Callbacks - 16.09.2021
// Exercício Callbacks

// Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.
// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.
function acaoCarro(callback){
    callback();
}

let andar = () => console.log("O carro está andando");
let parar = () => console.log("O carro parou");

acaoCarro(andar);
acaoCarro(parar);