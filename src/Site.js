/*
 Author: Stanley M.
 Date: 2022/01/22
 */


/*
 * Function opens the overlay and sets tghe video source
 */
function openNav(videoName) {
    
    setVideoSource(videoName);
    
    document.getElementById("videoNav").style.display = "block";
};

/*
 * Function pauses the played video and closes the overlay
 */
function closeNav() {
  
    pauseVideo();

    document.getElementById("videoNav").style.display = "none";
};


/*
 Function takes the video name and compares it to the on screen src,
 If the sources are different the video element has a new source set;
 but if they are the same nothing happens (ensuring the video resumes)
 */
function setVideoSource(videoName) {
    
    //Get the video element
    var videoPlayer = document.getElementById('videoControl');
    var videoFolder = "videos/";
    
    //Get the current video source and create the potential new source
    var origSource = videoPlayer.src;
    var newSource = videoFolder + videoName;
    
    //Find the index of the videos folder from the video element and substring only that folder and the video file name
    //NOTE: This is done because the video element may show a long path then we will write too
    var cleanOrigSource = origSource.substring(origSource.search(videoFolder));
    
    //Write the two sources to the console for quick troubleshooting
    console.log('original source: '+ cleanOrigSource + ' | new source: ' + newSource);
    
    //Compare the sources to determine if a reload is needed
    if (cleanOrigSource != newSource) {
        videoPlayer.src = newSource;
        return;
    }
    else
        return;
};

/*
 Consolidated location for video functionality. Does exactly what it says
 */
function pauseVideo(){
    
    var video = document.getElementById('videoControl');
    video.pause();
};
