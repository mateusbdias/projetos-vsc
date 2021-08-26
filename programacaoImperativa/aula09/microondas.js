// Aula 09 - 26.08.2021 - Checkpoint I
// Grupo 8 - Alexandre Pedro, Anna Lopes, Caroline Silva, Mateus Benites Dias
// Micro-ondas

function microOndas(prato, tempo){
    if (prato == 1) { // Pipoca
        if (tempo < 10) {
            return console.log("Tempo insuficiente");
        } else if (tempo > 20 && tempo <= 30) {
            return console.log("A comida queimou");
        } else if (tempo > 30) {
            return console.log("KABUMM!");
        } else {
            return console.log("Prato pronto, bom apetite!!!");
        }
    } else if (prato == 2) { // Macarrão
        if (tempo < 8) {
            return console.log("Tempo insuficiente");
        } else if (tempo > 16 && tempo <= 24) {
            return console.log("A comida queimou");
        } else if (tempo > 24) {
            return console.log("KABUMM!");
        } else {
            return console.log("Prato pronto, bom apetite!!!");
        }
    } else if (prato == 3) { // Carne
        if (tempo < 15) {
            return console.log("Tempo insuficiente");
        } else if (tempo > 30 && tempo <= 45) {
            return console.log("A comida queimou");
        } else if (tempo > 45) {
            return console.log("KABUMM!");
        } else {
            return console.log("Prato pronto, bom apetite!!!");
        }
    } else if (prato == 4) { // Feijão
        if (tempo < 12) {
            return console.log("Tempo insuficiente");
        } else if (tempo > 24 && tempo <= 36) {
            return console.log("A comida queimou");
        } else if (tempo > 36) {
            return console.log("KABUMM!");
        } else {
            return console.log("Prato pronto, bom apetite!!!");
        }
    } else if (prato == 5) { // Brigadeiro
        if (tempo < 8) {
            return console.log("Tempo insuficiente");
        } else if (tempo > 16 && tempo <= 24) {
            return console.log("A comida queimou");
        } else if (tempo > 24) {
            return console.log("KABUMM!");
        } else {
            return console.log("Prato pronto, bom apetite!!!");
        }
    } else {
        return console.log("Prato inexistente");
    }
};

microOndas(3, 10);