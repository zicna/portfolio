const hambugerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const contactButton = document.getElementById('btn-contact')
const contactForm = document.getElementById('contact-form')
const btnCancelSubmit = document.getElementById('btn-cancel-submit')
const btnSubmitForm = document.getElementById('btn-submit-form')
const infoSection = document.getElementById('info-section')

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
contactButton.addEventListener('click', toggleForm)

function toggleForm() {
  if (
    contactForm.style.display === 'none' ||
    contactForm.style.display === ''
  ) {
    contactForm.style.display = 'block'
    contactButton.style.display = 'none'
  } else {
    contactForm.style.display = 'none'
    contactButton.style.display = 'block'
  }
}
btnCancelSubmit.addEventListener('click', () => {
  contactForm.style.display = 'none'
  contactButton.style.display = 'block'
})

btnSubmitForm.addEventListener('click', (e) => {
  if()
  contactForm.reset()
  toggleForm()
  window.alert('successful submition')

})
