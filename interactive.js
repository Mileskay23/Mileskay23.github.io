var count = 0;

function sub0ne() {
	count = count - 1;	
	document.getElementById("total").innerHTML=count;
	
	if (count == 68){
		document.getElementById("total").innerHTML = "NICE";
	}
}

function add0ne() {
	count = count + 1;
	document.getElementById("total").innerHTML=count;
	
	if (count == 68){
		document.getElementById("total").innerHTML = "NICE";
	}
}

function multiply() {
	count = count * 10;
	document.getElementById("total").innerHTML=count;
}

function divide() {
	count = count / 2;
	document.getElementById("total").innerHTML=count;
}

function minus3() {
	count = count - 3;	
	document.getElementById("total").innerHTML=count;
}

function plus100() {
	count = count + 100;
	document.getElementById("total").innerHTML=count;
}

document.getElementById("minus").addEventListener("click", sub0ne);
document.getElementById("plus").addEventListener("click", add0ne);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);
document.getElementById("minus3").addEventListener("click", minus3);
document.getElementById("plus100").addEventListener("click", plus100);