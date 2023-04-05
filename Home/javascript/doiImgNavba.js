const img1 = document.querySelector('.img_navba');
const nextLeft = document.querySelector('.nextLeft');
const nextRight = document.querySelector('.nextRight');

var imgx = 1;


nextLeft.addEventListener('click', () => {
    switch (imgx){
        case 1:
            imgx = 3;
            break;
        case 2:
            imgx = 1;
            break;
        case 3:
            imgx = 2;
            break;
    }
    img1.src = 'http://127.0.0.1:5500/Home/IMG/anh' + imgx + '.jpg';
});

nextRight.addEventListener('click', () => {
    switch (imgx){
        case 1:
            imgx = 2;
            break;
        case 2:
            imgx = 3;
            break;
        case 3:
            imgx = 1;
            break;
    }
    img1.src = 'http://127.0.0.1:5500/Home/IMG/anh' + imgx + '.jpg';
});
