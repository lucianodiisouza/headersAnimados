const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $navbar = document.querySelectorAll('.nav-bar')[0];

window.addEventListener('scroll', toggleHeader, false);

function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.firstElementChild.setAttribute('src', 'img/omnitech-logo-2.png');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navbar.classList.remove('max-nav');
        $navbar.classList.add('min-nav');
    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $header.classList.remove('min-header');
        $header.classList.add('max-header');
        $logo.firstElementChild.setAttribute('src', 'img/omnitech-logo-1.png');
        $logo.classList.remove('min-logo');
        $logo.classList.add('max-logo');
        $navbar.classList.remove('min-nav');
        $navbar.classList.add('max-nav');
    }
}