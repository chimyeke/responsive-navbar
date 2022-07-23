const menuBar = document.getElementsByClassName('menuBar')[0]
const navbarLinksWrapper = document.getElementsByClassName('navbarLinksWrapper')[0]

menuBar.addEventListener('click', () => { navbarLinksWrapper.classList.toggle('active') })
