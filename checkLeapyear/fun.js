function check() {
	// 
	var m = parseInt(document.getElementById('years').value);
	//console.log (m);
	var meg;
	if(m % 4 == 0){
    	if(m % 100 == 0){
        	if(m % 400 == 0){
            	meg =m  + " is a leap year";
        	} else {
            	meg =m  + " is NOT a leap year";
        	}
    	} else {
        	meg = m + " is a leap year";
    	}
	} else {
	    meg =m + " is NOT a leap year";
	}
	document.getElementById('ketqua').innerHTML = meg;

}
