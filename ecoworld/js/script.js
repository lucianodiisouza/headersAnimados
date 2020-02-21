const $navbar = document.querySelectorAll('.nav-bar')[0];
const $logo = document.querySelectorAll('.logo')[0];

window.addEventListener('scroll', toggleNavBar, false);

function toggleNavBar() {
    if (window.pageYOffset >= $logo.offsetHeight && $navbar.classList.contains('abs-pos')) {
        $navbar.classList.remove('abs-pos');
        $navbar.classList.add('fix-pos');
    } else if (window.pageYOffset < $logo.offsetHeight && $navbar.classList.contains('fix-pos')) {
        $navbar.classList.remove('fix-pos');
        $navbar.classList.add('abs-pos');
    }
}