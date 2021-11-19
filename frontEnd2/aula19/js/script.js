let h1 = document.querySelector('h1');
let email = document.querySelector('#email');
let password = document.querySelector('#pass');
let btn = document.querySelector('#btn');

btn.addEventListener('click', event => {
    event.preventDefault();

    let url = "https://reqres.in/api/login";

    let payload = JSON.stringify({
        email: email.value,
        password: password.value
    });

    let parameters = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: payload
    }

    fetch(url, parameters)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.error) {
            alert(data.error)
        } else {
            fetch("https://reqres.in/api/users/")
            .then(response => response.json())
            .then(users => {
                users.data.forEach(user => {
                    if (email.value == user.email) {
                        h1.innerText = `Olá, ${user.first_name} ${user.last_name}!`
                    }
                });
            });
        }
    });
});