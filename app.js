import lozad from 'lozad';

const observer = lozad('.lozad',{
    threshold: 0.1,
    load: function(el){
        
        el.src = el.getAttribute('data-src')
        if(el.dataset.srcset) {
        el.srcset = el.getAttribute('data-srcset')
       }
        el.classList.add('fade')
        console.log('lazy loaded', el.src);
        
        
    },
}); // lazy loads elements with default selector as '.lozad'
observer.observe();

const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.nav-menu');


menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
