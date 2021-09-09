// Aula 13 - Objetos Literais - 09.09.2021
// Exercício 03 - Desestruturando Obj. Literais

let carro = {
    placa: "DCQ2E78",
    cor: "preta",
    ano: 2021,
    flex: true,
    mostrarCaracteristicas: function(){
        return "Características do seu carro:\n Placa = " + carro.placa + "\n Cor = " + carro.cor + "\n Ano = " + carro.ano + "\n Flex = " + carro.flex;
    }
}

// No caso de objeto, as variáveis são envolvidas por chaves
let {placa, cor, ano, flex} = carro;
console.log(placa);