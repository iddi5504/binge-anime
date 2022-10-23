const nav = document.getElementById('nav');
const menuButton = document.getElementsByClassName('menu-button');
const hamburger = document.getElementsByClassName('hamburger');
const content = document.getElementById('firstcontent');
const observer = new IntersectionObserver((entry) => {
    entry.forEach(entry => {
        if (!entry.isIntersecting) {
            nav.classList.add('changenav')
        } else {
            nav.classList.remove('changenav')
        }
    })
},{
    threshold:0.9,
    rootMargin:"-10px 0px",

})

observer.observe(content)
console.log(content)

menuButton[0].addEventListener('click', (el)=>{
    if(el.target.attributes[0].value=='false'){
        el.target.setAttribute("show-hamburger","true")
        hamburger[0].classList.add("show-hamburger")
        
    }else{
        el.target.setAttribute("show-hamburger","false")
        hamburger[0].style.transfrom="translateX(-100px)"
        hamburger[0].classList.remove("show-hamburger")



    }
})