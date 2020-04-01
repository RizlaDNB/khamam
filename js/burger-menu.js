var burgerBtn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger-menu'),
    burgerLink = document.querySelectorAll('.burger-menu-text'),
    body = document.querySelector('body');

    burgerBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        burgerBtn.classList.toggle('burger--active');
        burgerMenu.classList.toggle('burger-menu--active');
        body.classList.toggle('body--lock');
    });

    for (i = 0; i < burgerLink.length; i++) {
        burgerLink[i].addEventListener('click', function(){
            burgerBtn.classList.remove('burger--active');
            burgerMenu.classList.remove('burger-menu--active');
            body.classList.remove('body--lock');
        });
    };