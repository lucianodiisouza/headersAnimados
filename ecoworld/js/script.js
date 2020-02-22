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

const $extlink = document.querySelectorAll('.ext-link')[0];
$extlink.addEventListener('click', openLink, false);

function openLink() {
    window.open('https://www.thecodelovers.com.br', '_blank');
}

const $intLinks = document.querySelectorAll('.int-link');
const $sectArr = document.querySelectorAll('main section');

$intLinks.forEach(function(cur, idx) {
    cur.addEventListener('click', function() {
        window.scrollTo({
            top: $sectArr[idx].offsetTop - $navbar.offsetHeight,
            left: 0,
            behavior: "smooth"
        })
    }, false);
})