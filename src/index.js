const hambugerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

const toggleButton = () => {
  navList.classList.toggle('show')
}

hambugerButton.addEventListener('click', toggleButton)

// * Adding smooth scrolling when a tag is clicked
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', function (e){
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})

