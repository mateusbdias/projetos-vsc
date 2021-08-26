// Aula 09 - 26-08-2021 - Checkpoint 1
// Grupo 8 - Alexandre Pedro, Anna Lopes, Caroline Machado da Silva, Mateus Benites Dias
// Objetivo - Microondas

function microondas(opcaoDesejada, tempoInserido) {
    var tempo;
    switch (opcaoDesejada) {
        case 1:
            tempo = 10;
            break;
        case 2:
            tempo = 8;
            break;
        case 3:
            tempo = 15;
            break;
        case 4:
            tempo = 12;
            break;
        case 5:
            tempo = 8;
            break;
        default:
            break;
    };
    
    if (opcaoDesejada < 1 || opcaoDesejada > 5) {
        console.log('Prato inexistente');
    } else if (tempoInserido > (3 * tempo)) {
        console.log('kabumm');
    } else if (tempoInserido > (2 * tempo)) {
        console.log('A comida queimou');
    } else if (tempoInserido < tempo){
        console.log('Tempo insuficiente');
    } else {
        console.log('Prato pronto, bom apetite!!!')
    };  
}

microondas(4, 20);