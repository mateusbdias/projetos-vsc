let body = document.querySelector('body');
let button = document.querySelector('button');
let itens = document.querySelectorAll('.item');

function themeChange(){
  body.classList.toggle('dark');
  for (let item of itens) {
    item.classList.toggle('dark');
    item.classList.toggle('dark-border');
  }
  button.classList.toggle('dark');
}

button.onclick = themeChange;