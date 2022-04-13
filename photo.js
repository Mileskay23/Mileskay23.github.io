var b1 = document.getElementById("lotr");
var b2 = document.getElementById("onyx");
var image = document.getElementById("image");

function changeLOTR() {
	image.src = "Images/Purplecom.jpg";
}

function changeONYX() {
	image.src = "Images/onyx.jpg";
}

b1.addEventListener("click", changeLOTR);
b2.addEventListener("click", changeONYX);