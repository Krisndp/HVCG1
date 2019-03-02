setInterval(run,1000);
var banh = ["banh1.jpg","banh2.jpg","banh3.jpg","banh4.jpg","banh5.jpg","banh6.jpg"] 
var i = 0;
function run(){
	if(i > banh.length - 1){
		i = 0;
	}
	document.getElementById("im").src = banh[i];
	i++;
}