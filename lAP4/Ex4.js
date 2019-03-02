// Laays ngay htai
// lay h p g hienj
// gan 3 cai vao span
// setIntervaal : 1s 





// var x = date.getHours();
// var y = date.getMinutes();
// var z = date.getSeconds();
// document.getElementById("gio").innerHTML = x;
// document.getElementById("phut").innerHTML = y;
// document.getElementById("giay").innerHTML = z;

setInterval(run,1000);

function run(){

	var date = new Date;
	document.getElementById("giay").innerHTML = date.getSeconds();
	document.getElementById("phut").innerHTML = date.getMinutes();
	document.getElementById("gio").innerHTML = date.getHours();
}

