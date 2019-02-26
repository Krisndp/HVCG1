
var tinhToan = {
	sox: "",
	soy: "",
	cong: function () {
		return Number(this.sox) + Number(this.soy);
	},
	tru: function () {
		return Number(this.sox) - Number(this.soy);
	},
	nhan: function () {
		return Number(this.sox) * Number(this.soy);
	},
	chia: function () {
		return Number(this.sox) / Number(this.soy);
	}, 
};

// tinhToan.cong = function (x,y) {
// 	return Number(x) + Number(y);
// };




function calculate(id) {
	tinhToan.sox = document.getElementById("sox").value;
	tinhToan.soy = document.getElementById("soy").value;
	
	if(id == "cong") {
		document.getElementById("ketqua").value = tinhToan.cong();
	}

	if(id == "tru") {
		document.getElementById("ketqua").value = tinhToan.tru();
	}

	if(id == "nhan") {
		document.getElementById("ketqua").value = tinhToan.nhan();
	}
	if(id == "chia") {
		document.getElementById("ketqua").value = tinhToan.chia();
	}

}


function tru(x,y) {
	return x - y;
}

function nhan(x,y) {
	return x * y;
}

function chia(x,y) {
	return x / y;
}