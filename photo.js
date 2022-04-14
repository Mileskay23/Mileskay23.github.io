var b1 = document.getElementById("lotr");
var b2 = document.getElementById("onyx");
var b3 = document.getElementById("wierd");
var b4 = document.getElementById("yo");
var b5 = document.getElementById("planet");
var b6 = document.getElementById("mario");
var b7 = document.getElementById("cat");
var b8 = document.getElementById("guy");
var b9 = document.getElementById("panda");
var b10 = document.getElementById("dog");
var image = document.getElementById("image");

function changeLOTR() {
	image.src = "Purplecom.jpg";
}

function changeONYX() {
	image.src = "60b922.png";
}

function changeWIERD() {
	image.src = "download.jfif";
}

function changeYO() {
	image.src = "yo.jfif";
}

function changePLANET() {
	image.src = "planet.jfif";
}

function changeMARIO() {
	image.src = "mario.jfif";
}

function changeCAT() {
	image.src = "cat.jfif";
}

function changeGUY() {
	image.src = "Guy.jfif";
}

function changePANDA() {
	image.src = "panda.jfif";
}

function changeDOG() {
	image.src = "dog.jfif";
}

b1.addEventListener("click", changeLOTR);
b2.addEventListener("click", changeONYX);
b3.addEventListener("click", changeWIERD);
b4.addEventListener("click", changeYO);
b5.addEventListener("click", changePLANET);
b6.addEventListener("click", changeMARIO);
b7.addEventListener("click", changeCAT);
b8.addEventListener("click", changeGUY);
b9.addEventListener("click", changePANDA);
b10.addEventListener("click", changeDOG);