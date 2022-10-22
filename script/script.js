//dom hamburguesa
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');
//dom banner
const welc = document.getElementById("welc");
const welcP = document.querySelector("#welc p");
const welcTwo = document.getElementById("welc2");
const welcTwoP = document.querySelector("#welc2 p");
let banner = document.querySelector(".banner");
//dom drinks
const drinks = document.getElementById("drinks");
const meals = document.getElementById("meals");

//efecto banner
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

//boton hamburguesa
ham.addEventListener('click', () => {
    ham.classList.toggle('rotate')
    enlaces.classList.toggle('activado')
    barras.forEach(child => {
        child.classList.toggle('animado')
    })
})

//drinks section
class drinksContainer {
    constructor(imagen, idPhoto, imagenBlur){
        this.image = imagen
        this.idPhoto = idPhoto
        this.imagenBlur = imagenBlur
    }
}
//drinks
const articleUno = new drinksContainer ("./image/trago1.jpg", "drink1", "./image/trago1blur.jpg");
const articleDos = new drinksContainer ("./image/trago2.jpg", "drink2", "./image/trago2blur.jpg");
const articleTres = new drinksContainer ("./image/trago3.jpg", "drink3", "./image/trago3blur.jpg");
//comida
const articleCuatro = new drinksContainer ("./image/comida1.jpg", "meals1", "./image/comida1blur.jpg");
const articleCinco = new drinksContainer ("./image/comida2.jpg", "meals2", "./image/comida2blur.jpg");
const articleSeis = new drinksContainer ("./image/comida3.jpg", "meals3", "./image/comida3blur.jpg");

const drinksContainerHTML = [articleUno, articleDos, articleTres];
//fotos drinks
drinksContainerHTML.forEach(e => {
    drinks.innerHTML += `
    <div class="drinksContainer">
        <img class="drinksPhoto" id="${e.idPhoto}" src="${e.image}" alt="trago">
        <p class="drinksText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur saepe aperiam m
        </p>
    </div>`
})

const mealsContainerHTML = [articleCuatro, articleCinco, articleSeis];
//fotos meals
mealsContainerHTML.forEach(e => {
    meals.innerHTML += `
    <div class="drinksContainer">
        <img class="drinksPhoto" id="${e.idPhoto}" src="${e.image}" alt="comida">
        <p class="drinksText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur saepe aperiam m
        </p>
    </div>`
})

const id1 = document.getElementById("drink1");
const id2 = document.getElementById("drink2");
const id3 = document.getElementById("drink3");

const arrayPhoto = [id1, id2, id3];

const idMeal1 = document.getElementById("meals1");
const idMeal2 = document.getElementById("meals2");
const idMeal3 = document.getElementById("meals3");

const arrayPhotoMeal = [idMeal1, idMeal2, idMeal3, id1];


function agregarPhoto(id, src) {
    id.style.background = `url(${src})`
    id.style.backgroundSize = "cover"
}

for (let i = 0; i < arrayPhotoMeal.length; i++) {
    agregarPhoto(arrayPhoto[i], drinksContainerHTML[i].imagenBlur);
    agregarPhoto(arrayPhotoMeal[i], mealsContainerHTML[i].imagenBlur);
}

