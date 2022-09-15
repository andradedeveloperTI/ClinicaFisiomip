
// ###### BTN MENU

const btnMenu = document.querySelector('.js-btn-menu')
const menu = document.querySelector('.js-menu-principal-ul')
const html = document.querySelector('html')
const dash01 = document.querySelector('.js-btn-menu__dash01')
const dash02 = document.querySelector('.js-btn-menu__dash02')
const dash03 = document.querySelector('.js-btn-menu__dash03')

btnMenu.addEventListener('click', function() {
    dash01.classList.toggle('is-click-dash01')
    dash02.classList.toggle('is-click-dash02')
    dash03.classList.toggle('is-click-dash03')
    menu.classList.toggle('transicao-menu-ul')
    html.classList.toggle('overflow-html')
})

menu.addEventListener('click', e => {
    const classesObjetivo = ['js-menu-ul']
    const clickAlvo = e.target.classList[1]
    const objetivo = classesObjetivo.some(e => e === clickAlvo)

    if (!objetivo) {
        dash01.classList.remove('is-click-dash01')
        dash02.classList.remove('is-click-dash02')
        dash03.classList.remove('is-click-dash03')
        menu.classList.remove('transicao-menu-ul')
        html.classList.remove('overflow-html')
    }
})

// ########## SLIDER

let cards = document.querySelectorAll(".js-card")
let time = 4000
let currentImageIndex = 0
let max = cards.length;

function nextImage() {

    cards[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }

    cards[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)


// #########  EFEITO NA OPACIDADE DOS ELEMENTOS  ################
// 
// primeiro adiciono opacidade 0 nos elementos se baseando na proporção do elemento em relação a tela
// essa primeira função é carregada no load da página para preprarar os elementos
// a segunda função é ativada na rolagem do mouse, que adiciona uma transição e opacidade 1 nos elementos 

var objs = document.querySelectorAll('.js-an .js-an-it')
var alturaJanela = window.innerHeight

function menosOpacidade() {

    objs.forEach(e => {
        if ((e.getBoundingClientRect().top) > (alturaJanela)) {
            e.style.transition = "opacity 1000ms ease-in-out"
            e.style.opacity = 0
        }
    })
}

window.addEventListener('load', menosOpacidade)

function maisOpacidade() {
    objs.forEach(e => {
        if ((e.getBoundingClientRect().top + 50) < (alturaJanela)) {
            e.style.opacity = 1
        }
    })
}

window.addEventListener('scroll', maisOpacidade)


