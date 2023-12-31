//the arrow in dropbox
const arrows = document.querySelectorAll('.dropbox__icon')
// to open and close the dropdox on click
arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        const dropbox = arrow.parentNode
        dropbox.classList.toggle('dropbox--open')
    })
})

// the hamburger menu
const hamburger = document.querySelector('.hamburger')

// to open and close the menu on click
hamburger.addEventListener('click', () => {
    const parent = hamburger.parentNode
    parent.classList.toggle('menu--open')
})