var navBtn = document.querySelector('.nav-button'),
    navbar = document.querySelector('.nav'),
    navPhoneBtn = document.querySelector('.nav-phone'),
    scrollIndicator = document.querySelector('.scroll-indicator'),
    navList = document.querySelector('.nav-list'),
    navLink = document.querySelectorAll('.nav-text__link');


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
            navList.classList.add('nav-list--active');
        }
        else {
            navList.classList.remove('nav-list--active');
        }


    });

    for (i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', function(){
            navList.classList.remove('nav-list--active');
            navbar.classList.remove('nav--open');
            navPhoneBtn.classList.remove('nav-phone--active');
        });
    };