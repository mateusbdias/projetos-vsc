// Aula 13 - Objetos Literais - 09.09.2021
// Exercício 02 - Funções em Obj. Literais

let carro = {
    placa: "DCQ2E78",
    cor: "preta",
    ano: 2021,
    flex: true,
    mostrarCaracteristicas: function(){
        return "Características do seu carro:\n Placa = " + carro.placa + "\n Cor = " + carro.cor + "\n Ano = " + carro.ano + "\n Flex = " + carro.flex;
    }
}

console.log(carro.mostrarCaracteristicas());