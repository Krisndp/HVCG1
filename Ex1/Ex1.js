
function name() {
  var txt;
  var person = prompt("Hãy nhập tên của bạn");
  if (person == null || person == "") {
    txt = "Bạn chưa nhập thông tin";
  } else {
    txt = person;
  }
  document.getElementById("name").innerHTML = txt;
};

function address() {
	var txt;
	var address = prompt("Hãy nhập thành phố của bạn");
	if(address == null || address == ""){
		txt = "Bạn chưa nhập thông tin"
	} else {
		txt =  address;
	}
	document.getElementById("address").innerHTML = txt;
};

function sdt() {
	var txt;
	var sdt = prompt("Hãy nhập số điện thoại của bạn");
	if(sdt == null || sdt == ""){
		txt = "Bạn chưa nhập thông tin"
	} else {
		txt =  sdt;
	}
	document.getElementById("sdt").innerHTML = txt;
}

function main() {
	alert('Chào   mừng   đến   với   ứng   dụng   Javascript   đầu   tiên!');
	name();
	address();
	sdt();
	alert('Cám   ơn   bạn   đã cung   cấp   thông   tin!');
}

main();