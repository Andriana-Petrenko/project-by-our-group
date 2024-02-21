const switcher = document.querySelector('.switch');
const header = document.querySelector('header');
console.log(header);
switcher.addEventListener('click', changeTheme);
function changeTheme() {
    const body = document.body;
    body.classList.add('dark-mode-body');
    header.classList.add('dark-mode');
};
