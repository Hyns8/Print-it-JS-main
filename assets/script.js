
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// 1. Sélection des flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// 2. Création des bullet points
const dotsContainer = document.querySelector(".dots");
const dots = [];

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (i === 0) {
        dot.classList.add("dot_selected");
    }

    dotsContainer.appendChild(dot);
    dots.push(dot);
}

// 3. Index de la diapositive actuelle
let currentSlide = 0;

// 4. Sélection de l'image et du texte
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// 5. Fonction de mise à jour du carrousel
function updateSlide() {

    bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;

    bannerText.innerHTML = slides[currentSlide].tagLine;

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot_selected");
    }

    dots[currentSlide].classList.add("dot_selected");
}

// Navigation vers la droite
arrowRight.addEventListener("click", function() {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    updateSlide();
});

// Navigation vers la gauche
arrowLeft.addEventListener("click", function() {
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }

    updateSlide();
});