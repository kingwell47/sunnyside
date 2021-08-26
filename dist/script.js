const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const btnMenu = document.querySelector(".header__menu");

btnHamburger.addEventListener('click', function(){
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
        btnMenu.classList.add("hidden");
        body.classList.remove("noscroll");
    } else {    
        btnHamburger.classList.add('open');
        btnMenu.classList.remove("hidden");
        body.classList.add("noscroll");
    }
})