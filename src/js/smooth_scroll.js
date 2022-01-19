import { smoothScroll, currentYPosition } from './scroll.js'

const links = document.querySelectorAll('.menu-link')
const scrollBtn = document.querySelector('.scroll__button')

links.forEach(link => link.addEventListener('click', linkHandler))

function linkHandler(e) {
  e.preventDefault()
  const target = this
  const element = target.getAttribute('href')
  smoothScroll(element.substr(1))
}

window.addEventListener('scroll', function () {
  if (currentYPosition() > this.innerHeight) {
    scrollBtn.classList.add('show')
  } else {
    scrollBtn.classList.remove('show')
  }
})

scrollBtn.addEventListener('click', () => {
  smoothScroll('header')
})
