function tinhtoan(){
	 var diemly = document.getElementById('physic').value;

	 var diemhoa = document.getElementById('chemis').value;

	 var diemsinh = document.getElementById('bio').value;
	 alert("vaoham");
	 //var avg = (parseInt(diemly)+(parseInt(diemsinh)+(parseInt(diemhoa)))/3;
	 var tong = parseInt(diemly)+parseInt(diemsinh)+parseInt(diemhoa);
	 var avg = tong /3;
	 document.getElementById('trungbinh').innerHTML = 'Điểm trung bình 3 môn :' + avg ;
	 document.getElementById('sum').innerHTML = 'Tổng điểm 3 môn :' + tong;
	// (parseInt(diemly)+(parseInt(diemsinh)+(parseInt(diemhoa));
}
function convert() {

	 var doc = document.getElementById('doC').value;
	 
	 doc = parseInt(doc);
	// alert(doc);
	 var dof  = (doc/5)*9 +32;
	 // alert(dof);
	 document.getElementById('doF').innerHTML = dof;
}
function dientich() {

	 var rad = document.getElementById('radCycle').value;
	 
	 rad = parseInt(rad);
	// alert(doc);
	 var dientichhinhtron  = Math.PI*rad*rad;
	 // alert(dof);
	 document.getElementById('dientich').innerHTML = dientichhinhtron;
}
function chuvi() {

	 var rad = document.getElementById('radCycle').value;
	 
	 rad = parseInt(rad);
	// alert(doc);
	 var chuvihinhtron  = 2*Math.PI*rad;
	 // alert(dof);
	 document.getElementById('chuvi').innerHTML = chuvihinhtron;
}

