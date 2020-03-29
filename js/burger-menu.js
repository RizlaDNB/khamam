var burgerBtn = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger-menu');

    burgerBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        burgerBtn.classList.toggle('burger--active');
        burgerMenu.classList.toggle('burger-menu--active');
    });