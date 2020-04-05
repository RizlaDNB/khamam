var modalWindow = document.querySelector('.modal-consult'),
    modalUnderlay = document.querySelector('.modal-consult-underlay'),
    modalCloseBtn = document.querySelector('.modal-consult-form-close'),
    modalOpenLink = document.querySelectorAll('.modal-open');

    for (i = 0; i < modalOpenLink.length; i++) {

        modalOpenLink[i].addEventListener('click', function(evt){
            evt.preventDefault();
            modalWindow.classList.add('modal-consult--active');

        });

    }

    modalUnderlay.addEventListener('click', function(){
        modalWindow.classList.remove('modal-consult--active');
    });

    modalCloseBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        modalWindow.classList.remove('modal-consult--active');
    });