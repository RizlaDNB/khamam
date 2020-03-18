var images = document.images,
    imagesTotalCount = images.length,
    imagesLoadedCount = 0,
    percentProgress = document.getElementById('load-percentage'),
    preLoader = document.querySelector('.preloader-wrapper');



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
                if (!preLoader.classList.contains('loading-done')) {
                    preLoader.classList.add('loading-done');
                }
            }, 1500);
        }
    }