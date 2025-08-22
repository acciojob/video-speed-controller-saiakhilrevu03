const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const skip = document.querySelector('.skip');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

toggle.addEventListener('click', () => {
  if(video.paused) video.play();
  else video.pause();
  toggle.textContent = video.paused ? '►' : '❚ ❚';
});

rewind.addEventListener('click', () => video.currentTime -= 10);
skip.addEventListener('click', () => video.currentTime += 25);

volume.addEventListener('input', () => video.volume = volume.value);
playbackSpeed.addEventListener('input', () => video.playbackRate = playbackSpeed.value);

video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
});

progress.addEventListener('click', e => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
});
