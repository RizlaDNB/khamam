var navBtn = document.querySelector('.nav-button'),
    navbar = document.querySelector('.nav'),
    headerPhone = document.querySelector('.header-phone'),
    scrollIndicator = document.querySelector('.scroll-indicator');

    navBtn.addEventListener('click', function(){
        navbar.classList.toggle('nav--open');
        headerPhone.classList.toggle('header-phone--navbar');
        scrollIndicator.classList.toggle('scroll-indicator--hidden');
    });