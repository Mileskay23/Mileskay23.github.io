
function checkPass(){
	if (document.getElementById("password").value == "password"){
    document.getElementById("access").innerHTML = "ACCESS GRANTED"
	}	
	else{
		document.getElementById("access").innerHTML = "ACCESS DENIED"
	}	
}

document.getElementById("submit").addEventListener("click", checkPass)
