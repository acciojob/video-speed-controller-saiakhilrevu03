const video = document.querySelector('.flex');
const speedBar = document.querySelector(".speed-bar");
const speedContainer = document.querySelector('.speed');
let isDragging=false;

function handleSpeed(e){
	const rect = speedContainer.getBoundingClientRect();
	const percent = Math.min(Math.max((e.clientX-rect.left)/rect.width,0),1)
	const minSpeed = 0.5;
	const maxSpeed = 2;
	const speed = (percent*(maxSpeed-minSpeed)+minSpeed).toFixed(2);

	speedBar.textContent = `${speed}x`;
	video.playbackRate = speed;
}

speedContainer.addEventListener('mousedown',()=>isDragging=true);
speedContainer.addEventListener('mouseup',()=>isDragging=false);
speedContainer.addEventListener('mouseleave',()=>isDragging=false);
speedContainer.addEventListener('mousemove',()=>isDragging && handleSpeed(e))
	
speedContainer.addEventListener('click',handleSpeed);