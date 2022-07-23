const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})

window.addEventListener('scroll', function () {
  let header = document.querySelector('header')

  header.classList.toggle('nav-link-scrolling', window.scrollY > 800)
})

const text = document.querySelector(".wavy-text")
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")
const element = document.querySelectorAll('span')
for (let i=0; i<element.length; i++) {
  element[i].style.animationDelay = i*0.05 + 's';
}

const section = document.querySelectorAll("section")
const link = document.querySelectorAll(".nav-link")
function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  link.forEach(ltx => ltx.classList.remove("nav-link-active"))
  link[len].classList.add("nav-link-active")
}
activeMenu()
window.addEventListener("scroll", activeMenu)
