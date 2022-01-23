# VideoOverlay
###  Author: Stanley M.
### Date: 2022/01/22

## Brief Description: 

Simple html page with a video element that has an updated source from the two links


## Expanded: 

The main feature of this page is that the two links and a button each provide the name of a different mp4 file and pass it to a JS function; which is used to open an overlay and show the video element.

This overlay can be closed, but won't reload the video source from a previous video if the sources are the same. This ensures the video doesn't reload if paused and reopened. However, if a different video is selected the video source is reset and the new video is played.

### JS Functions

The main functions are as follows:

- openNav(param)

    This function calls the setVideoSource(param) function and sets the videoNav display 
    
        document.getElementById("videoNav").style.display = "block";
  
- closeNav()

  Function calls the pauseVideo() function can sets the videoNav display to "none"
  
- setVideoSource(param)

    Meat and potatoes of the repo. The passed param is the video name from the original event caller (either anchor or button; onclick fire).
    
    *param = videoName*

        function setVideoSource(videoName) {...
    
    Starts by finding video player element and creates the video folder variable, followed by getting the current video source. The new video name is added to the video folder for a new source variable. 
    
    The video folder is used to substring the current source name down to the folder and file name. (This is needed as the video element may have reset the source attribute to a longer path then we write it as).
    
    The two short source names are written to the console log before an if/else statement is used to compare the sources. If they are not the same, the source is reset
    
- pauseVideo()

    Simple function that finds the video control element and then sets the element to pause.
    

### CSS

The majority of CSS was taken from W3Schools, using the provided overlay classes and trigger styles. I repurposed the full screen overlay tha can be found from this link: [w3Schools full-screen overlay](https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp)

Additionally some custom css was added for the video tag  to get the proper responsive size within the overlays. 

The button css was taken from this link: [w3Schools Buttons](https://www.w3schools.com/css/css3_buttons.asp)

### Video Files

It should further be noted that no mp4/video files are provided with this demo. 

Original test names are leftover in the repo and were used for testing potential new features. 

If you desire to modify this demo for your own mp4 tests, I recommend saving local copies of the html, css, and js files (the js and css files are both contained in a root src directory)

New mp4's can be saved in either a new *videos* folder or another folder of your choice, however be sure to update the video folder name in the setVideoSource(param) function. This should be the only place in the JS an update is required.

In the html, a modification will need to occur in each event trigger (anchor or button tags); as the openNav(param) function will take the name of the mp4 file.
