var navBtn = document.querySelector('.nav-button'),
    navbar = document.querySelector('.nav'),
    navPhoneBtn = document.querySelector('.nav-phone');
    scrollIndicator = document.querySelector('.scroll-indicator');


    navBtn.addEventListener('click', function(){
        navbar.classList.toggle('nav--open');
        scrollIndicator.classList.toggle('scroll-indicator--hidden');
        

        if (!navPhoneBtn.classList.contains('nav-phone--active')) {
            phoneDelay = setTimeout(function(){
                navPhoneBtn.classList.add('nav-phone--active');
            }, 1000);
        }
        else {
            navPhoneBtn.classList.remove('nav-phone--active');
        }

    });