const hambugerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const contactButton = document.getElementById('btn-contact')
const contactForm = document.getElementById('contact-form')
const btnCancelSubmit = document.getElementById('btn-cancel-submit')
const btnSubmitForm = document.getElementById('btn-submit-form')

const toggleButton = () => {
  navList.classList.toggle('show')
}
hambugerButton.addEventListener('click', toggleButton)

// * Adding smooth scrolling when a tag is clicked
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    })
  })
})
// * show form when contact button is clicked and change display contact button
contactButton.addEventListener('click', () => {
  console.log('contact me ahs been clicked')
  if (contactForm.style.display === 'none') {
    contactForm.style.display = 'block'
    contactButton.style.display = 'none'
  } else {
    contactForm.style.display = 'none'
  }
})

btnCancelSubmit.addEventListener('click', () => {
    contactForm.style.display = 'none'
    contactButton.style.display = 'block'
})




