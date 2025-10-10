const video = document.getElementById("bg-video");

// Loop segment from 1:30 to 2:10
const loopStart = 90;
const loopEnd = 130;

video.addEventListener("loadedmetadata", () => {
  if (video.duration > loopStart) {
    video.currentTime = loopStart;
    video.play();
  }
});

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= loopEnd) {
    video.currentTime = loopStart;
    video.play();
  }
});
