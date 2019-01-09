
//购物车
	var oTcat = document.querySelector('.top-car')
	var oCat = document.querySelector('.car-a')
	var oContent = document.querySelector('.cart-content')
	var oLoder= document.querySelector('.loader')
	var oTxt= document.querySelector('.txt')
	var cattimer = 0;

	oTcat.onmouseenter = function(){
		oCat.style.color = '#ff6700';
		oCat.style.background = '#fff';
		oLoder.style.display = 'block';
		sssss(oContent,{height:100},1,function(){
			setTimeout(function(){
				oLoder.style.display = 'none';
				oTxt.style.display = 'block';
			},300)
		});
	}
	oTcat.onmouseleave = function(){
		oCat.style.color = '#b0b0b0';
		oCat.style.background = '#424242';
		sssss(oContent,{height:0},1);
		oLoder.style.display = 'none';
		oTxt.style.display = 'none';
	}

//选项卡
	var oAtn = document.querySelectorAll('.header-nav-ul-li')
	var oAtn2= document.querySelector('#header-nav-ul-2')
	var oAtn4= document.querySelector('#header-nav-ul-3')
	var timer = 0;
	var timer2 = 0;
	for(var i=1;i<oAtn.length-2;i++){
		oAtn[i].index = i;
		oAtn[i].onmouseenter = function(){
			clearTimeout(timer);
			oAtn4.style.borderTop = '1px splid #ccc';
			oAtn4.innerHTML = '<div class="loader2"></div>';
			oAtn4.style.display='block';
			sssss(oAtn4,{height:230},1,function(){
				oAtn4.style.overflow = 'visible';
			});
			var _this = this;
			clearTimeout(timer2);
			timer2 = setTimeout(function(){
				loadData(_this.index);
			},300)
		}
		oAtn[i].onmouseleave = function(){
			clearTimeout(timer)
			 timer = setTimeout(function(){
				oAtn4.style.overflow = 'hidden';
				sssss(oAtn4,{height:0},1,function(){
					oAtn4.style.display='none';
					oAtn4.style.borderTop = 'none';
				});
				
			},500)
		}
	}
	oAtn4.onmouseenter = function(){
		clearTimeout(timer);
	}
	oAtn4.onmouseleave = function(){
		 timer = setTimeout(function(){
			oAtn4.style.overflow = 'hidden';
			sssss(oAtn4,{height:0},1,function(){
				oAtn4.style.display='none';
				oAtn4.style.borderTop = 'none';
			});
			
		},500)		
	}
	function loadData(index){
		var data = aAtn[index-1];
		var html = '<ul>';
		for(var i = 0;i<data.length;i++){
		html +=		'			<li class="header-nav-ul-3-li">'
		html +=		'				<a href="'+data[i].url+'" class="clearfix">'
		html +=		'					<img src="'+data[i].img+'" alt="">'
		html +=		'				</a>'
		html +=		'				<a href="#">'
		html +=		'					<p>'+data[i].name+'</p>'
		html +=		'				</a>'
		html +=		'				<span>'+data[i].price+'元起</span>'
		if(data[i].tag){
			html +=     '    			<span class="xinpin">'+data[i].tag+'</span>' 
			
		}
		html +=		'			</li>'
	
		}
		html +='</ul>';
		oAtn4.innerHTML = html;

	}
	//全部商品分类
	oAtn[0].onmouseenter=function(){
		oAtn2.style.display='block';
	}
	oAtn[0].onmouseleave=function(){
		oAtn2.style.display='none';
	}

//小米8青春版固定定位、轮播图固定定位、绝对定位
	var oHomeb= document.querySelector('.homeb')
	var oMinb= document.getElementById('box')
	window.onscroll = function(){
		if(document.documentElement.scrollTop>=140){
			sssss(oHomeb,{height:65})
			oHomeb.style.display='block';
		}else{
			sssss(oHomeb,{height:0},1,function(){
			oHomeb.style.display='none';	
			})
		}
		if(document.documentElement.scrollTop<200){
			oMinb.style.position='relative';
			oMinb.style.top='30px';
			oMinb.style.left='0';	
		}else if(document.documentElement.scrollTop>=200&&document.documentElement.scrollTop<=1000){
			oMinb.style.position='fixed';
			oMinb.style.top='100px';
			oMinb.style.left='180px';
			console.log(document.documentElement.scrollTop)
		}else if(document.documentElement.scrollTop>1000){
			oMinb.style.position='relative';
			oMinb.style.top='950px';
			oMinb.style.left='0';	
			console.log(document.documentElement.scrollTop)
		}
	}
	

//生成轮播图
	function Lbpicture(options){
		//罗列需要的属性
		this.oBox = document.getElementById(options.id);
		this.Img = options.img;
		this.width = options.width;
		this.height = options.height;
		this.playAuto = options.playAuto;
		this.now = 0;
		this.oBox.style.width = this.width+'px';
		this.oBox.style.height = this.height+'px';
		//绑定事件
		this.addSelect();
		this.bindevent();
		//自动播放
		if(this.playAuto){
			this.auto();
		}

	}
	Lbpicture.prototype.addSelect = function(){
		//创建DOM节点
		//生成图片容器
		this.oUl = document.createElement('ul')
		//生成底部按钮容器
		this.oUl2 = document.createElement('ul');
		for(var i=0;i<this.Img.length;i++){
			var oli = document.createElement('li')
			var oimg = document.createElement('img')
			var oli2 = document.createElement('li');

			oimg.src = this.Img[i];
			oli.appendChild(oimg);
			oli.className = 'ccc'
			oli2.className = 'activeli';
			oli2.style.float = 'left';
			this.oUl.appendChild(oli);
			this.oUl2.appendChild(oli2);
		}
		//生成左右按钮
		this.oRightRow = document.createElement('span')
		this.oLeftRow = document.createElement('span')
		//给按钮绑定classNAME
		this.oRightRow.className = 'iconfont row rightrow'
		this.oLeftRow.className = 'iconfont row leftrow'
		this.oRightRow.innerHTML = '&#xe622;';
		this.oLeftRow.innerHTML = '&#xe627;';
		this.oUl2.className = 'active';
		this.oUl2.style.zIndex = '55';
		this.oUl2.style.left = '50%';
		//添加DOM节点到BOX
		this.oBox.appendChild(this.oUl);
		this.oBox.appendChild(this.oUl2);
		this.oBox.appendChild(this.oRightRow);
		this.oBox.appendChild(this.oLeftRow);
		
	}
	Lbpicture.prototype.bindevent = function(){
		var _this = this
		//绑定右按钮
		
		this.oUl2.children[0].style.borderColor = 'rgb(0,0,0,0.5)';		
		this.oRightRow.onclick = function(){
			//显示下一张
			_this.now++;
			if(_this.now>3){
				_this.now = 0;
			}
			_this.tab();
		}
		//绑定左按钮
		this.oLeftRow.onclick = function(){
			_this.now--;
			if(_this.now<0){
				_this.now = 3;
			}
			_this.tab();			
		}
		//绑定底部按钮
		for(var i = 0;i<this.oUl2.children.length;i++){
				this.oUl2.children[i].index = i;
			this.oUl2.children[i].onclick = function(){
				_this.now = this.index;
				_this.tab();
			}
		}



	}
	Lbpicture.prototype.tab = function(){
			for(var i =0;i<this.Img.length;i++){
				this.oUl.children[i].style.zIndex = 0;
				this.oUl.children[i].style.dispaly = 'none';
				this.oUl.children[i].style.opacity = 0.4;
				this.oUl2.children[i].style.borderColor = 'rgb(0,0,0,0.2)';
			}
				this.oUl.children[this.now].style.zIndex = 50;
				this.oUl.children[this.now].style.dispaly = 'block';
				// this.oUl.children[this.now].style.opacity = 1;	
				sssss(this.oUl.children[this.now],{opacity:100})
				this.oUl2.children[this.now].style.borderColor = 'rgb(0,0,0,0.5)';

	}
	Lbpicture.prototype.auto = function(){
		var _this = this;
		var timer = 0;
		timer = setInterval(this.oRightRow.onclick,this.playAuto);
		this.oBox.onmouseover = function(){
			clearInterval(timer);
		}
		this.oBox.onmouseout = function(){
			timer = setInterval(_this.oRightRow.onclick,_this.playAuto);
		}
	}

	new Lbpicture({
		id:'box',
		img:["images/q1.jpg","images/q2.jpg","images/q3.jpg","images/q4.jpg"],
		width:560,
		height:560,
		playAuto:2000
	});	
	