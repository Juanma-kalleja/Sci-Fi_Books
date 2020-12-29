// import lozad from 'lozad';

// Initialize library to lazy load images
// var observer = lozad('.lozad', {
//     threshold: 0.1,
//     load: function(el) {

//         //el.src = el.getAttribute('data-src');
//         // el.src = el.dataset.src;
//         el.setAttribute('src', el.getAttribute('data-src'))
//         el.setAttribute('srcset', el.getAttribute('data-srcset'))
//         console.log(el);
//         el.onload = function() {
//             el.classList.add('fade');
//             console.log(el.localName.toUpperCase() + " " + el.getAttribute("data-src") + " lazy loaded.")
//         }
//     }
// })
const observer = lozad('.lozad',{
    threshold: 0.1,
    load: function(el){
        el.src = el.getAttribute('data-src')
        el.srcset = el.getAttribute('data-srcset')
        el.classList.add('fade')
        console.log('lazy loaded', el.src);
    },
}); // lazy loads elements with default selector as '.lozad'
observer.observe();

// document.addEventListener("DOMContentLoaded", function() {
//     var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
//     if ("IntersectionObserver" in window) {
//       let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//           if (entry.isIntersecting) {
//             let lazyImage = entry.target;
//             console.log(lazyImage.dataset);
//             lazyImage.src = lazyImage.dataset.src;
//             lazyImage.srcset = lazyImage.dataset.srcset;
//             lazyImage.classList.remove("lazy");
//             lazyImageObserver.unobserve(lazyImage);
//           }
//         });
//       });
  
//       lazyImages.forEach(function(lazyImage) {
//         lazyImageObserver.observe(lazyImage);
//       });
//     } else {
//       // Possibly fall back to event handlers here
//     }
//   });

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
