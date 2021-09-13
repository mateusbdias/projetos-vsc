// Aula 14 - Módulos - 13.09.2021
// Exercício 02 - Export

let pessoa = {
    nome: "Mateus",
    idade: 27,
    sexo: "M",
    filhos: 0
}

let cachorro = {
    nome: "Linguine",
    idade: 1,
    raca: "Dachshund",
    sexo: "M"
}

module.exports = {pessoa, cachorro};