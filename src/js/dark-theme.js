const switcher = document.querySelector('#theme');
const menu = document.querySelector('.icon-menu');
const logo = document.querySelector('.icon-logo');
const shoppingList = document.querySelector('.nav-shopping');
const shoppingIcon=document.querySelector('.shopping-icon');
const body = document.body;
const header = document.querySelector('header');
switcher.addEventListener('click', changeTheme);
function changeTheme() {
    if (switcher.checked) {
        shoppingIcon.classList.add('dark-icons');
        shoppingList.classList.add('dark-icons');
        logo.classList.add('dark-icons');
        menu.classList.add('dark-menu');
        body.classList.add('dark-mode-body');
        header.classList.add('dark-mode');
    } else {
        shoppingIcon.classList.remove('dark-icons');
        shoppingList.classList.remove('dark-icons');
        logo.classList.remove('dark-icons');
        menu.classList.remove('dark-menu');
        body.classList.remove('dark-mode-body');
        header.classList.remove('dark-mode'); 
    }
    
};
