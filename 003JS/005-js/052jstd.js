	function yd(obj){
			obj.onmousedown=function(ev){
				var disX = ev.clientX-obj.offsetLeft;
				var disY = ev.clientY-obj.offsetTop;
				document.onmousemove = function(ev){
					var l = ev.clientX - disX;
					var t = ev.clientY - disY;
					if(l<0){
						l=0;
					}
					else if(l>window.innerWidth-obj.offsetWidth){
						l=window.innerWidth-obj.offsetWidth;
					}
					if(t<0){
						t=0;
					}
					else if(t>window.innerHeight-obj.offsetHeight){
						t=window.innerHeight-obj.offsetHeight;
					}

					obj.style.left =l + 'px';
					obj.style.top =t + 'px';
				}
				obj.onmouseup = function(){
					document.onmousemove = null;
					document.onmousedown = null;
				}			
				
			}
		}