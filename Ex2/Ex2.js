
function Kai() {
var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;	

//console.log(user + pass);

	if(user == '' || user == null){
		alert("Missing Username");
	} else if(pass == '' || password == null){
		alert("Missing Password");
	} else if (pass.length < 6) {
		alert("Password is too short, please input at least 6 characters!");
	} else {
		alert(user + "_" + pass);
	}

}
