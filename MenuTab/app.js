"use strict";

const buttons = document.querySelectorAll(".tab__el");
const tabsi = document.querySelectorAll(".tabsi");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {

        tabsi.forEach(tab => tab.style.display = "none");

        buttons.forEach(b => b.classList.remove("active"));

        const name = btn.textContent.replace(); 

        document.getElementById(name).style.display = "block";

        btn.classList.add("active");
    });
});
