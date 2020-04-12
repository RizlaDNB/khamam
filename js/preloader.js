var images = document.images,
    imagesTotalCount = images.length,
    imagesLoadedCount = 0,
    body = document.querySelector('body'),
    percentProgress = document.getElementById('load-percentage'),
    preloader = document.querySelector('.preloader-wrapper'),
    preloaderAfter = document.querySelector('.preloader__after');



    for(var i = 0; i < imagesTotalCount; i++) {
        imageClone = new Image();
        imageClone.onload = imagesLoaded;
        imageClone.onerror = imagesLoaded;
        imageClone.src = images[i].src;
    }

    function imagesLoaded() {
        imagesLoadedCount++;

        percentProgress = (( (100 / imagesTotalCount) * imagesLoadedCount ) <<0);
        document.getElementById('preloaderProgressBar').style.width = percentProgress + "%";
        
        if (imagesLoadedCount >= imagesTotalCount) {
            setTimeout(function() {
                preloaderAfter.style.top = 0 + "%";
            }, 500);
        }

        setTimeout(function() {
            if (preloaderAfter.style.top = 0 + "%") {
                if (!preloader.classList.contains('loading-done')) {
                    preloader.classList.add('loading-done');
                }

                body.classList.remove('body--lock');
                preloaderAfter.style.top = -100 + "%";
            }
        }, 2500);
    }