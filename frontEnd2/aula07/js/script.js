const h1 = document.createElement('h1');
const titulo = document.createTextNode("Login");
h1.appendChild(titulo);

const form = document.createElement('form');

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Email');

const passInput = document.createElement('input');
passInput.setAttribute('type', 'password');
passInput.setAttribute('placeholder', 'Senha');

const submitBtn = document.createElement('button');
submitBtn.innerText = "Enviar";

const resetBtn = document.createElement('button');
resetBtn.innerText = "Cancelar";

document.body.appendChild(h1);
document.body.appendChild(form);
form.appendChild(emailInput);
form.appendChild(passInput);
form.appendChild(submitBtn);
form.appendChild(resetBtn);

emailInput.setAttribute('disabled', '');

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.justifyContent = 'center';
form.style.alignItems = 'center';
form.style.gap = '10px';

emailInput.removeAttribute('placeholder');