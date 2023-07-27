const login = document.querySelector('#user');
const card = document.querySelector('.card');
const register = document.querySelector('#sign_in');
const menu = document.querySelector('.register');
const userActive = document.querySelector('.dropdown');
const dropdown = document.querySelector('.dropdown-menu');

login.addEventListener('click', () => {
    login.classList.toggle('active');
    card.classList.toggle('active');
})

register.addEventListener('click', () => {
    card.classList.toggle('active');
    menu.classList.toggle('active');
})

userActive.addEventListener('click', () => {
    userActive.classList.toggle('active');
    dropdown.classList.toggle('active');
})
