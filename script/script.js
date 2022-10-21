const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');
const welc = document.getElementById("welc");
const welcP = document.querySelector("#welc p");
const welcTwo = document.getElementById("welc2");
const welcTwoP = document.querySelector("#welc2 p")
let banner = document.querySelector(".banner")


if (window.matchMedia("(min-width: 1023px)").matches) {
    setTimeout(() => {
        //desktop
        welc.style.transition="5s ease-in-out";
        welc.style.transform="translateY(40px)";
        welc.style.boxShadow="0px 5px 10px wheat";
    
        welcP.style.transform="translateX(200px)"
        welcP.style.transition="5s ease-in-out";
        welcP.style.opacity="1"
        
    
        welcTwo.style.transition="5s ease-in-out";
        welcTwo.style.transform="translateY(-40px)";
        welcTwo.style.boxShadow="0px -5px 10px wheat";
    
        welcTwoP.style.transform="translateX(-200px)"
        welcTwoP.style.transition="5s ease-in-out";
    }, 1000);
} else {
    setTimeout(() => {
        //mobile
    welc.style.transition="5s ease-in-out";
    welc.style.transform="translateY(45px)";
    welc.style.boxShadow="0px 5px 10px wheat";

    welcP.style.transition="5s ease-in-out"
    welcP.style.opacity="1"

    welcTwo.style.transition="5s ease-in-out";
    welcTwo.style.transform="translateY(-45px)";
    welcTwo.style.boxShadow="0px -5px 10px wheat";
    }, 1000);
}





ham.addEventListener('click', () => {
    ham.classList.toggle('rotate')
    enlaces.classList.toggle('activado')
    barras.forEach(child => {
        child.classList.toggle('animado')
    })
})