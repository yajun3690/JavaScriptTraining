	

window.onload=function(){
	function tobig(){
		var  obox=document.getElementById('box');
		obox.style.width='200px';
		obox.style.height='200px';
		// alert('he');
	}
	var  obox=document.getElementById('box');
	obox.onclick=tobig;
	}