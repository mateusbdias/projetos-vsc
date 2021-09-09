// Aula 13 - JSON - 09.09.2021
// Exercício 01

let dadosJson = '{"nome":"Mateus","sobrenome":"Dias","idade":27}';
console.log(dadosJson);
// JSON é um objeto nativo

// Desserialização = parsing
let dadosConvertidosJS = JSON.parse(dadosJson);
console.log("Dados convertidos em JS: " + dadosConvertidosJS.sobrenome);
console.log(dadosConvertidosJS.sobrenome.toUpperCase());

// Serialização = stringify - cria um formato JSON
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS);
console.log("Objeto convertido em JSON: " + objetoConvertidoJson);