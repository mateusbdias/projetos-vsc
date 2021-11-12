let btn = document.querySelector('#btn');
let ul = document.querySelector('ul');

btn.addEventListener('click', event => {
    event.preventDefault();

    let url = 'https://reqres.in/api/users?page=2';

    fetch(url)
    .then(response => response.json())
    .then(users => {
        let arrayUsers = users.data;
        console.log(arrayUsers);

        arrayUsers.forEach(user => {
            ul.innerHTML += `<li><img src="${user.avatar}"></li>`;
            ul.innerHTML += `<li>${user.first_name} ${user.last_name}</li>`;
        });
    });
});