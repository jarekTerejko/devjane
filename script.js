const navBtn = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")
const navLinks = document.querySelectorAll('.nav__link')

navBtn.addEventListener("click", ()=> {
    if(nav.classList.contains('open')) {
        nav.classList.remove('open')
        navBtn.classList.remove("open")
        nav.classList.add("closed")
    } else {
        nav.classList.remove('closed')
        navBtn.classList.add("open")
        nav.classList.add("open")
    }
    
})

navLinks.forEach(link=> {
    link.addEventListener('click', ()=> {
        if(nav.classList.contains('open')) {
            nav.classList.remove("open")
            navBtn.classList.remove('open')
        }
    })
})