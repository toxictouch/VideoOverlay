/* 
 * Function opens the overlay and sets tghe video source
 */
function openNav(video) {
    
    var videoFolder = "videos/";
    
    var videoPlayer = document.getElementById('videoControl');
    videoPlayer.src = videoFolder + video;
    
    
    document.getElementById("myNav").style.display = "block";
}

/*
 * Function pauses the played video and closes the overlay
 */
function closeNav() {
  
    var video = document.getElementById('videoControl');
    video.pause();

    document.getElementById("myNav").style.display = "none";
}

