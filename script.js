window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        document.querySelector('.headerContainer').classList.add('active');
    } else {
        document.querySelector('.headerContainer').classList.remove('active');
    }
});

/*===SLIDER===*/

const arrowLeft = document.querySelector('.arrow1');
const arrowRight = document.querySelector('.arrow2');
const containerComment = document.querySelector('.containerComment');
let offset = 570;

const photoButton = document.querySelectorAll('.photo');

function getClassPhoto(n, w) {
    if (offset === n) {
        photoButton.forEach(function(item) {
            item.classList.remove('active');
        });
        photoButton[w].classList.add('active');
    }
}

arrowLeft.addEventListener('click', function () {
    clearInterval(inst);
    offset-= 570;
    if(offset < 0) {
        offset = 1140;
    }
    getClassPhoto(0, 0);
    getClassPhoto(570, 1);
    getClassPhoto(1140, 2);
    containerComment.style.right = offset + 'px';
});

arrowRight.addEventListener('click', function () {
    clearInterval(inst);
    offset+= 570;
    if(offset > 1140) {
        offset = 0;
    }
    getClassPhoto(0, 0);
    getClassPhoto(570, 1);
    getClassPhoto(1140, 2);
    containerComment.style.right = offset + 'px';
});

for (let i=0 ;i < photoButton.length; i++) {
    photoButton[i].addEventListener('click', function () {
        clearInterval(inst);
        offset = i*570;
        containerComment.style.right = offset + 'px';
        if (!photoButton[i].classList.contains('active')) {
            photoButton.forEach(item => {
                item.classList.remove('active');
            });
            photoButton[i].classList.add('active');
        }
    });
}

/*===SetInterval for Slider===*/

const inst = setInterval(() => {
    offset+= 570;
    if(offset > 1140) {
        offset = 0;
    }
    getClassPhoto(0, 0);
    getClassPhoto(570, 1);
    getClassPhoto(1140, 2);
    containerComment.style.right = offset + 'px';
},3000);

/*===Switch Toggle===*/

let individual = document.querySelector('.individual');
let company = document.querySelector('.company');
let switcher = document.querySelector('.switcher');

individual.addEventListener('click', function () {
    switcher.style.left = 4 + "px";

    company.classList.remove('active');
    individual.classList.add('active');
});

company.addEventListener('click', function () {
    switcher.style.left = 128 + "px";

    individual.classList.remove('active');
    company.classList.add('active');
});

/*===Burger-menu opening===*/

document.querySelector('.menu_icon').addEventListener('click', () => {
    document.querySelector('.menu__burger').classList.add('menu__burger--show');
});

document.querySelector('.burger__close').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.menu__burger').classList.remove('menu__burger--show');
});