let menu = document.querySelector('#menu-bars');
let menui = document.querySelector('#click');

let navbar = document.querySelector('.navbar');

let sction = document.querySelectorAll('section');
let navlink=document.querySelectorAll('header .navbar a')

console.log(menui)
menu.addEventListener('click', (e) => {
    
    menui.classList.toggle('fa.times');
    navbar.classList.toggle('active')
})

window.onscroll=() => {
    
  menui.classList.remove('fa.times');
  navbar.classList.remove('active');


  sction.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;

    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navlink.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active')
      })
    }
  })
}

document.querySelector('#search-icon').addEventListener(('click') ,()=> {
    document.querySelector('#search-form').classList.toggle('active')
})
document.querySelector('#cloes').addEventListener(('click') ,()=> {
    document.querySelector('#search-form').classList.remove('active')
})
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".myswiper", {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop:true,
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 5000)}s`;
      }
    }
  });

  
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView:1
      },
      640: {
        slidesPerView:2
      },
      768: {
        slidesPerView:2
      },
      1024: {
        slidesPerView:3
      },
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 5000)}s`;
      }
    }
  });

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out')
}
  
function fadeout() {
  setInterval(loader,3000)
}

window.onload = fadeout;