function convert() {
	 //alert("im in");
	var sotien = parseInt(document.getElementById('sotien').value);
	//alert (sotien)
	var fcur = document.getElementById('fromcur').value;
	//alert (fcur);
	var tocur = document.getElementById('tocur').value;
	// muốn lấy nội dung của text trong thẻ 
	//var mm = document.getElementById('tocur').textContent;
	var mm = document.getElementById('tocur');
	var mm1 = mm.options[mm.selectedIndex].text;
	var mm2 = document.getElementById('fromcur');
	var mm22 = mm2.options[mm2.selectedIndex].text;
	//var mm1 = mm.options[mm.selectedIndex].text;
	console.log(mm1);
	console.log(mm22);
	//alert (tocur);
	// lấy tỉ giá quy đổi 
	var tigia =1;
	if (fcur == 'fusd') {
		if ( tocur == 'tvnd') tigia = 23000; else tigia =1; 
	} else {
		if (tocur == 'tvnd') tigia =1; else tigia = 1/23000;
	}
	var ketqua = sotien*tigia;
	// in thử kết quả ra màn hình log
	console.log(ketqua);
	// in thật
	document.getElementById('ketqua').innerHTML = 
	sotien+" "+mm22+" = "+ketqua+" "+mm1;
}