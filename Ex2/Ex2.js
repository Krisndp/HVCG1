
function Kai() {
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;	
//abc123@gmail.com
var regularEx = new RegExp("[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]{3,6}");
var regularEx1 = new RegExp("[0-9]{9,9}");

//console.log(user + pass);

	if(regularEx1.test(phone) && phone.charAt(0) == "0" && phone.charAt(1) == "9"){
		alert("Email accepted!");
	} else {
		alert("Not valid Email");
	}

}
