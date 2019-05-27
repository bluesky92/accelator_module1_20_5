var imgObj =null;
var imgObj2 = null;
function init() {
	 imgObj=document.getElementById('myImage');
	 imgObj.style.position = 'relative';
	 imgObj.style.left = '0px';
	 imgObj.style.right = '0px';
	 imgObj.style.bottom = '10px';
	 

	 imgObj2=document.getElementById('myImage2');
	 imgObj2.style.position = 'relative';
	 imgObj2.style.top = '300px';
}
window.onload = init;
function moveRight() {
	imgObj.style.left = parseInt(imgObj.style.left) +10+'px';
}
function moveLeft() {
	imgObj.style.left = parseInt(imgObj.style.left) -10+'px';
}
function moveTop() {
	imgObj.style.bottom = parseInt(imgObj.style.bottom) -10+'px';
	imgObj.style.top = parseInt(imgObj.style.bottom);

}
function moveBottom() {
	imgObj.style.bottom = parseInt(imgObj.style.bottom) +10+'px';
	imgObj.style.top = parseInt(imgObj.style.bottom);
}


