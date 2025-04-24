const videos =
document.quuerySelectorAll('video');

videos.forEach(video => {
    video.addEventListener ('mouseover', 
        () => {
            video.play();
        });

        video.addEventListener ('mouseout', 
            () => {
                video.pause();
                video.currentTime = 0;
            });
});