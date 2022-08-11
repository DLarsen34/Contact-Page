const hambugerBtn = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
  navList.classList.toggle('show')
}

hambugerBtn.addEventListener('click', toggleButton)

