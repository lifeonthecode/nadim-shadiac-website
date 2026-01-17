
const header = document.querySelector(".header-section");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});


const toggle = document.querySelector('.menu-toggle');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
toggle.onclick = () => {
    toggle.classList.toggle('active');
    mobileMenuContainer.classList.toggle('active')
};




const slide = new Splide('#text-slider', {
    type: 'loop',
    autoplay: true,
    interval: 2000,
    speed: 1000,          
    easing: 'ease-in-out',
    arrows: false,
    pagination: false,
    perPage: 3,
    perMove: 1,
    padding: { right: '50px' },

    breakpoints: {
        1024: {
            perPage: 2,  
            padding: { right: '20px' }
        },
        768: {
            perPage: 1,   
            padding: { right: '15px' }
        }
    }
});

slide.mount();


