// Aula 06 - Mesa de Trabalho

function adicionar(a, b){
    return a + b;
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

function quadradoDoNumero(x){
    return multiplicar(x, x);
}

function mediaDeTresNumeros(a, b, c){
    return dividir(adicionar(adicionar(a, b), c), 3);
}

function calculaPorcentagem(tot, pct){
    return multiplicar(dividir(pct, 100), tot);
}

function geradorDePorcentagem(a, b){
    return (multiplicar(dividir(a, b), 100)) + "%";
}

console.log("===== Calculadora =====");
console.log(adicionar(15, 8));
console.log(subtrair(23, 6));
console.log(multiplicar(14, 3));
console.log(dividir(38, 6));
console.log(dividir(4, 0));
console.log(quadradoDoNumero(4));
console.log(mediaDeTresNumeros(3, 4, 5));
console.log(calculaPorcentagem(300, 50));
console.log(geradorDePorcentagem(38, 200));