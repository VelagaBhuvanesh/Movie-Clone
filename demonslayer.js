const video = document.getElementById("bg-video");

// Loop segment from 20s to 1:33
const loopStart = 20; // start time in seconds
const loopEnd = 66;   // end time in seconds

// Start video from loopStart
video.addEventListener('loadedmetadata', () => {
  if (video.duration > loopStart) {
    video.currentTime = loopStart;
    video.play();
  }
});

// Loop the segment
video.addEventListener('timeupdate', () => {
  if (video.currentTime >= loopEnd) {
    video.currentTime = loopStart;
    video.play();
  }
});

