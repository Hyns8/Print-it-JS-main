const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des flèches
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Navigation vers la diapositive suivante
arrowRight.addEventListener("click", function() {
    currentSlide++;
    updateSlide();
});

// Navigation vers la diapositive précédente
arrowLeft.addEventListener("click", function() {
    currentSlide--;
    updateSlide();
});

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

// Index de la diapositive actuellement affichée
let currentSlide = 0;

// Sélection de l'image et du texte du carrousel
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;
bannerText.innerHTML = slides[currentSlide].tagLine;

function updateSlide() {

    // Changer l'image
    bannerImg.src = "./assets/images/slideshow/" + slides[currentSlide].image;

    // Changer le texte
    bannerText.innerHTML = slides[currentSlide].tagLine;

    // Actualiser le bullet point actif
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot_selected");
    }

    dots[currentSlide].classList.add("dot_selected");
}
