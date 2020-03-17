var images = document.images,
    imagesTotalCount = images.length,
    imagesLoadedCount = 0,
    percentDisplay = document.getElementById('load-percentage'),
    preLoader = document.querySelector('.preloader-wrapper');



    for(var i = 0; i < imagesTotalCount; i++) {
        imageClone = new Image();
        imageClone.onload = imagesLoaded;
        imageClone.onerror = imagesLoaded;
        imageClone.src = images[i].src;
    }

    function imagesLoaded() {
        imagesLoadedCount++;

        percentDisplay.innerHTML = (( (100 / imagesTotalCount) * imagesLoadedCount ) <<0) + '%';

        if (imagesLoadedCount >= imagesTotalCount) {
            setTimeout(function() {
                if (!preLoader.classList.contains('loading-done')) {
                    preLoader.classList.add('loading-done');
                }
            }, 1800);
        }
    }