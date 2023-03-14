const searchBtn = document.querySelector('.header_search');
const search = document.querySelector('.search_btn');
const header = document.querySelector('.header');
const closeSearch = document.querySelector('.search_close');

function showSearch() {
    header.classList.add('none');
    searchBtn.classList.remove('none');
}

function hiddenSearch() {
    searchBtn.classList.add('none');
    header.classList.remove('none');
}

search.addEventListener('click', showSearch);
closeSearch.addEventListener('click', hiddenSearch);