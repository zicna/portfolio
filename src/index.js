const hambugerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const contactButton = document.getElementById('btn-contact')
const btnCancelSubmit = document.getElementById('btn-cancel-submit')
const btnSubmitForm = document.getElementById('btn-submit-form')
const infoSection = document.getElementById('info-section')
// * form and form inputs
const contactForm = document.getElementById('contact-form')
const inputName = document.getElementById('name')
const inputEmail = document.getElementById('email')
const inputMessage = document.getElementById('message')

const toggleButton = () => {
  navList.classList.toggle('show')
}
hambugerButton.addEventListener('click', toggleButton)

// * Adding smooth scrolling when a tag is clicked
// document.querySelectorAll('a[href^="#"]').forEach((a) => {
//   a.addEventListener('click', function (e) {
//     e.preventDefault()
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth',
//     })
//   })
// })

// * show form when contact button is clicked and change display contact button
const toggleForm = () => {
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
contactButton.addEventListener('click', toggleForm)
btnCancelSubmit.addEventListener('click', toggleForm)


btnSubmitForm.addEventListener('click', (e) => {
  if (
    inputName.value === '' ||
    inputEmail.value === '' ||
    inputMessage.value === ''
  ) {
    window.alert('Wrong request! Please fill in all fields. ')
  } else {
    contactForm.reset()
    toggleForm()
    setTimeout(() => alert('Thank you for contacting me!'), 1000)
  }
})
