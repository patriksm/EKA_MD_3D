document.addEventListener("keydown", (event) => {
	if(event.keyCode === 87){
		forward = velocity;
	}
	if(event.keyCode === 83){
		backward = velocity;
	}
	if(event.keyCode === 68){
		right = velocity;
	}
	if(event.keyCode === 65){
		left = velocity;
	}
});

document.addEventListener("keyup", (event) => {
	if(event.keyCode === 87){
		forward = 0;
	}
	if(event.keyCode === 83){
		backward = 0;
	}
	if(event.keyCode === 68){
		right = 0;
	}
	if(event.keyCode === 65){
		left = 0;
	}
});

document.addEventListener("mousemove", (event) => {
	mouseX = event.movementX;
	mouseY = event.movementY;
});

document.addEventListener("pointerlockchange", (event) => {
	lock = !lock;
});

container.onclick = function(){
	if(!lock){
		container.requestPointerLock();
	}
}