"use strict";

const progressBar = document.querySelector(".scrollBar__progress");

if(progressBar){
    window.addEventListener("scroll", updateScrollProgress);
}

function updateScrollProgress(){

    /*
    calcul
    document.body.scrollHeight scroll totale de la page
    window.innerHeight hauteur du viewport
    window.scrollY votre valeur de scroll
    */
 const maxScroll = document.body.scrollHeight - window.innerHeight;
 const currentScroll = window.scrollY;

    const readPercentage = (currentScroll / maxScroll) * 100; /* mon pourcentage de scroll*/

    progressBar.style.setProperty("--scrollbar-width", readPercentage + "%");
}