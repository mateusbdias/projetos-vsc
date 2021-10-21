// Aula 02 - 21.10.2021
// Pedra, Papel, Tesoura
// Mesa 2 - Ector Cunha, Francieli Celeghim, Kantuta Molina, Marcia Yano, Mateus Benites Dias, Ronaldo Fonseca, Rosana Sebould, Thaisa Sicco, Túlio Marinho

let usuario = "";
let maquina = 0;
let ptsUsuario = 0;
let ptsMaquina = 0;

for (let i = 1; i <= 3; i++){

    // Solicitar a opção do usuário
    usuario = parseInt(prompt("Pedra(1), papel(2) ou tesoura(3)?"));
    console.log(usuario);
    
    // Definir a jogada da máquina - classe Math e seus métodos
    maquina = parseInt(Math.random() * 3 + 1);
    console.log(maquina);
    
    // Verificar o vencedor
    switch (usuario) {
        case 1:
            switch (maquina) {
                case 2:
                    ptsMaquina++;
                    break;
                case 3:
                    ptsUsuario++;
                    break;
            }
            break;
        case 2:
            switch (maquina) {
                case 1:
                    ptsUsuario++;
                    break;
                case 3:
                    ptsMaquina++;
                    break;
            }
            break;
        case 3:
            switch (maquina) {
                case 1:
                    ptsMaquina++;
                    break;
                case 2:
                    ptsUsuario++;
                    break;
            }
            break;
    }
}

if (ptsUsuario > ptsMaquina) {
    alert("O usuário foi o vencedor, com o placar de " + ptsUsuario + " a " + ptsMaquina);
} else if (ptsMaquina > ptsUsuario) {
    alert("A máquina foi a vencedora, com o placar de " + ptsMaquina + " a " + ptsUsuario);
} else {
    alert("Não acho que quem ganhar ou quem perder, nem quem ganhar nem perder, vai ganhar ou perder. Vai todo mundo perder.");
}