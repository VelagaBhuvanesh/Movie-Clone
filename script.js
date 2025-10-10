const video = document.getElementById("bg-video");

// Loop start time in seconds
const loopStart = 66; // 1 minute 6 seconds

// When metadata is loaded, start video from loopStart
video.addEventListener('loadedmetadata', () => {
    if (video.duration > loopStart) {
        video.currentTime = loopStart;
        video.play();
    }
});

// Loop from loopStart to end of video
video.addEventListener('timeupdate', () => {
    if (video.currentTime < loopStart) {
        video.currentTime = loopStart;
    }
});
