const arrows = document.querySelectorAll('.dropbox__icon')
arrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        const dropbox = arrow.parentNode
        dropbox.classList.toggle('dropbox--open')
        console.log(dropbox);
    })
})