const header = document.querySelector('header')
const close = document.querySelector('.close')
const menu = document.querySelector('.nav-btn')

menu.addEventListener('click', () => {
    header.classList.add('on')
})

close.addEventListener('click', () => {
    header.classList.remove('on')
})

