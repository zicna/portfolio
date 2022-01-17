const hambugerButton = document.getElementById("hamburger")
const navList = document.getElementById("nav-list")

const toggleButton = () => {
    navList.classList.toggle("show")
}

hambugerButton.addEventListener("click", toggleButton)