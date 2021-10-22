// Aula 04 - 22.10.2021
// Document Object Model
// Mesa 7 - Caroline M. da Silva, Débora Beatriz Figueiró, Denny Ribeiro, Mateus Benites Dias, Renan de Andrade, Wallace Souza, Wesley Bueno

let primeiroTitulo = document.querySelector('h1');
console.log(primeiroTitulo);

console.log(document.querySelector('.conteudo'));

let tituloConteudo = document.querySelector('.conteudo h5');

let elementosConteudo = document.querySelectorAll('.conteudo a');

elementosConteudo.forEach((elemento) => {
    console.log(elemento);
});

console.log(document.querySelector('#diferente'));

document.querySelector('#diferente h2').innerHTML = "Título diferente";

document.querySelector('h1').innerHTML = "DOM";

tituloConteudo.innerHTML = prompt("Insira um novo título");

alert("Você inseriu o seguinte título: " + tituloConteudo.innerHTML);