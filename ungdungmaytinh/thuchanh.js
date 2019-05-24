function xuly(input) {
	
	var s1 = parseFloat(document.getElementById('so1').value);
	var s2 = parseFloat(document.getElementById('so2').value);
	
	var rsl = 0;
	var oper ="";
	// log for debug
	//console.log("s1 :"+s1);
	//console.log("s2 :"+s2);
	//console.log(input);
	//alert ("i am here");
	
	switch (input){
		case 1:
			rsl =s1+s2;
			oper =" cộng ";
		break;
		case 2:
			rsl =s1-s2;
			oper =" trừ ";
		break;
		case 3:
			rsl =s1*s2;
			oper =" nhân ";
		break;
		case 4:
			rsl =s1/s2;
			oper =" chia ";
		break;
		default:
		break;
	}
	document.getElementById("ketqua").innerHTML 
	= s1 + oper + s2 + " = "+rsl;
 
		
}