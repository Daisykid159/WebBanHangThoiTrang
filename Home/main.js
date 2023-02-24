const menu = document.querySelector('.menu');
const modal = document.querySelector('.model');
const modalClose = document.querySelector('.menu_ds-close')

function ShowMenu() {
    modal.classList.add('open')
}

function RemoveMenu() {
    modal.classList.remove('open')
}

menu.addEventListener('click', ShowMenu);
modalClose.addEventListener('click', RemoveMenu)
modal.addEventListener('click', RemoveMenu);