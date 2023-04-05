const searchBtn = document.querySelector('.header_search');
const search = document.querySelector('.search_btn');
const header = document.querySelector('.header');
const closeSearch = document.querySelector('.search_close');
const sip = document.querySelector('.header_search-input');

const login = document.querySelector('.log_in-user');
const signup = document.querySelector('.sign_up-user');
const sLogIn = document.querySelector('.log_in');
const sSignUp = document.querySelector('.sign_up');
const clLogIN = document.querySelector('.log_in-close');
const clSignUp = document.querySelector('.sign_up-close');
const toLogIn = document.querySelector('.to_log-in');
const toSignUp = document.querySelector('.to_sign-up')
// input
function showSearch() {
    header.classList.add('none');
    searchBtn.classList.remove('none');
}

function hiddenSearch() {
    searchBtn.classList.add('none');
    header.classList.remove('none');
}

search.addEventListener('click', showSearch);
sip.addEventListener('focus', showSearch)
closeSearch.addEventListener('click', hiddenSearch);

// đăng kí & đăng nhập

function showLogIn() {
    sLogIn.classList.remove('none');
}

function hiddenLogIn() {
    sLogIn.classList.add('none');
}

function showSignUp() {
    sSignUp.classList.remove('none');
}

function hiddenSignUp() {
    sSignUp.classList.add('none');
}

function LogInToSignUp() {
    sLogIn.classList.add('none');
    sSignUp.classList.remove('none');
}

function SignUpToLogIn() {
    sSignUp.classList.add('none');
    sLogIn.classList.remove('none');
}

login.addEventListener('click', showLogIn);
signup.addEventListener('click', showSignUp);
toSignUp.addEventListener('click', LogInToSignUp);
toLogIn.addEventListener('click', SignUpToLogIn);
clLogIN.addEventListener('click', hiddenLogIn);
clSignUp.addEventListener('click', hiddenSignUp);


