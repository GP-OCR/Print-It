/* ===== Carousel ===== */
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
]

let currentIndex = 0

const dotsContainer = document.querySelector(".dots")
const bannerImg = document.querySelector(".banner-img")
const bannerText = document.querySelector("#banner p")
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

slides.forEach((_, i) => {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	if (i === 0) dot.classList.add("dot_selected")
	dot.addEventListener("click", () => {
		currentIndex = i
		updateSlide(currentIndex)
	})
	dotsContainer.appendChild(dot)
})

function updateSlide(index) {
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`
	bannerText.innerHTML = slides[index].tagLine
	document.querySelectorAll(".dot").forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index)
	})
}

arrowRight.addEventListener("click", () => {
	currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
	updateSlide(currentIndex)
})

arrowLeft.addEventListener("click", () => {
	currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
	updateSlide(currentIndex)
})

/* ===== Burger menu ===== */
const burger = document.querySelector(".burger")
const mainNav = document.getElementById("main-nav")

burger.addEventListener("click", () => {
	const isOpen = burger.getAttribute("aria-expanded") === "true"
	burger.setAttribute("aria-expanded", String(!isOpen))
	burger.setAttribute("aria-label", isOpen ? "Ouvrir le menu" : "Fermer le menu")
	mainNav.classList.toggle("open")
})

mainNav.querySelectorAll("a").forEach(link => {
	link.addEventListener("click", () => {
		if (mainNav.classList.contains("open")) {
			burger.setAttribute("aria-expanded", "false")
			burger.setAttribute("aria-label", "Ouvrir le menu")
			mainNav.classList.remove("open")
		}
	})
})
