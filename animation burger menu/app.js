"use strict";

const menuToggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll('a');

if(menuToggle){

    menuToggle.addEventListener("click", menuOpen);
 

for (let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', menuOpen);
    }
}


function menuOpen() {
    menu.classList.toggle("menu--open");
    document.body.classList.toggle("no--scroll");

}
    menu.classList.toggle("menu--open");

// quand on clique sur un des liens
// le menu se referme