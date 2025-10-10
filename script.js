const video = document.getElementById("bg-video");

// Loop segment: 2:07 to 2:37
const loopStart = 127; // 2 minutes 7 seconds in seconds
const loopEnd = 157;   // 2 minutes 37 seconds in seconds

// Start video from loopStart once metadata is loaded
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
