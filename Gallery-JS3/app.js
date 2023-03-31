const popImage = document.querySelector('.popup-image')
const mainImg = document.querySelector('.main-img')
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let container = document.querySelector('.container')
let head = document.querySelector('.head h1')

function myFunc (item) {
    popImage.style.display = 'flex';
    mainImg.src = item
}

function myNewFunc () {
    popImage.style.display = 'none'
}

moon.addEventListener('click', () =>{
    moon.classList.add('hidden')
    sun.classList.remove('hidden')
    container.style.background = '#111222'
    container.style.color = '#fff'
    head.style.color = '#fff'
})

sun.addEventListener('click', () =>{
    moon.classList.remove('hidden')
    sun.classList.add('hidden')
    container.style.background = '#ddd'
    container.style.color = '#111222'
    head.style.color = '#111222'
})

