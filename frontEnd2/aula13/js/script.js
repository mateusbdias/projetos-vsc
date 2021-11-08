let nome = document.querySelector('input#nome');

let palavras = nome.value.split(" ");

let btn = document.querySelector('#btn');

nome.addEventListener('change', () => {
    if (nome.value == " ") {
        nome.classList.toggle('disabled');
        btn.classList.toggle('disabled-btn');
        console.log("O campo não pode estar vazio");
    } else if (nome.value.length > 150) {
        nome.classList.toggle('disabled');
        btn.classList.toggle('disabled-btn');
        console.log("O campo não pode conter mais de 150 caracteres");
    } else if (palavras.length < 2) {
        nome.classList.toggle('disabled');
        btn.classList.toggle('disabled-btn');
        console.log("O campo deve conter pelo menos 2 palavras");
    } else if (/[0-9]/.test(nome.value)){
        nome.classList.toggle('disabled');
        btn.classList.toggle('disabled-btn');
        console.log("O campo não pode conter números");
    }
});