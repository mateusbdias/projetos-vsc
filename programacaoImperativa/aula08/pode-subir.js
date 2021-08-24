// Aula 08 - Mesa de Trabalho

let autorizado = "";

function podeSubir(altura, acompanhada){
    if (altura >= 1.4 && altura <= 2) {
        console.log("Acesso autorizado" + true);
        return autorizado = true;
    } else if (altura >= 1.2 && altura < 1.40 && acompanhada) {
        console.log("Acesso autorizado somente com acompanhante");
        return autorizado = true;
    } else {
        console.log("Acesso negado")
        return autorizado = false;
    }
}

podeSubir(1.3, 1);
console.log(autorizado);