const playButton = document.querySelector(".toggle");
const video = document.querySelector("video");
const progressBar = document.querySelector(".progress__filled");
const skipButtons = document.querySelectorAll("[data-skip]");
const progress = document.querySelector(".progress");
const ranges = document.querySelectorAll(".player__slider");

const togglePlay = () => {
  const method = video.paused ? "play" : "pause";
  video[method]();
};

const updateButton = () => {
  video.paused
    ? (playButton.textContent = "►")
    : (playButton.textContent = "❚ ❚");
};

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const handleSkip = (e) => {
  video.currentTime += parseFloat(e.target.dataset.skip);
};

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

const handleRangeUpdate = (e) => {
  console.log(e.target.name, e.target.value);
  video[e.target.name] = e.target.value;
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
skipButtons.forEach((button) => {
  button.addEventListener("click", handleSkip);
});
progress.addEventListener("click", scrub);
ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
});
