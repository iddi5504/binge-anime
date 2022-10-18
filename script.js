const nav = document.getElementById('nav');
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
