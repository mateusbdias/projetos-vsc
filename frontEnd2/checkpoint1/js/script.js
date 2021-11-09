let nome = document.querySelector('input#nome');

let desc = document.querySelector('textarea#desc');

let url = document.querySelector('input#url');

let regioes = document.querySelectorAll('input[name=regiao]');

let capturado = document.querySelector('input[name=capturado]');

let btn = document.querySelector('#btn');

btn.addEventListener('click', function(ev){
    ev.preventDefault();
    let card = document.createElement('div');
    card.classList.add('card');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let img = document.createElement('img');
    h2.innerText = nome.value;
    if (capturado.checked) {
        h2.classList.add('capturado');
        capturado.checked = false;
    } else {
        h2.classList.add('naoCapturado');
    }
    regioes.forEach(regiao => {
        if (regiao.checked) {
            h3.innerHTML = "<i>" + regiao.value + "</i>";
            regiao.checked = false;
        }
    });
    p.innerText = desc.value;
    img.setAttribute('src', url.value);
    img.setAttribute('width', '350px');
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p);
    document.querySelector('div.container').appendChild(card);
    nome.value = "";
    desc.value = "";
    url.value = "";
});