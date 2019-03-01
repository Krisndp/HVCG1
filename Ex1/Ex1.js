
function name() {
  var txt;
  var person = prompt("Hãy nhập tên của bạn");
  if (person == null || person == "") {
    txt = "Bạn chưa nhập thông tin";
  } else {
    txt = person;
  }
  document.write("<p> Tên của bạn:"+ txt +"</p>");
}


function address() {
	var txt;
	var address = prompt("Hãy nhập thành phố của bạn");
	if(address == null || address == ""){
		txt = "Bạn chưa nhập thông tin"
	} else {
		txt =  address;
	}
	document.write("<p> Thành phố:"+ txt +"</p>");
}


function sdt() {
	var txt;
	var sdt = prompt("Hãy nhập số điện thoại của bạn");
	if(sdt == null || sdt == ""){
		txt = "Bạn chưa nhập thông tin"
	} else {
		txt =  sdt;
	}
	document.write("<p> Số điện thoại:"+ txt +"</p>");
}