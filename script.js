const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('video');

function handleMove(e) {
  const y = e.pageY - speed.offsetTop;         // mouse position inside scrubber
  const percent = y / speed.offsetHeight;      // percentage along scrubber
  const min = 0.4;                             // minimum speed
  const max = 4;                               // maximum speed
  const playbackRate = percent * (max - min) + min;
  
  bar.style.height = `${Math.round(percent * 100)}%`;
  bar.textContent = playbackRate.toFixed(2) + '×';
  
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
