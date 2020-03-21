var navBtn = document.querySelector('.nav-button'),
    navbar = document.querySelector('.nav'),
    navPhoneBtn = document.querySelector('.nav-phone'),
    scrollIndicator = document.querySelector('.scroll-indicator'),
    navList = document.querySelector('.nav-list');


    navBtn.addEventListener('click', function(){
        navbar.classList.toggle('nav--open');
        scrollIndicator.classList.toggle('scroll-indicator--hidden');
        

        if (!navPhoneBtn.classList.contains('nav-phone--active')) {
            phoneDelay = setTimeout(function(){
                navPhoneBtn.classList.add('nav-phone--active');
            }, 1500);
        }
        else {
            navPhoneBtn.classList.remove('nav-phone--active');
        }

        if (!navList.classList.contains('nav-list--active')) {
            navListDelay = setTimeout(function(){
                navList.classList.add('nav-list--active');
            }, 500);
        }
        else {
            navList.classList.remove('nav-list--active');
        }


    });