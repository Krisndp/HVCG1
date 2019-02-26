
function abc() {
	var x = document.getElementsByTagName("th");
	// console.log(x);
	for (var i of x) {
		//alert(x);
		//console.log(x[i]);
		if( Number(i.innerHTML) < 5 ){
			i.style.color = "red";
		}

	}
}