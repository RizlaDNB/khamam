var headerLinkHammam = document.querySelector('.hover-link--hammam'),
    underlayHammam = document.querySelector('.hover-link__underlay--hammam'),
    imageHammam = document.querySelector('.hover-img--hammam'),
    headerLinkSauna = document.querySelector('.hover-link--sauna'),
    underlaySauna = document.querySelector('.hover-link__underlay--sauna'),
    imageSauna = document.querySelector('.hover-img--sauna'),
    headerPhone = document.querySelector('.header-phone'),
    body = document.querySelector('body'),
    header = document.querySelector('.header');


    headerLinkHammam.addEventListener('mouseover', function(evt){
        headerLinkHammam.classList.add('hover-link--zindex');
        underlayHammam.classList.add('underlay-hammam--active');
        imageHammam.classList.add('hover-img--active');
        body.classList.add('hover__body--pleft');
        header.classList.add('header--pleft');
        headerPhone.classList.add('header-phone--hover');
    });

    headerLinkHammam.addEventListener('mouseout', function(evt){
        headerLinkHammam.classList.remove('hover-link--zindex');
        underlayHammam.classList.remove('underlay-hammam--active');
        imageHammam.classList.remove('hover-img--active');
        body.classList.remove('hover__body--pleft');
        header.classList.remove('header--pleft');
        headerPhone.classList.remove('header-phone--hover');
    });


    headerLinkSauna.addEventListener('mouseover', function(evt){
        headerLinkSauna.classList.add('hover-link--zindex');
        underlaySauna.classList.add('underlay-sauna--active');
        imageSauna.classList.add('hover-img--active');
        body.classList.add('hover__body--pleft');
        header.classList.add('header--pleft');
        headerPhone.classList.add('header-phone--hover');
    });

    headerLinkSauna.addEventListener('mouseout', function(evt){
        headerLinkSauna.classList.remove('hover-link--zindex');
        underlaySauna.classList.remove('underlay-sauna--active');
        imageSauna.classList.remove('hover-img--active');
        body.classList.remove('hover__body--pleft');
        header.classList.remove('header--pleft');
        headerPhone.classList.remove('header-phone--hover');
    });