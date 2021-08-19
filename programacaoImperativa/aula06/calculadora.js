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
    let soma = adicionar(adicionar(a, b), c);
    return dividir(soma, 3);
}

function calculaPorcentagem(tot, pct){
    let frac = dividir(pct, 100);
    return multiplicar(frac, tot);
}

function geradorDePorcentagem(a, b){
    let frac = dividir(a, b);
    return multiplicar(frac, 100) + "%";
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