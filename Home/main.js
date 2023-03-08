// alert('Welcome to website of Team 3');
const prd = document.querySelector('#product');
const prdLi = document.querySelector('.header_product');

function active() {
    prd.classList.remove('none');
    prd.classList.add('active')
}

function removeActive() {
    prd.classList.remove('active');
    prd.classList.add('none')
}

prdLi.addEventListener('blur', active)