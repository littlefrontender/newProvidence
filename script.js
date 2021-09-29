window.addEventListener('scroll', function () {
    if (pageYOffset>20&&pageYOffset<250) {
        document.querySelector('.headerContainer').classList.add('active')
    } else {
        document.querySelector('.headerContainer').classList.remove('active')
    }
})

/*===SLIDER===*/

let arrowLeft = document.querySelector('.arrow1');
let arrowRight = document.querySelector('.arrow2');
let containerComment = document.querySelector('.containerComment')
let offset = 570;

let photoButton = document.querySelectorAll('.photo');

arrowLeft.addEventListener('click', function () {
    offset-= 570;
    if(offset < 0) {
        offset = 1140;
    }
    if (offset===0) {
        photoButton.forEach(function(item) {
            item.classList.remove('active');
        })
        photoButton[0].classList.add('active');
    }
    
    if (offset===570) {
        photoButton.forEach(function(item) {
            item.classList.remove('active');
        })
        photoButton[1].classList.add('active');
    }
    
    if (offset===1140) {
        photoButton.forEach(function(item) {
            item.classList.remove('active');
        })
        photoButton[2].classList.add('active');
    }
    containerComment.style.right = offset + 'px';
})

arrowRight.addEventListener('click', function () {
    offset+= 570;
    if(offset > 1140) {
        offset = 0;
    }
    if (offset===0) {
        photoButton.forEach(function(item) {
            item.classList.remove('active');
        })
        photoButton[0].classList.add('active');
    }
    
    if (offset===570) {
        photoButton.forEach(function(item) {
            item.classList.remove('active');
        })
        photoButton[1].classList.add('active');
    }
    
    if (offset===1140) {
        photoButton.forEach(function(item) {
            item.classList.remove('active');
        })
        photoButton[2].classList.add('active');
    }
    containerComment.style.right = offset + 'px';
})

for (let i=0;i<photoButton.length;i++) {
    photoButton[i].addEventListener('click', function () {
        offset = i*570
        containerComment.style.right = offset + 'px';
        if (!photoButton[i].classList.contains('active')) {
            photoButton.forEach(function(item) {
                item.classList.remove('active');
            })
            photoButton[i].classList.add('active');
        }
    })
}

/*===Switch Toggle===*/

let individual = document.querySelector('.individual');
let company = document.querySelector('.company');
let switcher = document.querySelector('.switcher');

individual.addEventListener('click', function () {
    switcher.style.left = 4 + "px";

    company.classList.remove('active');
    individual.classList.add('active');
})

company.addEventListener('click', function () {
    switcher.style.left = 128 + "px";

    individual.classList.remove('active');
    company.classList.add('active');
})
