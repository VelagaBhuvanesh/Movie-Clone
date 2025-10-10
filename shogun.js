const video = document.getElementById("bg-video");

// Loop section — customize based on your trailer
const loopStart = 10;
const loopEnd = 95;

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
