// Programação Imperativa
// Avaliação Final - 30.09.2021
// Mesa 13 - Juíle Hanada, Mateus Benites Dias, Nayla Ueda

// Vamos imaginar um cenário de um e-commerce, onde há diversas operações existentes, como pesquisar por produtos, adicioná-los ao carrinho e realizar uma compra.
// No VS Code, resolva as seguintes situações em JavaScript.

// 1. Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.
// A informação Qualidade do Produto deve ser um número que irá de 0 a 10. A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque.
let produtos = [
    {
        nome: "Televisão",
        valor: 1550,
        qualidade: 7.5,
        disponivel: true
    },
    {
        nome: "Mouse",
        valor: 300,
        qualidade: 9,
        disponivel: false
    },
    {
        nome: "Air Fryer",
        valor: 1400,
        qualidade: 6.5,
        disponivel: true
    }
];

console.log("Lista de produtos:")
console.log(produtos);

// 2. Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham:
// Valor entre 482 e 1600;
// Qualidade superior a 6;
// Status como disponível.
// O resultado do filtro deve ser armazenado na variável carrinho.
let carrinho = produtos.filter((produto) => (produto.valor > 482 && produto.valor < 1600 && produto.qualidade > 6 && produto.disponivel));

// 3. Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços correspondentes, e no final um valor total, resultante da somatória de todos os produtos.
console.log("===============================================")
console.log("Produtos no carrinho:")
console.log(carrinho);

let valorTotal = carrinho.reduce(function (acumulador, item){
    return acumulador + item.valor
}, 0);

console.log("===============================================")
console.log("Valor total da compra:")
console.log("R$ ", valorTotal.toFixed(2));