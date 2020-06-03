var that;
	
	function Mode(obj,top,Midd,bottom){
		this.title=obj.title;
		this.content=obj.content;
		this.width=obj.width;
		this.height=obj.height;
		this.appear=obj.appear;
		this.top=top;
		this.Midd=Midd;	
		this.bottom=bottom;
		this.select=obj.select;
		this.xiangxia=obj.xiangxia;
		this.flag=obj.flag;
		this.x=obj.diaX;
		this.y=obj.diaY;
		// console.log(this.x)
		this.die = document.getElementsByTagName("body")[0];
		this.inset=' <div class="dialog"><div class="biaoti"><h3 class="sel">'+ this.title +'</h3><i class="iconfont">&#xe602;</i></div><div class="content"><p class="sel">'+ this.content +'</p></div><div class="anniu"><div class="queding">取消</div><div class="quxiao">确定</div></div></div>'
		this.tog = document.getElementsByClassName('btn')[3];
		this.tog.insertAdjacentHTML('afterend',this.inset);  // 直接复制html的结构到DOM树上，第一个参数代表插入到dom树的位置，第二个参数代表插入到哪个元素的前后
		this.diaDiv=document.getElementsByClassName('dialog');
		this.diaDiv[0].style.width = obj.width + 'px';
		this.diaDiv[0].style.height = obj.height+'px';
		this.diaDiv[0].style.boxShadow = obj.shadow;
		this.quxiao = document.getElementsByClassName('queding')[0];
		this.queding = document.getElementsByClassName('quxiao')[0];
		this.xuanqu = document.getElementsByClassName('biaoti');
		this.tit = document.querySelectorAll('.sel');
		this.mengban = document.getElementsByClassName('mengban');
		this.i=document.querySelector('i');
		// console.log(this.i);
		this.out();
		this.hover();
		this.updateNode();
		this.init();
		this.close();
		this.callback = obj.callback ; 
		// this.mousedown();
		// this.Node();
	}
	// 让对话框渐出
	Mode.prototype.init=function(){
		var that = this;
		// this.diaDiv[0].transition ='all 1s';
		this.diaDiv[0].style.opacity ='0';
		setTimeout(function(){
			that.diaDiv[0].style.opacity =obj.opacity;
			// for(var v=0;v<=change.length;v++){
				if(that.top=='top'){
					that.diaDiv[0].style.top =obj.top;
				}else if(that.select=='center'){
					that.diaDiv[0].style.top =obj.center;
				}else if(that.Midd=='Midd'){
					that.diaDiv[0].style.top=obj.center;
				}else if(that.select=='defaultde'){
					that.diaDiv[0].style.top=obj.center;
				}else if(that.select=='top'){
					that.diaDiv[0].style.top=obj.top;
				}else if(that.select=='bottom'){
					that.diaDiv[0].style.top=obj.bottom;
				}else{
					
				}
		},10)
	}
	// 实现拖动效果！
	// Mode.prototype.mousedown=function(){
	// 	that = this;
	// 	this.diaDiv[0].onmousedown = function(e) {
	// 	                var e = e || window.event; //要用event这个对象来获取鼠标的位置
	// 	                that.x = e.clientX - that.diaDiv[0].offsetLeft;
	// 					that.y = e.clientY - that.diaDiv[0].offsetTop;
	// 	                that.flag = true; //设为true表示可以移动
	// 	            }
	// 	            document.onmousemove = function(e) {
	// 	                //是否为可移动状态                　　　　　　　　　　　 　　　　　　　
	// 	                if(that.flag) {　　　　
	// 	                    var e = e || window.event;                    　　
	// 	                    var moveX = e.clientX - that.x; //得到距离左边移动距离                    　　
	// 	                    var moveY = e.clientY - that.y; //得到距离上边移动距离
	// 	                    //可移动最大距离
	// 	                    var maxX = document.documentElement.clientWidth - that.diaDiv[0].offsetWidth;
	// 	                    var maxY = document.documentElement.clientHeight - that.diaDiv[0].offsetHeight;
		
	// 	                    //范围限定  当移动的距离最小时取最大  移动的距离最大时取最小
	// 	                    //范围限定方法一
	// 	                    if(moveX < 0) {
	// 	                        moveX = 0
	// 	                    } else if(moveX > maxX) {
	// 	                        moveX = maxX;
	// 	                    }
		
	// 	                    if(moveY < 0) {
	// 	                        moveY = 0;
	// 	                    } else if(moveY > maxY) {
	// 	                        moveY = maxY;
	// 	                    }　
	// 	                    //范围限定方法二　
	// 	                    // moveX=Math.min(maxX, Math.max(0,moveX));
		                    
	// 	                    // moveY=Math.min(maxY, Math.max(0,moveY));
	// 	                    that.diaDiv[0].style.left = moveX + "px";　　
	// 	                    that.diaDiv[0].style.top = moveY + "px";　　　　　　　　　　
	// 	                } else {
	// 	                    return;　　　　　　　　　　
	// 	                }
			
	// 	            }
		
	// 	            document.onmouseup = function() {
	// 	                that.flag = false; //设置为false不可移动
	// 	            }
	// 		}

	// 让对话框从隐藏到显示
	// //  重新获取所有dom树上的结构
	// Mode.prototype.Node=function(){
	// 	this.child=this.die.childNodes;
	// 	console.log(this.child)
	// }
	// 给取消按钮绑定事件

	Mode.prototype.out=function(){
		that = this;
		// this.updataNode();
		// console.log(this.child)
		// var child = this.die.childNodes;
			this.queding.onclick=function(){
				that.callback.call(null);
				that.diaDiv[0].remove();
				that.mengban[0].style.display='none';
			}
			this.quxiao.onclick=function(){
				// that.die.removeChild(that.diaDiv[0]);
				that.diaDiv[0].remove();
				that.mengban[0].style.display='none';
		}	
	}
	// 给矢量图标I一个点击关闭事件
	Mode.prototype.close = function(){
		var that = this
		this.i.onclick=function(){
			that.diaDiv[0].remove();
			that.mengban[0].style.display='none';
		}
	}
	//  取消和确定按钮的颜色方法
	Mode.prototype.hover=function(){
		that = this;
		this.quxiao.onmouseover=function(){
			that.quxiao.style.backgroundColor = obj.cancelmouseover;
		}	
		this.quxiao.onmouseout=function(){
			that.quxiao.style.backgroundColor = obj.cancelmouseout;
		}	
		this.queding.onmouseover=function(){
			that.queding.style.backgroundColor = obj.suremouseout;
		}	
		this.queding.onmouseout=function(){
			that.queding.style.backgroundColor = obj.suremouseover;
		}	
	}
	//  给标题和内容部分添加文本框文字编辑
	Mode.prototype.updateNode=function(){
		var that = this;
		for(var i=0;i<2;i++){
			this.tit[i].ondblclick=function(){
				// console.log(11)
				var str =this.innerHTML;
				// // // 双击禁止选中文字
				// console.log(that.tit[1])
				window.getSelection?window.getSelection().removeAllRanges():document.selection.emtty();
				this.innerHTML = '<input type="text">';
				var input = this.children[0];
				console.log(input); 
				input.value = str;
				// // 让文本框里面的内容处于选中状态
				input.select();
				input.onblur=function(){
					this.parentNode.innerHTML =  this.value;
				}
			};
		}
			
	}

	