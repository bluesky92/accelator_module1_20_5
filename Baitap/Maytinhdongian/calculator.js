function cat() {
	//console.log("ok");
	var info ="";
	info= document.getElementById('rsl').textContent;
	//info =parseInt(info);
	console.log(info);
	//var oper1 = info.search("*");
	var num = new Array(); // mảng lưu số 
	var oper1 = new Array(); // mảng lưu vị trí phép tính 
	var oper11 = new Array(); //mảng lưu phép tính ưu tiên
	var oper2 = new Array(); //mảng lưu phép tính không ưu tiên
	var oper22 = new Array(); //mảng lưu phép tính ưu tiên
	var numfin = new Array(); //mảng lưu kết quả phép toán
	var idx =0,idx2 =0;
	var idn =0;
	var flag =0;
	var buf ="";
	console.log("độ dài: "+info.length);
	for (var i = 0; i < info.length; i++) {
		if ( info[i] == '*' || info[i] == '/' || info[i] == '+' 
			|| info[i]=='-' || info[i]=='=') {
		    //console.log(info[i]);
			if (info[i] == '*' || info[i]=='/'){
				
			    oper1[idx] =idn;
			    oper11[idx] = info[i];
			    
			    console.log("phép: "+oper11[idx]);
			    console.log("vị trí: "+idx);
			    idx+=1;
			} else {
				oper2[idx2] =idn;
				oper22[idx2] =info[i];
				idx2+=1;
			}
				//flag = 1;
				num[idn] =parseInt(buf);
		    	idn +=1;
		    	buf ="";
		    	//flag =0;
		    
		} else {
			buf+=info[i];
		} 

	}
	console.log('Mảng phép tính ưu tiên:');
	for (var i = 0; i < oper1.length; i++) {
		console.log(oper1[i]);
		console.log(oper11[i]);

	}
	console.log('Mảng phép tính  không ưu tiên:');
	for (var i = 0; i < oper2.length -1; i++) {
		console.log(oper2[i]);
		console.log(oper22[i]);

	}
	console.log('Mảng số:');
	for (var i = 0; i < num.length; i++) {
		console.log(num[i]);
	}
	// tính toán (phần tính toán ở đây!)
	for (var i = 0; i < oper1.length; i++) {
		// debug
		num[oper1[i]] = cal(num[oper1[i]], num[oper1[i]+1],oper11[i]);
		//numfin[i] = cal(num[oper1[i]], num[oper1[i]+1],oper11[i]);
		//console.log(cal(num[oper1[i]], num[oper1[i]+1],oper11[i])); 
		//oper1[i]
		//numfin[i] =
	}
	// in ra kết quả tạm thời 
	console.log("in ra mảng số:");
	//for (var i = 0; i < numfin.length; i++) {
	//	console.log(numfin[i]);
	//}
	// cần gỡ bọ, đang bị lỗi nếu các phép tính liên tiếp cách nhau
	//ưu tiên xong rồi không ưu tiên thì tạm thời đúng
	// còn 2 đến 3 ưu tiên cạnh nhau thì tạm thời không đúng
	// nên làm xong một phép tính ưu tiên rồi sắp xếp lại, duyệt lại
	// thì có thể xong, rồi duyệt lại
	// do không có thời gian để duyệt nên chưa làm được 
	
	for (var i = 0; i < num.length; i++) {
		console.log(num[i]);
	}
}
function push(argument) {
	// body...
	console.log(argument);
	document.getElementById('rsl').innerHTML +=argument;
}
function xoa() {
	// body...
	document.getElementById('rsl').innerHTML ="";
	console.log("cleared..");
}
function cal(num1,num2,pheptinh) {
	console.log('num1:'+num1);
	console.log('num2:'+num2);
	console.log('pheptinh:'+pheptinh);
	switch (pheptinh){
		case '*':
			return num1*num2;
		break;
		case '/':
			return num1/num2;
		break;
		default: 
		break;
	}
}