"use strict";

window.addEventListener('scroll', function () {
  if (pageYOffset > 20 && pageYOffset < 250) {
    document.querySelector('.headerContainer').classList.add('active');
  } else {
    document.querySelector('.headerContainer').classList.remove('active');
  }
});
/*===SLIDER===*/

var arrowLeft = document.querySelector('.arrow1');
var arrowRight = document.querySelector('.arrow2');
var containerComment = document.querySelector('.containerComment');
var offset = 570;
var photoButton = document.querySelectorAll('.photo');
arrowLeft.addEventListener('click', function () {
  offset -= 570;

  if (offset < 0) {
    offset = 1140;
  }

  if (offset === 0) {
    photoButton.forEach(function (item) {
      item.classList.remove('active');
    });
    photoButton[0].classList.add('active');
  }

  if (offset === 570) {
    photoButton.forEach(function (item) {
      item.classList.remove('active');
    });
    photoButton[1].classList.add('active');
  }

  if (offset === 1140) {
    photoButton.forEach(function (item) {
      item.classList.remove('active');
    });
    photoButton[2].classList.add('active');
  }

  containerComment.style.right = offset + 'px';
});
arrowRight.addEventListener('click', function () {
  offset += 570;

  if (offset > 1140) {
    offset = 0;
  }

  if (offset === 0) {
    photoButton.forEach(function (item) {
      item.classList.remove('active');
    });
    photoButton[0].classList.add('active');
  }

  if (offset === 570) {
    photoButton.forEach(function (item) {
      item.classList.remove('active');
    });
    photoButton[1].classList.add('active');
  }

  if (offset === 1140) {
    photoButton.forEach(function (item) {
      item.classList.remove('active');
    });
    photoButton[2].classList.add('active');
  }

  containerComment.style.right = offset + 'px';
});

var _loop = function _loop(i) {
  photoButton[i].addEventListener('click', function () {
    offset = i * 570;
    containerComment.style.right = offset + 'px';

    if (!photoButton[i].classList.contains('active')) {
      photoButton.forEach(function (item) {
        item.classList.remove('active');
      });
      photoButton[i].classList.add('active');
    }
  });
};

for (var i = 0; i < photoButton.length; i++) {
  _loop(i);
}
/*===Switch Toggle===*/


var individual = document.querySelector('.individual');
var company = document.querySelector('.company');
var switcher = document.querySelector('.switcher');
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