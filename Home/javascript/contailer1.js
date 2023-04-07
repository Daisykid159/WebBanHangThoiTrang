var datas = [
    {
        id: 1,
        url: './IMG/dsnb1.jpg',
        Description: "Bộ 1 SUIT"
    },
    {
        id: 2,
        url: './IMG/dsnb1.jpg',
        Description: "Bộ 2 SUIT"
    },
    {
        id: 3,
        url: './IMG/dsnb1.jpg',
        Description: "Bộ 3 SUIT"
    },
    {
        id: 4,
        url: './IMG/dsnb1.jpg',
        Description: "Bộ 4 SUIT"
    },
    {
        id: 5,
        url: './IMG/dsnb1.jpg',
        Description: "Bộ 5 SUIT"
    },
    {
        id: 6,
        url: './IMG/dsnb1.jpg',
        Description: "Bộ 6 SUIT"
    }
]

const contailerList1 = document.querySelector('.contailer_list1');

datas.forEach((data) => {
    const liItem = contailerList1.appendChild(document.createElement('li'));
    liItem.classList.add('contailer_item', 'l-3');
    const imgLi = liItem.appendChild(document.createElement('img'));
    imgLi.classList.add('contailer_item-img');
    imgLi.src = data.url;
    const pLi = liItem.appendChild(document.createElement('p'));
    pLi.classList.add('contailer_item-text');
    pLi.textContent = data.Description;
})