var toanHang1 = "";
var toanHang2 = "";
var toanTu = "";
var tenToanTu = "";


function main(){
	// //nsole.log(tenToanTu)
	//console.log(toanTu.length);
	if(toanHang1.split('.').length-1 > 1 || toanHang2.split('.').length-1 >1){
	alert('Sai cu phap!');
	}
	if(tenToanTu == "cong"){
		document.getElementById("input").value = (Number(toanHang1) + Number(toanHang2));
		toanHang1 = document.getElementById("input").value;
		toanHang2 = '';
		toanTu = "";
	}
	if(tenToanTu == "tru"){
		document.getElementById("input").value = (Number(toanHang1) - Number(toanHang2));
		toanHang1 = document.getElementById("input").value;
		toanHang2 = '';
		toanTu = "";
	}
	if(tenToanTu == "nhan"){
		document.getElementById("input").value = (Number(toanHang1) * Number(toanHang2));
		toanHang1 = document.getElementById("input").value;
		toanHang2 = '';
		toanTu = "";
	}
	if(tenToanTu == "chia"){
		document.getElementById("input").value = (Number(toanHang1) / Number(toanHang2));
		toanHang1 = document.getElementById("input").value;
		toanHang2 = '';
		toanTu = "";
	}
	if(tenToanTu == "chiadu"){
		document.getElementById("input").value = (Number(toanHang1) % Number(toanHang2));
		toanHang1 = document.getElementById("input").value;
		toanHang2 = '';
		toanTu = "";
	}
	if(tenToanTu == "can"){
		if(toanHang1 == '' || toanHang1 == null){
			document.getElementById("input").value = (Number(Math.sqrt(Number(toanHang2))));
		} else {
			document.getElementById("input").value = (Number(toanHang1) * Math.sqrt(Number(toanHang2)));
		}
		toanHang1 = document.getElementById("input").value;
		toanHang2 = '';
		toanTu = "";
	} 
}

function del(){
	//console.log('document.getElementById("input").value')
	document.getElementById("input").value = document.getElementById("input").value.slice(0,document.getElementById("input").value.length-1) 
	console.log(document.getElementById("input").value);
	console.log(toanHang1);
	console.log(toanHang2);
	console.log(toanTu);
	if(toanTu == '' || toanTu == null){
		toanHang1 = toanHang1.slice(0,toanHang1.length-1);
		console.log(toanHang1);
	} else if((toanTu != '' || toanTu != null) && (toanHang2 == '' || toanHang2 == null)){
		toanTu = '';
		console.log(toanTu);
	} else if(toanHang2 != '' || toanHang2 != null){
		toanHang2 = toanHang2.slice(0,toanHang2.length-1);
		console.log (toanHang2)
	}
}

function ToanHang(num){
	document.getElementById("input").value += num;
	if(toanTu == '' || toanTu == null){
		toanHang1 += num;
	} else {
		toanHang2 += num;
	}	
}

function ToanTu(ttu, tentt){
	if(toanTu == '' || toanTu == null){
		document.getElementById("input").value += ttu;
		toanTu = document.getElementById("input").value;
		tenToanTu = tentt;
	} else {
		alert('Chi su dung 1 toan tu.')
	}
	//console.log(tenToanTu);
}

function clearAll(){
	// console.log('document.getElementById("input").value')
	// console.log("hoho")
	document.getElementById("input").value = '';
	tenToanTu = '';
	toanHang1 = '';
	toanHang2 = '';
	toanTu = '';
	//console.log(tenToanTu+toanHang2+toanHang1+toanTu)
}