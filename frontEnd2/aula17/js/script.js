let nome = document.querySelector('#nome');
let btn = document.querySelector('#btn');
let ul = document.querySelector('ul');

btn.addEventListener('click', event => {
    event.preventDefault();

    let url = `https://pokeapi.co/api/v2/pokemon/${nome.value}`;

    fetch(url)
    .then(response => response.json())
    .then(pkmn => {
        console.log(pkmn);
        let nomePkmn = pkmn.name;
        let nomeFinal = nomePkmn[0].toUpperCase() + nomePkmn.substr(1);
        ul.innerHTML += `<li>${pkmn.id}. ${nomeFinal}</li>`
        let ol = document.createElement('ol');
        let typesPkmn = pkmn.types;
        typesPkmn.forEach(obj => {
            let type = obj.type.name;
            let typeCaps = type[0].toUpperCase() + type.substr(1);
            ol.innerHTML += `<li>${typeCaps}</li>`
        });
        ul.appendChild(ol);
    });
});