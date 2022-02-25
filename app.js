function randomColor(){
	let red = Math.floor(Math.random()*256);
	let green = Math.floor(Math.random()*256);
	let blue = Math.floor(Math.random()*256);

	return {color:`rgb(${red},${green},${blue})`, r:red,g:green,b:blue};

}

let btn = document.querySelector(".btn");
let body = document.querySelector("#body");
let red = document.querySelector("#redValue");
let green = document.querySelector("#greenValue");
let blue = document.querySelector("#blueValue");


btn.addEventListener("click", function(){

	let color = randomColor();
	body.style.backgroundColor = color.color;
	btn.style.backgroundColor= color.color;

	red.innerHTML = color.r;
	green.innerHTML = color.g;
	blue.innerHTML = color.b;
});

