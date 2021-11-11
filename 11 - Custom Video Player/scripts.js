// Get our Elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build our function
function togglePlay() {
  // const method = video.paused ? 'play' : 'pause'
  // video[method]()

  // or use an if statement like below:

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Hook up the event listeners
video.addEventListener("click", togglePlay);
